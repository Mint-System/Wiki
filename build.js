const fs = require('fs')
const convert = require('./convert')

const paths = []
const ignoreFiles = ['_navbar.md', '_sidbar.md']

// loop all markdown files of the current folder
fs.readdirSync(__dirname).filter(file => (file.slice(-3) === '.md') && (ignoreFiles.indexOf(file) != 0)).forEach((file) => {

    // get markdown content
    var content = fs.readFileSync(file, 'utf8')

    // set new file name
    newfile = convert.sanitizeFilename(file)

    // push filename
    paths.push('/' + newfile.replace('.md', ''))

    // add footer
    content = content + [
        '\n\n',
        '[📝 Edit Document](' + 'https://github.com/Mint-System/Knowledge/blob/master/' + file.replace(' ','%20') + ')\n',
        '<hr>',
        '<footer>',
        'Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a>',
        '</footer>'
    ].join('')

    // write content back to file
    fs.writeFileSync(newfile, content, 'utf8')
})

// write paths.json for search index
const content = `const paths = ${JSON.stringify(paths)}`
fs.writeFileSync('paths.js', content, 'utf8')