const fs = require('fs')
const fse = require('fs-extra')

// settings
const ignoreFiles = ['_navbar.md', '_sidbar.md']
const basePath = '/'
const basePathAssets = '/assets/'
const uriSuffix = '.html'
const anchorPrefix = '#'

function sanitizeFilename(file) {
    return file.toLocaleLowerCase().replace(/\s+/g, '-').replace('---','-')
}

function convert(content,file) {

    // convert wiki image links
    // ![[image.png]] -> <img src="./assets/image.png"/>
    const wikiImage = /!\[\[([^\]]*\.png|jpg|jpeg|svg|gif)\]\]/g
    content = content.replace(wikiImage, `<img src="${basePathAssets}$1"\/>`)

    // convert embeded content links
    // ![[Content]] -> [Content](Content.md ':include')
    const embededContent = /!\[\[([^\]]*)\]\]/g
    let matches = content.match(embededContent) || []
    for (i = 0; i < matches.length; i++) {
        let match = matches[i]
        let title = encodeURI(match.match(/\[\[([^\]|#]*)/)[1])
        content = content.replace(embededContent, `[$1](${title}.md ':include')`)
    }

    // convert wiki links
    // [[href#anchor|title] -> <a href="href?id=anchor">title</a>
    const link = /\[\[([^\]]*)\]\]/g
    matches = content.match(link) || []
    for (i = 0; i < matches.length; i++) {

        let match = matches[i]
        let href = match.match(/\[\[([^\]|#]*)/)[1]
        let title = match.match(/\[\[([^\]|#]*)/)[1]
        let anchor

        if (match.indexOf('#') > 0) {
            anchor = match.match(/#([^\||\]]*)/)[1]
            // sanitize anchor link
            anchor = anchor.toLowerCase().replace(/ /g, "-")
        }

        if (match.indexOf('|') > 0) {
            href = match.match(/\[\[([^\||#]*)/)[1]
            title = match.match(/\|(.*)\]\]/)[1]
        }

        // sanitize href
        href = sanitizeFilename(href ? href : file.replace('\.md', ''))

        content = content.replace(match, `<a href="${basePath}${href}${uriSuffix}${anchor ? (anchorPrefix + anchor) : ''}">${title}</a>`)
    }

    return content
}

// loop all markdown files of the current folder
fs.readdirSync(__dirname).filter(file => (file.slice(-3) === '.md') && (ignoreFiles.indexOf(file) != 0)).forEach((file) => {

    // get markdown content
    var content = fs.readFileSync(file, 'utf8')

    // set new file name
    newfile = sanitizeFilename(file)

    // convert content
    content = convert(content, file)

    // add footer
    content = content + [
        '\n\n',
        '<hr>',
        '\n\n',
        '[📝 Edit on GitHub](' + 'https://github.com/Mint-System/Knowledge/blob/master/' + file.replace(/\s+/g, '%20') + ')',
        '\n\n',
        '<footer>',
        'Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a>',
        '</footer>'
    ].join('')

    // Delete existing file
    fs.unlinkSync(file)

    // write content to new file
    fs.writeFileSync(newfile, content, 'utf8')
})

fse.moveSync( __dirname + '/assets', __dirname + '.vuepress/public')