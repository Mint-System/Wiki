const path = require('path');
const fs = require('fs');

const paths = []

fs.readdirSync(__dirname).filter(file => (file.slice(-3) === '.md')).forEach((file) => {
    paths.push('/' + encodeURI(file.replace('.md','')))
})

const content = `const paths = ${JSON.stringify(paths)}`

fs.writeFileSync('paths.js', content, 'utf8')