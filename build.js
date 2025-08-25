const fs = require('fs')
var path = require('path')

/* arguments:
all
vuepress
index
canvas
convert
attachments
sitemap
*/

// settings
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const fm = require('front-matter');

// === Configuration ===
const ignoreFiles = [
  'README.md',
  'CONTRIBUTING.md',
  // Add more filenames here to exclude from processing
];

// === Read .md files (excluding ignored ones) ===
function loopMdFiles() {
  return fs.readdirSync(__dirname)
    .filter(file => path.extname(file) === '.md')
    .filter(file => ignoreFiles.indexOf(file) === -1); // Fixed: was incorrectly using != 0
}

// === Load and parse all markdown files with frontmatter ===
function readMarkdownFiles() {
  const filesData = [];
  const mdFiles = loopMdFiles();

  mdFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const parsed = fm(content);
    const fileNameWithoutExt = path.parse(file).name;

    const data = { ...parsed.attributes };
    data.file = { name: fileNameWithoutExt }; // Add file.name for filtering
    filesData.push(data);
  });

  console.log(`✅ Loaded ${filesData.length} .md files (ignored: ${ignoreFiles.join(', ')})`);
  return filesData;
}

// === Evaluate condition (e.g., file.name.startsWith("Prozess")) ===
function evaluateCondition(obj, condition) {
  for (const [key, value] of Object.entries(condition)) {
    if (key === 'file.name.startsWith' && typeof value === 'string') {
      return obj.file.name.startsWith(value);
    }
  }
  return false;
}

// === Recursively evaluate filter (supports 'or', 'and') ===
function evaluateFilter(obj, filterNode) {
  if (!filterNode || typeof filterNode !== 'object') return false;

  if ('or' in filterNode) {
    return Array.isArray(filterNode.or) && filterNode.or.some(cond => evaluateFilter(obj, cond));
  }

  if ('and' in filterNode) {
    return Array.isArray(filterNode.and) && filterNode.and.every(cond => evaluateFilter(obj, cond));
  }

  return evaluateCondition(obj, filterNode);
}

// === Apply filters to data ===
function applyFilters(dataList, filters) {
  if (!filters || Object.keys(filters).length === 0) return dataList;
  return dataList.filter(item => evaluateFilter(item, filters));
}

// === Sort data based on sort config ===
function sortData(data, sortConfig, fallbackOrder) {
  const sortFields = sortConfig.length ? sortConfig.map(s => s.property) : fallbackOrder;
  const reverse = sortConfig.some(s => s.direction === 'DESC');

  return data.sort((a, b) => {
    const keyA = sortFields.map(f => {
      if (f === 'file.name') return a.file.name;
      let val = a[f]; return Array.isArray(val) ? val.join(', ') : (val ?? '');
    });
    const keyB = sortFields.map(f => {
      if (f === 'file.name') return b.file.name;
      let val = b[f]; return Array.isArray(val) ? val.join(', ') : (val ?? '');
    });

    for (let i = 0; i < keyA.length; i++) {
      if (keyA[i] < keyB[i]) return reverse ? 1 : -1;
      if (keyA[i] > keyB[i]) return reverse ? -1 : 1;
    }
    return 0;
  });
}

// === Generate Markdown table ===
function generateMarkdownTable(data, columns) {
  if (data.length === 0) {
    return '| No results |\n|------------|\n| - |\n';
  }

  const header = '| ' + columns.map(col => {
    if (col === 'file.name') return 'File Name';
    return col.charAt(0).toUpperCase() + col.slice(1);
  }).join(' | ') + ' |';

  const separator = '|' + columns.map(() => ' --- ').join('|') + '|';

  const rows = data.map(item => {
    const values = columns.map(col => {
      if (col === 'file.name') return item.file.name;
      let value = item[col];
      return Array.isArray(value) ? value.join(', ') : (value ?? '');
    });
    return '| ' + values.join(' | ') + ' |';
  });

  return [header, separator, ...rows].join('\n');
}

// === Process all *.base files in /bases ===
function processBaseFiles(allData) {
  const baseDir = path.join(__dirname, 'bases');

  if (!fs.existsSync(baseDir)) {
    console.error(`❌ Directory '${baseDir}' not found. Please create it and add .base files.`);
    return;
  }

  const baseFiles = fs.readdirSync(baseDir)
    .filter(file => path.extname(file) === '.base');

  if (baseFiles.length === 0) {
    console.log(`🟡 No .base files found in ${baseDir}`);
    return;
  }

  baseFiles.forEach(baseFileName => {
    const basePath = path.join(baseDir, baseFileName);
    const content = fs.readFileSync(basePath, 'utf8');

    // Extract frontmatter
    const frontmatterMatch = content.match(/^---[\r\n]([\s\S]*?)[\r\n]---/);
    if (!frontmatterMatch) {
      console.log(`⚠️ No frontmatter in ${baseFileName}, skipping.`);
      return;
    }

    let viewConfig;
    try {
      viewConfig = yaml.load(frontmatterMatch[1]);
    } catch (e) {
      console.error(`❌ YAML error in ${baseFileName}:`, e.message);
      return;
    }

    const views = Array.isArray(viewConfig.views) ? viewConfig.views : [];
    const baseName = path.parse(baseFileName).name;
    const outputFileName = `${baseName}.base.md`; // e.g., Prozesse.base.md

    views.forEach((view, i) => {
      const name = view.name || 'View';
      const filters = view.filters || {};
      const orderFields = view.order || [];
      const sortConfig = Array.isArray(view.sort) ? view.sort : [];

      let filteredData = applyFilters(allData, filters);
      filteredData = sortData(filteredData, sortConfig, orderFields);

      const tableMd = generateMarkdownTable(filteredData, orderFields);

      fs.writeFileSync(outputFileName, `# ${name}\n\n${tableMd}\n`, 'utf8');
      console.log(`✅ Generated: ${outputFileName}`);
    });
  });
}

// === Main ===
function main() {
  const allData = readMarkdownFiles();
  process

const basePathAttachments = './'
const targetPath = './src/'
const uriSuffix = '.html'
const anchorPrefix = '#'
const attachmentsFolder = 'attachments'
const gitUrl = 'https://github.com/Mint-System/Knowledge/blob/master/'
const ignoreLinks = 'TOC'

// file name regex
const excalidraw = /!\[\[([^\]]+)\.excalidraw\]\]/g
const wikiImage = /!\[\[([^\]]+\..+)\]\]/g
const obsidianCanvas = /\[\[([^\]]+\.canvas.+)\]\]/g
const embededContent = /!\[\[([^\]]*)\]\]/g
const wikiLink = /\[\[([^\]]*)\]\]/g

function sanitizeName(file) {
    return file.toLocaleLowerCase()
        .replace(/\s+/g, '-')
        .replace('---', '-')
        .replace('--', '-')
        .replace("'", '-')
}

function sanitizeAssetname(file) {
    return file.toLocaleLowerCase()
        .replace(/\s+/g, '-')
        .replace('---', '-')
        .replace('--', '-')
        .replace("'", '-')
        .replace(/ö/g, 'o')
        .replace(/ü/g, 'u')
        .replace(/ä/g, 'a')
}

function loopMdFiles() {
    return fs.readdirSync(__dirname).filter(file => (path.extname(file) === '.md') && (ignoreFiles.indexOf(file) != 0))
}

const groupBy = (key, sort = false) => array => {
    const grouped = array.reduce((objectsByKeyValue, obj) => {
        const value = obj[key]
        objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj)
        return objectsByKeyValue
    }, {})

    if (sort) {
        return Object.keys(grouped)
            .sort((a, b) => a.localeCompare(b))
            .reduce((acc, sortedKey) => {
                acc[sortedKey] = grouped[sortedKey]
                return acc
            }, {})
    }

    return grouped
}

function mapColor(color) {
    colors = {
        0: '#7e7e7e',
        1: '#aa363d',
        2: '#a56c3a',
        3: '#aba960',
        4: '#199e5c',
        5: '#249391',
        6: '#795fac'
    }
    let appliedColor = colors[0]

    if (color && (0 < color.length < 2)) {
        appliedColor = colors[color]
    }
    if (color && (1 < color.length)) {
        appliedColor = color
    }
    return appliedColor
}

function renderEdge(edge) {
    const id = edge['id']
    const strockWidth = 4
    const color = mapColor(edge['color'])
    const fromSide = edge['fromSide']
    const toSide = edge['toSide']
    const fontFamily = 'DejaVu Sans Mono, Consolas, SF Mono'
    const fontSize = 15
    const fontColor = '#2c2d2c'
    const fillColor = '#fff'

    let marker = `marker-end="url(#arrow-end-${id})"`
    let fromOffset = 1
    let toOffset = 11
    let fromX = edge['fromX']
    let fromY = edge['fromY']
    let toX = edge['toX']
    let toY = edge['toY']
    let label = ''

    // Set arrow marker

    if(edge['fromEnd'] === 'arrow') {
        marker = `marker-end="url(#arrow-end-${id})" marker-start="url(#arrow-start-${id})"`
        fromOffset = 11
    }
    if(edge['toEnd'] === 'none') {
        marker = ''
        toOffset = 1
    }

    // Calculate position with offset

    if (fromSide === 'right') {
        fromX += fromOffset
    }
    if (fromSide === 'bottom') {
        fromY += fromOffset
    }
    if (fromSide === 'left') {
        fromX -= fromOffset
    }
    if (fromSide === 'top') {
        fromY -= fromOffset
    }
    if (toSide === 'right') {
        toX += toOffset
    }
    if (toSide === 'bottom') {
        toY += toOffset
    }
    if (toSide === 'left') {
        toX -= toOffset
    }
    if (toSide === 'top') {
        toY -= toOffset
    }

    // Add label if is set

    if(edge['label']) {

        // Calculate position of label
        let labelText = edge['label']
        let labelLength = labelText.length

        // Update label length for mutliline text.
        if (labelText && labelText.split('\n').length > 1) {
            labelLength = 0
            for (const line of labelText.split('\n')) {
                if (line.length > labelLength) {
                    labelLength = line.length
                }
            }
        }

        // Calculate label position
        let labelWidth = labelLength*4
        let labelX = fromX - labelWidth
        let labelY = fromY

        if (toX < fromX) {
            labelX -= Math.abs(toX - fromX)/2
        }
        if (toX > fromX) {
            labelX += Math.abs(fromX - toX)/2
        }
        if (toY < fromY) {
            labelY -= Math.abs(fromY - toY)/2
        }
        if (toY > fromY) {
            labelY += Math.abs(fromY - toY)/2
        }

        if (debug) {
            console.log(`${edge['label']}: X:${labelX}/Y:${labelY} from X:${fromX}/Y:${fromY} to X:${toX}/Y:${toY}`)
        }

        if (debug) {
            labelText += ` (${labelX}/${labelY})`
        }

        // Calculate size of background
        let textHeight = 20
        let textWidth = labelWidth*2.4
        if (labelText && labelText.split('\n').length > 1) {
            textHeight = labelText.split('\n').length*15

            let spans = ''
            let index = 0
            let spanY = labelY - textHeight/2
            for (const line of labelText.split('\n')) {
                spans += `<tspan x="${labelX}" y="${spanY}">${line}</tspan>`
                spanY += 15
            }
            labelText = spans
        }

        // Adjust position of background
        rectX = labelX - 4
        rectY = labelY - textHeight + 4

        label = `
        <rect x="${rectX}" y="${rectY}" width="${textWidth}" height="${textHeight}" rx="3" fill="${fillColor}" />
        <text x="${labelX}" y="${labelY}" font-family="${fontFamily}" fill="${fontColor}" font-size="${fontSize}">${labelText}</text>
        `
    }

    return `
    <marker xmlns="http://www.w3.org/2000/svg" id="arrow-end-${id}" viewBox="0 0 10 10" refX="1" refY="5" fill="${color}" markerUnits="strokeWidth" markerWidth="4" markerHeight="4" orient="auto">
        <path d="M 0 0 L 7 5 L 0 10 z"/>
    </marker>
    <marker xmlns="http://www.w3.org/2000/svg" id="arrow-start-${id}" viewBox="-10 -10 10 10" refX="-1" refY="-5" fill="${color}" markerUnits="strokeWidth" markerWidth="4" markerHeight="4" orient="auto">
        <path d="M 0 0 L -7 -5 L -0 -10 z"/>
    </marker>
    <line x1="${fromX}" y1="${fromY}" x2="${toX}" y2="${toY}" stroke="${color}" fill="white" stroke-width="${strockWidth}" ${marker} />
    ${label}
    `
}

function formatText(text) {
    if (typeof text !== 'string') {
        return { formattedText: null, plainText: null }
    }

    // Format bold
    formattedText = text.replace(/\*\*(.*?)\*\*/g, '<bold>$1</bold>')

    // Cleanup
    plainText = text.replace('**', '')

    return { formattedText, plainText }
}

function renderNode(node) {
    const strockWidth = 4
    const fontWeight = 'normal'
    const fontFamily = 'DejaVu Sans Mono, Consolas, SF Mono'

    let textOffsetX = 15
    let textOffsetY = 7
    let fontColor = '#2c2d2c'
    let fontSize = 15
    let content = ''

    // Format text
    let { formattedText, plainText } = formatText(node['text'])

    // Render default text

    if (plainText) {

        // Compare text length to node length
        if ((plainText.length / node['width']) >= 0.09 && plainText.split('\n').length == 1) {
            textOffsetY = 0
        }

        content = `
        <style>
            p {
                font-family: ${fontFamily};
                font-size: ${fontSize}px;
                font-weight: ${fontWeight};
                color: ${fontColor};
            }
            p bold {
                font-weight: bold;
            }
            p em {
                font-style: italic;
            }
        </style>
        <foreignObject x="${node['x'] + textOffsetX}" y="${node['y'] + textOffsetY}" width="${node['width'] - textOffsetX*2}" height="${node['height'] - textOffsetY*2}">
        <p xmlns="http://www.w3.org/1999/xhtml" class="${node['id']}">${formattedText}</p>
        </foreignObject>
        `
    }

    // Render multiline text

    if (plainText && plainText.split('\n').length > 1) {
        let spans = ''
        for (const line of formattedText.split('\n')) {
            spans += `<tspan x="${node['x'] + textOffsetX}" dy="${fontSize + 3}">${line}</tspan>`
        }
        textOffsetY = 10
        content = `<text x="${node['x'] + textOffsetX}" y="${node['y'] + textOffsetY}" font-family="${fontFamily}" fill="${fontColor}">${spans}</text>`
    }

    // Render linked markdown file

    if (node['file'] && node['file'].endsWith('.md')) {
        title = node['file'].replace('.md', '')
        text = `<a href="/${sanitizeName(title)}.html">${title}</a>`
        fontColor = '#9a7fee'
        textOffsetY = 10
        content = `<text x="${node['x'] + textOffsetX}" y="${node['y'] + textOffsetY}" font-family="${fontFamily}" font-size="${fontSize}" font-weight="${fontWeight}" fill="${fontColor}">${text}</text>`
    }

    // Render image

    if (node['file'] && !node['file'].endsWith('.md')) {
        filePath = node['file']

        const base64_content = fs.readFileSync(filePath, "base64")
        extension = path.extname(filePath).replace('.', '')

        content = `<image href="${`data:image/{extension};base64,${base64_content}`}" x="${node['x']}" y="${node['y']}" width="${node['width']}" height="${node['height']}" clip-path="inset(0% round 15px)" />`
        fontColor = '#9a7fee'
    }

    return `
    <rect x="${node['x']}" y="${node['y']}" width="${node['width']}" height="${node['height']}" rx="15" stroke="${mapColor(node['color'])}" stroke-width="${strockWidth}" fill="none"/>
    ${content}
    `
}

function renderGroup(group) {
    const strockWidth = 4
    const fontWeight = 'bold'
    const fontFamily = 'DejaVu Sans Mono, Consolas, SF Mono'

    let textOffsetX = 15
    let textOffsetY = -15
    let fontColor = '#2c2d2c'
    let fillColor = '#fbfbfb'
    let text = group['label']
    let fontSize = 24

    return `
    <rect x="${group['x']}" y="${group['y']}" width="${group['width']}" height="${group['height']}" rx="30" stroke="${mapColor(group['color'])}" stroke-width="${strockWidth}" fill="${fillColor}"/>
    <text x="${group['x'] + textOffsetX}" y="${group['y'] + textOffsetY}" font-family="${fontFamily}" font-size="${fontSize}" font-weight="${fontWeight}" fill="${fontColor}">${text}</text>
    `
}

function convertCanvasToSVG(content) {

    nodes = content['nodes']
    edges = content['edges']

    let svg = ""
    svg += '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n'
    svg += '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n'

    // Calculate view box position

    let minX = 0
    let minY = 0

    for (const node of nodes) {
        nodeX = node['x']
        nodeY = node['y']
        nodeWith = node['width']
        nodeHeight = node['height']

        if (nodeX < minX) {
            minX = nodeX
        }
        if (nodeY < minY) {
            minY = nodeY
        }
    }

    // Caclulate view box size

    let width = 0
    let height = 0

    for (const node of nodes) {
        nodeX = node['x']
        nodeY = node['y']
        nodeWith = node['width']
        nodeHeight = node['height']

        nodeMaxX = Math.abs(nodeX - minX) + nodeWith
        if (width < nodeMaxX) {
            width = nodeMaxX
        }
        nodeMaxY = Math.abs(nodeY - minY) + nodeHeight
        if (height < nodeMaxY) {
            height = nodeMaxY
        }
    }

    // Add view box

    const spacing = 50

    svg += `<svg viewBox="${minX-spacing} ${minY-spacing} ${width+spacing*2} ${height+spacing*2}" xmlns="http://www.w3.org/2000/svg">\n`

    // Render group as rect

    for (const group of nodes.filter(node => (node['type'] === 'group'))) {
        svg += renderGroup(group)
    }

    // Render edges as lines

    for (const edge of edges) {
        const fromSide = edge['fromSide']
        const toSide = edge['toSide']
        let fromX = 0
        let fromY = 0
        let toX = 0
        let toY = 0

        // Get start and target nodes

        fromNode = nodes.filter(node => (node['id'] === edge['fromNode']))[0]
        toNode = nodes.filter(node => (node['id'] === edge['toNode']))[0]

        // Calculate x and y position of arrow start

        if (fromSide === 'right') {
            fromX = fromNode['x'] + fromNode['width']
            fromY = fromNode['y'] + fromNode['height'] / 2
        }
        if (fromSide === 'bottom') {
            fromX = fromNode['x'] + fromNode['width'] / 2
            fromY = fromNode['y'] + fromNode['height']
        }
        if (fromSide === 'left') {
            fromX = fromNode['x']
            fromY = fromNode['y'] + fromNode['height'] / 2
        }
        if (fromSide === 'top') {
            fromX = fromNode['x'] + fromNode['width'] / 2
            fromY = fromNode['y']
        }
        edge['fromX'] = fromX
        edge['fromY'] = fromY

        // Calculate x and y position of arrow target

        if (toSide === 'right') {
            toX = toNode['x'] + toNode['width']
            toY = toNode['y'] + toNode['height'] / 2
        }
        if (toSide === 'bottom') {
            toX = toNode['x'] + toNode['width'] / 2
            toY = toNode['y'] + toNode['height']
        }
        if (toSide === 'left') {
            toX = toNode['x']
            toY = toNode['y'] + toNode['height'] / 2
        }
        if (toSide === 'top') {
            toX = toNode['x'] + toNode['width'] / 2
            toY = toNode['y']
        }
        edge['toX'] = toX
        edge['toY'] = toY

        svg += renderEdge(edge)
    }

    // Render nodes as rect

    for (const node of nodes.filter(node => (['text', 'file'].includes(node['type'])))) {
        svg += renderNode(node)
    }

    svg += '</svg>'

    return svg
}

function convert(content, file) {

    // Convert Excalidraw links
    // ![[Git Base Repo UI.excalidraw]] -> ![](./Git Base Repo UI.svg)"/>
    let matches = content.match(excalidraw) || []
    for (i = 0; i < matches.length; i++) {
        let match = matches[i]
        let asset = sanitizeAssetname(match.match(/!\[\[([^\]]*)/)[1])
        content = content.replace(match, `![](${basePathAttachments}${asset}.svg)`)
    }

    // Convert Obsidian canvas
    // [[S3.canvas|S3]] -> [](./s3.svg)
    matches = content.match(obsidianCanvas) || []
    for (i = 0; i < matches.length; i++) {
        let match = matches[i]
        let asset = sanitizeAssetname(match.match(/\|(.*)\]\]/)[1])
        let href = asset
        // Set title and href
        if (match.indexOf('|') > 0) {
            href = sanitizeAssetname(match.match(/\|(.*)\]\]/)[1])
            asset = match.match(/\|(.*)\]\]/)[1]
        }
        content = content.replace(match, `[${asset}](${basePathAttachments}${href}.svg)`)
    }

    // Convert wiki image links
    // ![[image.png]] -> ![](./image.png)"/>
    matches = content.match(wikiImage) || []
    for (i = 0; i < matches.length; i++) {
        let match = matches[i]
        let asset = sanitizeAssetname(match.match(/!\[\[([^\]]*)/)[1])
        content = content.replace(match, `![](${basePathAttachments}${asset})`)
    }

    // Convert embeded content links
    // ![[Content]] -> !!!include(content.md)!!!
    matches = content.match(embededContent) || []
    for (i = 0; i < matches.length; i++) {
        let match = matches[i]
        let title = sanitizeName(match.match(/\[\[([^\]|#]*)/)[1])
        content = content.replace(embededContent, `!!!include(${title}.md)!!!`)
    }

    // Convert wiki links
    // [[href#anchor|title] -> [title > anchor](href#anchor)
    matches = content.match(wikiLink) || []
    for (i = 0; i < matches.length; i++) {
        let match = matches[i]

        let href = match.match(/\[\[([^\]|#]*)/)[1]
        let title = match.match(/\[\[([^\]|#]*)/)[1]
        let anchor = null

        // Set anchor
        if (match.indexOf('#') > 0) {
            anchor = match.match(/#([^\||\]]*)/)[1]

            // Combine title and href text
            title = `${title} > ${anchor}`

            // Sanitize anchor link
            anchor = sanitizeName(anchor)
        }

        // Set title and href
        if (match.indexOf('|') > 0) {
            href = match.match(/\[\[([^\||#]*)/)[1]
            title = match.match(/\|(.*)\]\]/)[1]
        }

        // Sanitize href
        href = sanitizeName(href ? href : file.replace('\.md', ''))

        let mdLink = `[${title}](${basePath}${href}${uriSuffix}${anchor ? (anchorPrefix + anchor) : ''})`

        if (! ignoreLinks.includes(title)) {
            content = content.replace(match, mdLink)
        }
    }

    return content
}

// Build vars
var links = []
var files = []
var args = process.argv.slice(2)
var firstArg = args[0]

if (!firstArg || ['all', 'vuepress'].indexOf(firstArg) >= 0) {

    // log
    console.log('Copy vuepress files ...')

    if (!fs.existsSync(targetPath)){
        fs.mkdirSync(targetPath)
    }
    fs.cpSync('.vuepress', './src/.vuepress', {recursive: true})


    // log
    console.log('Copying vuepress files finished.')
}

if (!firstArg || ['all', 'index'].indexOf(firstArg) >= 0) {

    // log
    console.log('Build title index ...')

    // loop all markdown files
    loopMdFiles().forEach((file) => {

        // get markdown content
        var content = fs.readFileSync(file, 'utf8')

        // get wiki links
        matches = content.match(wikiLink) || []

        // create backlink list
        for (i = 0; i < matches.length; i++) {
            let match = matches[i]
            links.push({ source: file.replace('\.md', ''), target: match.match(/\[\[([^\]|#]*)/)[1] })
        }

        // create file link list
        files.push({ source: file.replace('\.md', ''), target: file, firstLetter: file[0].toUpperCase() })
    })

    // log
    console.log('Building title index finished.')
}


if (!firstArg || ['all', 'canvas'].indexOf(firstArg) > 0) {

    // log
    console.log('Convert canvas files ...')

    // Loop all cavas files
    fs.readdirSync(__dirname).filter(file => (path.extname(file) === '.canvas')).forEach((file) => {

        // Get file name
        let fileName = sanitizeAssetname(file.replace('\.canvas', ''))

        // Get content
        let content = fs.readFileSync(file, 'utf8')

        content = convertCanvasToSVG(JSON.parse(content))

        fs.writeFileSync(targetPath + fileName + '.svg', content)
    })

    // log
    console.log('Converting canvas files finished.')
}

if (!firstArg || ['all', 'convert'].indexOf(firstArg) > 0) {

    // log
    console.log('Convert files ...')

    // process all markdown files
    loopMdFiles().forEach((file) => {

        // get markdown content
        let content = fs.readFileSync(file, 'utf8')

        // set new file name
        let newfile = targetPath + sanitizeName(file)

        // Get file name
        let fileName = file.replace('\.md', '')

        // convert content
        content = convert(content, file)

        // get backlinks
        let backLinks = links.filter(link => link.target === fileName)

        // remove duplicates
        backLinks = Array.from(new Set(backLinks.map(o => JSON.stringify(o)))).map(s => JSON.parse(s))

        content = content + [
            '\n',
            '\n',
            '<footer class="page-edit">\n',
            '\n',
        ].join('')

        // add banklinks
        if (backLinks.length > 0) {
            content = content + [
                'Backlinks:\n',
                '\n',
                backLinks.map((link) => {
                    let target = link.source != 'README' ? `${basePath}${sanitizeName(link.source)}${uriSuffix}` : '/'
                    return `🔗 [${link.source}](${target})  \n`
                }).join(''),
                '\n',
            ].join('')
        }

        // add footer
        content = content + [
            '[📝 Edit on GitHub](' + gitUrl + file.replace(/\s+/g, '%20') + ')\n',
            '\n',
            'This page is maintained by [Mint System GmbH](https://www.mint-system.ch)\n',
            '\n',
            '</footer>'
        ].join('')

        // write content to new file
        fs.writeFileSync(newfile, content, 'utf8')
    })

    // log
    console.log('Converting files finished.')
}

if (!firstArg || ['all', 'index'].indexOf(firstArg) > 0) {

    // log
    console.log('Build glossary ...')

    // Group files by first letter
    groupedFiles = groupBy('firstLetter', true)(files)
    content = [
        '# Glossary',
        '\n'
    ]

    Object.keys(groupedFiles).forEach(function(key) {
        content.push(`## ${key}`)
        content.push('\n','\n')
        groupedFiles[key].forEach((link) => {
            content.push(`[${link.source}](${sanitizeName(link.target)})  `)
            content.push('\n')
        })
        content.push('\n')
    })

    // write content to index file
    fs.writeFileSync(targetPath + 'glossary.md', content.join(''), 'utf8')

    // log
    console.log('Building glossary finished.')
}

if (!firstArg || ['all', 'attachments'].indexOf(firstArg) > 0) {

    // log
    console.log('Move attachments ...')

    // Loop all asset files
    fs.readdirSync(path.join(__dirname, attachmentsFolder)).forEach((file) => {

        // Set new file name
        newfile = targetPath + sanitizeAssetname(file)

        // Copy asset file
        fs.copyFileSync(path.join(__dirname, attachmentsFolder,file), path.join(__dirname, newfile))
    })

    // log
    console.log('Moving attachments finished.')
}

if (!firstArg || ['all', 'sitemap'].indexOf(firstArg) > 0) {

    // log
    console.log('Build sitemap ...')

    content = []
    loopMdFiles().forEach((file) => {
        href = sanitizeName(file.replace('\.md', ''))
        content.push(`${scheme}${hostname}${basePath}${href}${uriSuffix}\n`)
    })

    // write content to index file
    fs.writeFileSync('.vuepress/public/sitemap.txt', content.join(''), 'utf8')

    // log
    console.log('Building sitemap finished.')
}
