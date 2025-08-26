const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const matter = require('gray-matter');

// Get all base files
const basesDir = path.join(__dirname, 'bases');
const baseFiles = fs.readdirSync(basesDir);

// Process each base file
baseFiles.forEach(baseFile => {
  // Read the base file
  const baseFilePath = path.join(basesDir, baseFile);
  const baseContent = fs.readFileSync(baseFilePath, 'utf8');
  const baseData = yaml.load(baseContent);

  // Process each view in the base file
  baseData.views.forEach(view => {
    // Get all markdown files
    const markdownFiles = fs.readdirSync(__dirname)
      .filter(file => file.endsWith('.md') && !file.endsWith('.base.md'));

    // Create list of objects with attributes from markdown files
    const objects = markdownFiles.map(file => {
      const filePath = path.join(__dirname, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const frontmatter = matter(fileContent);

      return {
        file: {
          name: file,
          path: filePath,
          content: fileContent
        },
        ...frontmatter.data
      };
    });

    // Apply filters
    let filteredObjects = objects;
    if (view.filters) {
      // For simplicity, we'll implement a basic filter for file.name.startsWith
      if (view.filters.or) {
        filteredObjects = objects.filter(obj => {
          return view.filters.or.some(filter => {
            if (filter.includes('file.name.startsWith')) {
              const match = filter.match(/file\.name\.startsWith\("(.+)"\)/);
              if (match) {
                const prefix = match[1];
                return obj.file.name.startsWith(prefix);
              }
            }
            return false;
          });
        });
      }
    }

    // Sort objects
    if (view.sort) {
      filteredObjects.sort((a, b) => {
        for (const sort of view.sort) {
          const propertyParts = sort.property.split('.');
          let valueA = a;
          let valueB = b;

          // Navigate through nested properties
          for (const part of propertyParts) {
            valueA = valueA[part];
            valueB = valueB[part];
          }

          if (valueA < valueB) {
            return sort.direction === 'DESC' ? 1 : -1;
          }
          if (valueA > valueB) {
            return sort.direction === 'DESC' ? -1 : 1;
          }
        }
        return 0;
      });
    }

    // Generate markdown table
    let markdownOutput = '# Prozesse\n\n';

    if (view.type === 'table') {
      // Use only the properties specified in the order array for table headers
      const orderedProperties = view.order || [];

      // Create table header
      if (orderedProperties.length > 0) {
        markdownOutput += '| ' + orderedProperties.join(' | ') + ' |\n';
        markdownOutput += '| ' + orderedProperties.map(() => '---').join(' | ') + ' |\n';

        // Create table rows
        filteredObjects.forEach(obj => {
          const row = orderedProperties.map(prop => {
            if (prop.startsWith('file.')) {
              const fileProp = prop.substring(5);
              // For file.name, convert to wiki link format
              if (fileProp === 'name') {
                if (obj.file && obj.file.name) {
                  // Remove .md extension and create wiki link
                  const fileNameWithoutExtension = obj.file.name.replace(/\.md$/, '');
                  return `[[${fileNameWithoutExtension}]]`;
                }
                return '';
              }
              // For file.content, we just show a placeholder since it can be very large
              if (fileProp === 'content') {
                return '[Content]';
              }
              return obj.file && obj.file[fileProp] ? obj.file[fileProp] : '';
            } else {
              return obj[prop] || '';
            }
          });
          markdownOutput += '| ' + row.join(' | ') + ' |\n';
        });
      }
    }

    // Write output to file
    const outputFileName = baseFile.replace('.base', '.base.md');
    const outputFilePath = path.join(__dirname, outputFileName);
    fs.writeFileSync(outputFilePath, markdownOutput);
  });
});
