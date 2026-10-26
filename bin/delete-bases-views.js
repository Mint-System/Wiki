const fs = require('fs')
const path = require('path')

const baseFiles = fs
  .readdirSync('./bases')
  .filter((file) => file.endsWith('.base'))

// Process each base file
baseFiles.forEach((baseFile) => {
  const baseName = path.basename(baseFile, '.base')
  const outputFileName = `${baseName}.md`
  fs.unlink(outputFileName, (err) => {
    if (err) {
      console.error(`Error deleting "${outputFileName}":`, err)
    } else {
      console.log(`Deleted "${outputFileName}"`)
    }
  })
})