const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const frontMatter = require('front-matter');

// Function to evaluate filter expressions
function evaluateFilter(filter, fileObj) {
  if (typeof filter === 'string') {
    // Create a safe context for evaluation
    const context = { file: fileObj };
    try {
      // Use Function constructor for safer evaluation
      return new Function('file', `return ${filter}`)(context);
    } catch (e) {
      console.error(`Error evaluating filter: ${filter}`, e);
      return false;
    }
  }
  return false;
}

// Function to process OR filters
function evaluateOrFilters(orFilters, fileObj) {
  for (const filter of orFilters) {
    if (evaluateFilter(filter, fileObj)) {
      return true;
    }
  }
  return false;
}

// Function to get all markdown files
function getAllMarkdownFiles(dirPath) {
  const files = [];
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && item !== 'bases' && item !== 'node_modules') {
      files.push(...getAllMarkdownFiles(fullPath));
    } else if (stat.isFile() && item.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to extract frontmatter and file info
function processMarkdownFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fm = frontMatter(content);
    const fileName = path.basename(filePath, '.md');
    const relativePath = path.relative(process.cwd(), filePath);
    
    // Create file object for filtering
    const fileObj = {
      name: fileName,
      path: relativePath,
      tags: fm.attributes.tags || []
    };
    
    return {
      file: fileObj,
      content: fm.body,
      attributes: fm.attributes
    };
  } catch (e) {
    console.error(`Error processing file ${filePath}:`, e);
    return null;
  }
}

// Function to convert value to string for table display
function formatValue(value) {
  if (Array.isArray(value)) {
    return value.join(', ');
  } else if (typeof value === 'object' && value !== null) {
    return JSON.stringify(value);
  } else if (value === undefined || value === null) {
    return '';
  }
  return String(value);
}

// Function to generate markdown table
function generateMarkdownTable(files, order) {
  if (files.length === 0) {
    return '';
  }
  
  // Create header
  const headers = order.map(field => field.replace(/\./g, ' ')); // Replace dots with spaces for display
  let table = `| ${headers.join(' | ')} |\n`;
  table += `| ${headers.map(() => '---').join(' | ')} |\n`;
  
  // Create rows
  for (const fileData of files) {
    const row = [];
    for (const field of order) {
      // Handle nested properties like 'file.name'
      let value;
      if (field.startsWith('file.')) {
        const prop = field.split('.')[1];
        value = fileData.file[prop];
      } else {
        value = fileData.attributes[field];
      }
      row.push(formatValue(value));
    }
    table += `| ${row.join(' | ')} |\n`;
  }
  
  return table;
}

// Main function
function main() {
  // Get all base files
  const basesDir = path.join(process.cwd(), 'bases');
  if (!fs.existsSync(basesDir)) {
    console.error('Bases directory not found');
    return;
  }
  
  const baseFiles = fs.readdirSync(basesDir);
  
  // Process each base file
  for (const baseFile of baseFiles) {
    if (!baseFile.endsWith('.base')) continue;
    
    try {
      // Read the base file
      const baseFilePath = path.join(basesDir, baseFile);
      const baseContent = fs.readFileSync(baseFilePath, 'utf8');
      const baseData = yaml.load(baseContent);
      
      // Get all markdown files
      const markdownFiles = getAllMarkdownFiles(process.cwd());
      const processedFiles = markdownFiles
        .map(processMarkdownFile)
        .filter(Boolean);
      
      // Process each view in the base file
      for (const view of baseData.views) {
        // Filter files based on view filters
        const filteredFiles = processedFiles.filter(fileData => {
          if (view.filters) {
            // Handle OR filters
            if (view.filters.or) {
              return evaluateOrFilters(view.filters.or, fileData.file);
            }
            // Handle single filter
            else if (view.filters) {
              return evaluateFilter(view.filters, fileData.file);
            }
          }
          return true; // No filters, include all
        });
        
        // Sort files if sort configuration exists
        if (view.sort) {
          filteredFiles.sort((a, b) => {
            for (const sortConfig of view.sort) {
              const prop = sortConfig.property;
              let aValue, bValue;
              
              // Handle nested properties like 'file.name'
              if (prop.startsWith('file.')) {
                const subProp = prop.split('.')[1];
                aValue = a.file[subProp];
                bValue = b.file[subProp];
              } else {
                aValue = a.attributes[prop];
                bValue = b.attributes[prop];
              }
              
              // Handle comparison
              if (aValue < bValue) {
                return sortConfig.direction === 'DESC' ? 1 : -1;
              } else if (aValue > bValue) {
                return sortConfig.direction === 'DESC' ? -1 : 1;
              }
            }
            return 0;
          });
        }
        
        // Generate markdown table
        const table = generateMarkdownTable(filteredFiles, view.order);
        
        // Write to output file
        const outputFileName = baseFile.replace('.base', '.base.md');
        const outputFilePath = path.join(process.cwd(), outputFileName);
        
        // Read existing content to preserve title
        let existingContent = '';
        if (fs.existsSync(outputFilePath)) {
          const existingFile = fs.readFileSync(outputFilePath, 'utf8');
          const firstHeadingMatch = existingFile.match(/^#.*$/m);
          if (firstHeadingMatch) {
            existingContent = firstHeadingMatch[0] + '\n\n';
          }
        } else {
          // Default title based on base file name
          const title = path.basename(baseFile, '.base');
          existingContent = `# ${title}\n\n`;
        }
        
        fs.writeFileSync(outputFilePath, existingContent + table);
        console.log(`Generated ${outputFileName}`);
      }
    } catch (e) {
      console.error(`Error processing base file ${baseFile}:`, e);
    }
  }
}

main();