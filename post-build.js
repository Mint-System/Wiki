const fse = require('fs-extra')

fse.moveSync( __dirname + '/assets', __dirname + '.vuepress/dist/assets')