const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const matter = require('gray-matter');

// Get all .md files in the current directory
const mdFiles = fs.readdirSync('.')
  .filter(file => file.endsWith('.md') && !file.endsWith('.base.md'));

// Get all .base files in the bases directory
const baseFiles = fs.readdirSync('./bases')
  .filter(file => file.endsWith('.base'));

// Process each base file
baseFiles.forEach(baseFile => {
  // Read the base file
  const baseContent = fs.readFileSync(path.join('./bases', baseFile), 'utf8');
  const baseData = yaml.load(baseContent);

  // Get the base name without extension
  const baseName = path.basename(baseFile, '.base');

  // Process each view in the base file
  baseData.views.forEach(view => {
    // Create a list of objects with attributes from markdown files
    const tableData = [];

    // Process each markdown file
    mdFiles.forEach(mdFile => {
      // Read the markdown file
      const mdContent = fs.readFileSync(mdFile, 'utf8');
      const { data: frontmatter } = matter(mdContent);

      // Create an object with file attributes
      const fileObj = {
        'file.name': path.basename(mdFile, '.md'),
        'file.ext': 'md',
        ...frontmatter
      };

      // Check if the file matches the filters
      let matches = true;

      // Handle filters (evaluate the filter strings as JavaScript)
      if (view.filters) {
        if (view.filters.and) {
          // All filters in the 'and' array must be true
          matches = view.filters.and.every(filter => {
            try {
              // Create a function to evaluate the filter
              const filterFn = new Function('fileObj', `
                const file = { name: fileObj['file.name'], ext: fileObj['file.ext'] };
                return ${filter};
              `);
              return filterFn(fileObj);
            } catch (error) {
              console.error(`Error evaluating filter '${filter}' for file '${mdFile}':`, error);
              return false;
            }
          });
        } else if (view.filters.or) {
          // At least one filter in the 'or' array must be true
          matches = view.filters.or.some(filter => {
            try {
              // Create a function to evaluate the filter
              const filterFn = new Function('fileObj', `
                const file = { name: fileObj['file.name'], ext: fileObj['file.ext'] };
                return ${filter};
              `);
              return filterFn(fileObj);
            } catch (error) {
              console.error(`Error evaluating filter '${filter}' for file '${mdFile}':`, error);
              return false;
            }
          });
        }
      }

      if (matches) {
        // Add the file object to the table data
        tableData.push(fileObj);
      }
    });

    // Sort the table data
    if (view.sort) {
      view.sort.forEach(sortRule => {
        const property = sortRule.property;
        const direction = sortRule.direction || 'ASC';

        tableData.sort((a, b) => {
          const aVal = a[property] || '';
          const bVal = b[property] || '';

          if (direction === 'DESC') {
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
    let markdownTable = `# ${baseName}`;

    // Add the header row
    markdownTable += `| ${columnNames.join(' | ')} |
`;
    markdownTable += `| ${columnNames.map(() => '---').join(' | ')} |
`;

    // Add the data rows
    tableData.forEach(row => {
      const rowValues = columnNames.map(column => {
        const value = row[column];
        if (column === 'file.name') {
          // Create a link for file.name
          return `[[${value}]]`;
        } else if (Array.isArray(value)) {
          // Join array values
          return value.join(', ');
        } else {
          // Return the value as string or empty string if undefined
          return value || '';
        }
      });
      markdownTable += `| ${rowValues.join(' | ')} |`;
    });

    // Write the markdown table to a file
    const outputFileName = `${baseName}.base.md`;
    fs.writeFileSync(outputFileName, markdownTable);
    console.log(`Generated ${outputFileName}`);
  });
});
