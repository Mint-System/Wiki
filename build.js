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
const obsidianCancas = /!\[\[([^\]]+\.canvas.+)\]\]/g
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

function renderRect(node) {
    return `\t<rect x="${node['x']}" y="${node['y']}" width="${node['width']}" height="${node['height']}" rx="15" stroke="black" stroke-width="5" fill="none"/>\n`
}

function renderArrow(node) {
    return `\t<line x1="10" y1="10" x2="90" y2="90" stroke="black" marker-end="url(#arrow)" />\n`
}

function convertCanvasToSVG(content) {
    nodes = content['nodes']
    edges = content['edges']

    let svg = ""
    svg += '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n'
    svg += '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n'
    svg += '<svg viewBox="-1200 -1200 1200 1200" xmlns="http://www.w3.org/2000/svg">\n'

    for (const node of nodes) {
        svg += renderRect(node)
    }

    for (const edge of edges) {
        fromNode = nodes.filter(node => (node['id'] === edge['fromNode']))
        toNode = nodes.filter(node => (node['id'] === edge['toNode']))
        let fromX, fromY, toX, toY = 0
        
        // Calculate x and y position for from and to point
        if (edge['fromSide'] === 'right') {
            fromX = fromNode['x'] + fromNode['width']
            fromY = fromNode['y'] + fromNode['height'] / 2
        
        if (edge['fromSide'] === 'bottom') {
            fromX = fromNode['x'] + fromNode['with'] / 2 
            fromY = fromNode['y']
        }
        if (edge['fromSide'] === 'left') {
            fromX = fromNode['x']
            fromY = fromNode['y'] + fromNode['height'] / 2

        }
        if (edge['fromSide'] === 'top') {
            fromX = fromNode['x'] + fromNode['width'] / 2
            fromY = fromNode['y'] + fromNode['height']
        }
        svg += renderArrow(edge)
    }

    svg += '</svg>'

    return svg
}

function convert(content, file) {

    // Convert Obsidian cancas
    // ![[S3.canvas|S3]] -> <img src="./s3.svg"/>
    let matches = content.match(obsidianCancas) || []
    for (i = 0; i < matches.length; i++) {
        let match = matches[i]
        content = content.replace(match, `<img src="./s3.svg"/>`)
    }

    // Convert wiki image links
    // ![[image.png]] -> <img src="./image.png"/>
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

        // set anchor
        if (match.indexOf('#') > 0) {
            anchor = match.match(/#([^\||\]]*)/)[1]

            // combine title and href text
            title = `${title} > ${anchor}`

            // sanitize anchor link
            anchor = sanitizeName(anchor)
        }

        // set title and href
        if (match.indexOf('|') > 0) {
            href = match.match(/\[\[([^\||#]*)/)[1]
            title = match.match(/\|(.*)\]\]/)[1]
        }
        
        // sanitize href
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
        let fileName = file.replace('\.canvas', '')

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