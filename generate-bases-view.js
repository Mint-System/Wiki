const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");
const matter = require("gray-matter");

// Function to evaluate filters recursively
function evaluateFilters(filters, fileObj, mdFile) {
  if (filters.and) {
    return filters.and.every((filter) =>
      evaluateFilter(filter, fileObj, mdFile),
    );
  } else if (filters.or) {
    return filters.or.some((filter) => evaluateFilter(filter, fileObj, mdFile));
  }
  return true;
}

// Function to evaluate a single filter (can be string or nested object)
function evaluateFilter(filter, fileObj, mdFile) {
  if (typeof filter === "string") {
    return evaluateFilterString(filter, fileObj, mdFile);
  } else if (typeof filter === "object" && filter !== null) {
    // Handle nested and/or conditions
    return evaluateFilters(filter, fileObj, mdFile);
  }
  return true;
}

// Function to evaluate a filter string
function evaluateFilterString(filter, fileObj, mdFile) {
  try {
    const filterFn = new Function(
      "fileObj",
      `
      // File properties
      const file = {
        name: fileObj['file.name'],
        ext: fileObj['file.ext'],
        tags: fileObj['tags'] || []
      };

      // Create safe getter function
      const get = (prop) => fileObj[prop] || '';

      // Create objects with methods for properties
      const createPropertyObject = (value) => {
        const val = value || '';
        return {
          toString: () => val,
          valueOf: () => val,
          isEmpty: () => !val || String(val).trim() === ''
        };
      };

      // Create variables for common properties that might be used in filters
      const section = createPropertyObject(get('section'));
      const kind = createPropertyObject(get('kind'));
      const tags = get('tags') || [];
      const title = createPropertyObject(get('title'));
      const status = createPropertyObject(get('status'));
      const type = createPropertyObject(get('type'));
      const category = createPropertyObject(get('category'));
      const priority = createPropertyObject(get('priority'));
      const date = createPropertyObject(get('date'));
      const author = createPropertyObject(get('author'));

      // For equality comparisons, we need to handle the object wrapper
      const originalSection = section;
      const originalKind = kind;

      // Override valueOf for comparisons to work
      section.valueOf = () => get('section');
      kind.valueOf = () => get('kind');

      return ${filter};
    `,
    );
    return filterFn(fileObj);
  } catch (error) {
    console.error(
      `Error evaluating filter '${filter}' for file '${mdFile}':`,
      error,
    );
    return false;
  }
}

// Get all .md files in the current directory
const mdFiles = fs
  .readdirSync(".")
  .filter((file) => file.endsWith(".md") && !file.endsWith(".base.md"));

// Get all .base files in the bases directory
const baseFiles = fs
  .readdirSync("./bases")
  .filter((file) => file.endsWith(".base"));

// Process each base file
baseFiles.forEach((baseFile) => {
  // Read the base file
  const baseContent = fs.readFileSync(path.join("./bases", baseFile), "utf8");
  const baseData = yaml.load(baseContent);

  // Get the base name without extension
  const baseName = path.basename(baseFile, ".base");

  // Process each view in the base file
  baseData.views.forEach((view) => {
    // Create a list of objects with attributes from markdown files
    const tableData = [];

    // Process each markdown file
    mdFiles.forEach((mdFile) => {
      // Read the markdown file
      const mdContent = fs.readFileSync(mdFile, "utf8");
      const { data: frontmatter } = matter(mdContent);

      // Create an object with file attributes
      const fileObj = {
        "file.name": path.basename(mdFile, ".md"),
        "file.ext": "md",
        ...frontmatter,
      };

      // Check if the file matches the filters
      let matches = true;

      // Handle filters (evaluate the filter strings as JavaScript)
      if (view.filters) {
        matches = evaluateFilters(view.filters, fileObj, mdFile);
      }

      if (matches) {
        // Add the file object to the table data
        tableData.push(fileObj);
      }
    });

    // Sort the table data
    if (view.sort) {
      view.sort.forEach((sortRule) => {
        const property = sortRule.property;
        const direction = sortRule.direction || "ASC";

        tableData.sort((a, b) => {
          let aVal = a[property];
          let bVal = b[property];

          // Convert values to strings for comparison
          if (Array.isArray(aVal)) {
            aVal = aVal.join(", ");
          } else {
            aVal = String(aVal || "");
          }

          if (Array.isArray(bVal)) {
            bVal = bVal.join(", ");
          } else {
            bVal = String(bVal || "");
          }

          if (direction === "DESC") {
            return bVal.localeCompare(aVal);
          } else {
            return aVal.localeCompare(bVal);
          }
        });
      });
    }

    // Get the column names from the order array or from the data
    let columnNames = view.order || [];
    if (columnNames.length === 0 && tableData.length > 0) {
      columnNames = Object.keys(tableData[0]);
    }

    // Generate the markdown table
    let markdownTable = `---
kind: reference
section: bases
---

# ${baseName}
`;

    // Add the header row
    markdownTable += `| ${columnNames.join(" | ")} |
`;
    markdownTable += `| ${columnNames.map(() => "---").join(" | ")} |
`;

    // Add the data rows
    tableData.forEach((row) => {
      const rowValues = columnNames.map((column) => {
        const value = row[column];
        if (column === "file.name") {
          // Create a link for file.name
          return `[[${value}]]`;
        } else if (Array.isArray(value)) {
          // Join array values
          return value.join(", ");
        } else {
          // Return the value as string or empty string if undefined
          return value || "";
        }
      });
      markdownTable += `| ${rowValues.join(" | ")} |
`;
    });

    // Write the markdown table to a file
    const outputFileName = `Liste ${baseName}.md`;
    fs.writeFileSync(outputFileName, markdownTable);
    console.log(`Generated "${outputFileName}"`);
  });
});
