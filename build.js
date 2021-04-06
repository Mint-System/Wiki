const fs = require('fs')
var path = require('path')

/* arguments:
all
index
convert
assets
*/

// settings
const ignoreFiles = ['_navbar.md', '_sidbar.md']
const basePath = '/'
const basePathAssets = './'
const uriSuffix = '.html'
const anchorPrefix = '#'
const assetsFolder = 'assets'
const gitUrl = 'https://github.com/Mint-System/Knowledge/blob/master/'
const wikiImage = /!\[\[([^\]]+\..+)\]\]/g
const embededContent = /!\[\[([^\]]*)\]\]/g
const wikiLink = /\[\[([^\]]*)\]\]/g

function sanitizeName(file) {
    return file.toLocaleLowerCase()
        .replace(/\s+/g, '-')
        .replace('---', '-')
}

function sanitizeAssetname(file) {
    return file.toLocaleLowerCase()
        .replace(/\s+/g, '-')
        .replace('---', '-')
        .replace(/ö/g, 'o')
        .replace(/ü/g, 'u')
        .replace(/ä/g, 'a')
}

const groupBy = key => array =>
    array.reduce((objectsByKeyValue, obj) => {
        const value = obj[key];
        objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
        return objectsByKeyValue;
    }, {});

function convert(content, file) {

    // convert wiki image links
    // ![[image.png]] -> <img src="./assets/image.png"/>
    let matches = content.match(wikiImage) || []
    for (i = 0; i < matches.length; i++) {
        let match = matches[i]
        let image = sanitizeAssetname(match.match(/!\[\[([^\]]*)/)[1])
        content = content.replace(match, `![](${basePathAssets}${image})`)
    }

    // convert embeded content links
    // ![[Content]] -> [Content](Content.md ':include')
    matches = content.match(embededContent) || []
    for (i = 0; i < matches.length; i++) {
        let match = matches[i]
        let title = encodeURI(match.match(/\[\[([^\]|#]*)/)[1])
        content = content.replace(embededContent, `[$1](${title}.md ':include')`)
    }

    // convert wiki links
    // [[href#anchor|title] -> [title](href#anchor)
    matches = content.match(wikiLink) || []
    for (i = 0; i < matches.length; i++) {
        let match = matches[i]

        let href = match.match(/\[\[([^\]|#]*)/)[1]
        let title = match.match(/\[\[([^\]|#]*)/)[1]
        let anchor = null

        // set anchor
        if (match.indexOf('#') > 0) {
            anchor = match.match(/#([^\||\]]*)/)[1]
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
    // loop all markdown files
    fs.readdirSync(__dirname).filter(file => (file.slice(-3) === '.md') && (ignoreFiles.indexOf(file) != 0)).forEach((file) => {

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
}

if (!firstArg || ['all', 'convert'].indexOf(firstArg) > 0) {
    // process all markdown files
    fs.readdirSync(__dirname).filter(file => (file.slice(-3) === '.md') && (ignoreFiles.indexOf(file) != 0)).forEach((file) => {

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
                    return `* [${link.source}](${target}) \n`
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
}

if (!firstArg || ['all', 'index'].indexOf(firstArg) > 0) {
    
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
}

if (!firstArg || ['all', 'assets'].indexOf(firstArg) > 0) {
    // Loop all asset files
    fs.readdirSync(path.join(__dirname, assetsFolder)).forEach((file) => {

        // set new file name
        newfile = sanitizeAssetname(file)

        // move asset file
        fs.renameSync(path.join(__dirname, assetsFolder, file), path.join(__dirname, newfile))
    })
}