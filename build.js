const fs = require('fs')
var path = require('path')

/* arguments:
all
index
canvas
convert
assets
sitemap
*/

// settings
const ignoreFiles = ['_navbar.md', '_sidbar.md']
const scheme = 'https://'
const hostname = 'wiki.mint-system.ch'
const basePath = '/'
const basePathAssets = './'
const uriSuffix = '.html'
const anchorPrefix = '#'
const assetsFolder = 'assets'
const gitUrl = 'https://github.com/Mint-System/Knowledge/blob/master/'
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

const groupBy = key => array =>
    array.reduce((objectsByKeyValue, obj) => {
        const value = obj[key];
        objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
        return objectsByKeyValue;
    }, {});

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

function renderNode(node) {
    const strockWidth = 4
    const fontWeight = 'bold'

    let textOffsetX = 15
    let textOffsetY = 30
    let fontColor = '#2c2d2c'
    let text = node['text']
    let fontSize = 18
    let fontFamily = 'Roboto, Oxygen, Ubuntu, Cantarell, sans-serif'
    
    // Process multiline text

    if (text && text.split('\n').length > 1) {
        let spans = ''
        for (const line of text.split('\n')) {
            spans += `<tspan x="${node['x'] + textOffsetX}" dy="${fontSize + 3}">${line}</tspan>`
        }
        text = spans
        textOffsetY = 10
    }

    // Link markdown file

    if (node['file'] && node['file'].endsWith('.md')) {
        title = node['file'].replace('.md', '')
        text = `<a href="/${title.toLowerCase()}.html">${title}</a>`
        fontColor = '#9a7fee'
        fontSize = 28
        textOffsetX = 30
        textOffsetY = 45
    }

    content = `<text x="${node['x'] + textOffsetX}" y="${node['y'] + textOffsetY}" font-family="${fontFamily}" font-size="${fontSize}" font-weight="${fontWeight}" fill="${fontColor}">${text}</text>`
    
    // If file is not markdown file render as image

    if (node['file'] && !node['file'].endsWith('.md')) {
        filePath = node['file']
        content = `<image href="${gitUrl + filePath}?raw=true" x="${node['x']}" y="${node['y']}" width="${node['width']}" height="${node['height']}" clip-path="inset(0% round 15px)" />`
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

    let textOffsetX = 15
    let textOffsetY = -15
    let fontColor = '#2c2d2c'
    let text = group['label']
    let fontSize = 24
    let fontFamily = 'Roboto, Oxygen, Ubuntu, Cantarell, sans-serif'

    return `
    <rect x="${group['x']}" y="${group['y']}" width="${group['width']}" height="${group['height']}" rx="30" stroke="${mapColor(group['color'])}" stroke-width="${strockWidth}" fill="none"/>
    <text x="${group['x'] + textOffsetX}" y="${group['y'] + textOffsetY}" font-family="${fontFamily}" font-size="${fontSize}" font-weight="${fontWeight}" fill="${fontColor}">${text}</text>
    `
}

function renderEdge(edge) {
    const strockWidth = 5
    const color = mapColor(edge['color'])
    
    return `
    <marker xmlns="http://www.w3.org/2000/svg" id="triangle-${color}" viewBox="0 0 10 10" refX="1" refY="5" fill="${color}" markerUnits="strokeWidth" markerWidth="3" markerHeight="3" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z"/>
    </marker>
    <line x1="${edge['fromX']}" y1="${edge['fromY']}" x2="${edge['toX']}" y2="${edge['toY']}" stroke="${color}" stroke-width="${strockWidth}" marker-end="url(#triangle-${color})" />
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

    // Render edges as lines

    for (const edge of edges) {
        const fromOffset = 3
        const toOffset = 15

        // Get start and target nodes

        fromNode = nodes.filter(node => (node['id'] === edge['fromNode']))[0]
        toNode = nodes.filter(node => (node['id'] === edge['toNode']))[0]
        let fromX = 0
        let fromY = 0
        let toX = 0
        let toY = 0
        
        // Calculate x and y position of arrow start

        if (edge['fromSide'] === 'right') {
            fromX = fromNode['x'] + fromNode['width'] + fromOffset
            fromY = fromNode['y'] + fromNode['height'] / 2
        }
        if (edge['fromSide'] === 'bottom') {
            fromX = fromNode['x'] + fromNode['width'] / 2 
            fromY = fromNode['y'] + fromNode['height'] + fromOffset
        }
        if (edge['fromSide'] === 'left') {
            fromX = fromNode['x'] - fromOffset
            fromY = fromNode['y'] + fromNode['height'] / 2
        }
        if (edge['fromSide'] === 'top') {
            fromX = fromNode['x'] + fromNode['width'] / 2
            fromY = fromNode['y'] - fromOffset
        }
        edge['fromX'] = fromX
        edge['fromY'] = fromY

        // Calculate x and y position of arrow target        

        if (edge['toSide'] === 'right') {
            toX = toNode['x'] + toNode['width'] + toOffset
            toY = toNode['y'] + toNode['height'] / 2
        }
        if (edge['toSide'] === 'bottom') {
            toX = toNode['x'] + toNode['width'] / 2 
            toY = toNode['y'] + toNode['height'] + toOffset
        }
        if (edge['toSide'] === 'left') {
            toX = toNode['x'] - toOffset
            toY = toNode['y'] + toNode['height'] / 2
        }
        if (edge['toSide'] === 'top') {
            toX = toNode['x'] + toNode['width'] / 2
            toY = toNode['y'] - toOffset
        }
        edge['toX'] = toX
        edge['toY'] = toY

        svg += renderEdge(edge)
    }

    // Render nodes as rect

    for (const node of nodes.filter(node => (['text', 'file'].includes(node['type'])))) {
        svg += renderNode(node)
    }

    // Render group as rect

    for (const group of nodes.filter(node => (node['type'] === 'group'))) {
        svg += renderGroup(group)
    }


    svg += '</svg>'

    return svg
}

function convert(content, file) {

    // Convert Obsidian canvas
    // [[S3.canvas|S3]] -> [](./s3.svg)
    let matches = content.match(obsidianCanvas) || []
    for (i = 0; i < matches.length; i++) {
        let match = matches[i]
        let title = sanitizeAssetname(match.match(/\|(.*)\]\]/)[1])
        let href = title
        // Set title and href
        if (match.indexOf('|') > 0) {
            href = sanitizeAssetname(match.match(/\|(.*)\]\]/)[1])
            title = match.match(/\|(.*)\]\]/)[1]
        }
        content = content.replace(match, `[${title}](${basePathAssets}${href}.svg)`)
    }

    // Convert wiki image links
    // ![[image.png]] -> ![](./image.png)"/>
    matches = content.match(wikiImage) || []
    for (i = 0; i < matches.length; i++) {
        let match = matches[i]
        let image = sanitizeAssetname(match.match(/!\[\[([^\]]*)/)[1])
        content = content.replace(match, `![](${basePathAssets}${image})`)
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
        content = content.replace(match, mdLink)
    }

    return content
}

// Build vars
var links = []
var files = []
var args = process.argv.slice(2);
var firstArg = args[0]

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

        fs.writeFileSync(fileName + '.svg', content)
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
        let newfile = sanitizeName(file)

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
            'Copyright © [Mint System GmbH](https://www.mint-system.ch)\n',
            '\n',
            '</footer>'
        ].join('')

        // Delete existing file
        fs.unlinkSync(file)

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
    groupedFiles = groupBy('firstLetter')(files)
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
    fs.writeFileSync('glossary.md', content.join(''), 'utf8')

    // log
    console.log('Building glossary finished.')
}

if (!firstArg || ['all', 'assets'].indexOf(firstArg) > 0) {
    
    // log
    console.log('Move assets ...')

    // Loop all asset files
    fs.readdirSync(path.join(__dirname, assetsFolder)).forEach((file) => {

        // set new file name
        newfile = sanitizeAssetname(file)

        // move asset file
        fs.renameSync(path.join(__dirname, assetsFolder, file), path.join(__dirname, newfile))
    })

    // log
    console.log('Moving assets finished.')
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