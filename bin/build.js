const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const { convertCanvasToSVG, sanitizeName, sanitizeAssetname } = require('./convert-canvas-to-svg.js')

/* arguments:
all
index
canvas
convert
attachments
*/

// settings
const rootDir = path.resolve(__dirname, '..')
const debug = process.env.DEBUG == 'true'
const ignoreFiles = ['_navbar.md', '_sidbar.md']
const basePath = '/'
const basePathAttachments = './'
const targetPath = './docs/'
const uriSuffix = '/'
const anchorPrefix = '#'
const attachmentsFolder = 'attachments'
const gitUrl = 'https://github.com/Mint-System/Wiki/blob/main/'
const obsidianUrl = 'obsidian://open?vault=Wiki&file='
const ignoreLinks = 'TOC'

// file name regex
const excalidraw = /!\[\[([^\]]+)\.excalidraw\]\]/g
const wikiImage = /!\[\[([^\]]+\..+)\]\]/g
const obsidianCanvas = /\[\[([^\]]+\.canvas.+)\]\]/g
const embededContent = /!\[\[([^\]]*)\]\]/g
const wikiLink = /\[\[([^\]]*)\]\]/g
const obsidianBases = /\[\[([^\]]+)\.base\]\]/g

function loopMdFiles() {
  return fs
    .readdirSync(rootDir)
    .filter(
      (file) => path.extname(file) === '.md' && ignoreFiles.indexOf(file) != 0
    )
}

// Convert Obsidian-style hard line breaks (a trailing backslash) into CommonMark
// hard line breaks (two trailing spaces). Fenced code blocks are left untouched,
// so a backslash inside code is not modified.
function convertHardLineBreaks(text) {
  let inFence = false
  return text
    .split('\n')
    .map((line) => {
      const trimmed = line.trimStart()
      if (trimmed.startsWith('```') || trimmed.startsWith('~~~')) {
        inFence = !inFence
        return line
      }
      if (!inFence && /\\[ \t]*$/.test(line)) {
        return line.replace(/\\[ \t]*$/, '  ')
      }
      return line
    })
    .join('\n')
}

const groupBy =
  (key, sort = false) =>
  (array) => {
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

function convert(content, file) {
  // Parse frontmatter
  const { data: frontmatter, content: contentWithoutFrontmatter } = matter(content)
  content = contentWithoutFrontmatter

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
    content = content.replace(
      match,
      `[${asset}](${basePathAttachments}${href}.svg)`
    )
  }

  // Convert Obsidian bases
  // [[Tools.bases]] -> [Tools](./tools.html)
  matches = content.match(obsidianBases) || []
  for (i = 0; i < matches.length; i++) {
    let match = matches[i]
    let href = sanitizeName(match.match(/\[\[([^\]]+)\.base/)[1])
    let title = match.match(/\[\[([^\]]+)\.base/)[1]
    
    content = content.replace(
      match,
      `[${title}](${basePath}${href}${uriSuffix})`
    )
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

    // The home page is at the site root
    let mdUrl = `${basePath}${href}${uriSuffix}${anchor ? anchorPrefix + anchor : ''}`
    if (href === 'readme') {
      mdUrl = basePath
    }

    let mdLink = `[${title}](${mdUrl})`

    if (!ignoreLinks.includes(title)) {
      content = content.replace(match, mdLink)
    }
  }

  return { content, frontmatter }
}

// Build vars
var links = []
var files = []
var args = process.argv.slice(2)
var firstArg = args[0]

if (!fs.existsSync(targetPath)) {
  fs.mkdirSync(targetPath)
}

if (!firstArg || ['all', 'index'].indexOf(firstArg) >= 0) {
  // log
  console.log('Build title index ...')

  // loop all markdown files
  loopMdFiles().forEach((file) => {
    // get markdown content
    var content = fs.readFileSync(path.join(rootDir, file), 'utf8')

    // get wiki links
    matches = content.match(wikiLink) || []

    // create backlink list
    for (i = 0; i < matches.length; i++) {
      let match = matches[i]
      links.push({
        source: file.replace('\.md', ''),
        target: match.match(/\[\[([^\]|#]*)/)[1],
      })
    }

    // create file link list
    files.push({
      source: file.replace('\.md', ''),
      target: file,
      firstLetter: file[0].toUpperCase(),
    })
  })

  // log
  console.log('Building title index finished.')
}

if (!firstArg || ['all', 'canvas'].indexOf(firstArg) >= 0) {
  // log
  console.log('Convert canvas files ...')

  // Loop all canvas files
  fs.readdirSync(rootDir)
    .filter((file) => path.extname(file) === '.canvas')
    .forEach((file) => {
      // Get file name
      let fileName = sanitizeAssetname(file.replace('\.canvas', ''))

      // Get content
      let content = fs.readFileSync(path.join(rootDir, file), 'utf8')

      content = convertCanvasToSVG(JSON.parse(content))

      fs.writeFileSync(targetPath + fileName + '.svg', content)
    })

  // log
  console.log('Converting canvas files finished.')
}

if (!firstArg || ['all', 'convert'].indexOf(firstArg) >= 0) {
  // log
  console.log('Convert files ...')

  // process all markdown files
  loopMdFiles().forEach((file) => {
    // get markdown content
    let content = fs.readFileSync(path.join(rootDir, file), 'utf8')

    // set new file name
    let newfile = targetPath + sanitizeName(file)

    // The home page (index.md) lives at the site root
    if (newfile.endsWith('readme.md')) {
      newfile = targetPath + 'index.md'
    }

    // Get file name
    let fileName = file.replace('\.md', '')

    // convert content
    const result = convert(content, file)
    content = result.content
    const frontmatter = result.frontmatter

    // get title from frontmatter or filename
    const title = frontmatter.title || fileName
    
    // build header from frontmatter
    let header = `# ${title}\n\n`
    
    // add website and repository info if available
    if (frontmatter.website) {
      header += `Website: <${frontmatter.website}>\n`
    }
    if (frontmatter.repository) {
      header += `Repository: <${frontmatter.repository}>\n`
    }
    
    if (frontmatter.website || frontmatter.repository) {
      header += '\n'
    }
    
    // remove any existing H1 heading that matches the title to avoid duplicates
    const escapedTitle = title.replace(/[.*+?^${}()|\[\]\\\-]/g, '\\$&');
    const h1Regex = new RegExp(`^#\\s+${escapedTitle}\\s*$`, 'm');
    content = content.replace(h1Regex, '');
    
    // add header to content
    content = header + content

    // get backlinks
    let backLinks = links.filter((link) => link.target === fileName)

    // remove duplicates
    backLinks = Array.from(
      new Set(backLinks.map((o) => JSON.stringify(o)))
    ).map((s) => JSON.parse(s))

    // Add a footer with backlinks and edit links (plain markdown so it renders correctly)
    let footer = ['\n', '---', '\n'].join('')

    // add backlinks
    if (backLinks.length > 0) {
      footer =
        footer +
        [
          '**Backlinks**\n',
          '\n',
          backLinks
            .map((link) => {
              let target =
                link.source != 'README'
                  ? `${basePath}${sanitizeName(link.source)}${uriSuffix}`
                  : '/'
              return `🔗 [${link.source}](${target})  \n`
            })
            .join(''),
          '\n',
        ].join('')
    }

    // Add edit links as inline HTML anchors so they render as links but are
    // not treated as markdown links (the page-URLs would otherwise be reported
    // as "page does not exist" by the link validator). The Obsidian URI omits
    // the .md extension, which resolves in Obsidian and avoids a false warning.
    footer =
      footer +
      '<a href="' +
      gitUrl +
      file.replace(/\s+/g, '%20') +
      '">📝 Edit on GitHub</a> · <a href="' +
      obsidianUrl +
      file.replace(/\.md$/, '').replace(/\s+/g, '%20') +
      '">🔷 Open in Obsidian</a>\n'

    content = content + footer

    // Write content to new file
    content = convertHardLineBreaks(content)
    fs.writeFileSync(newfile, content, 'utf8')
  })

  // log
  console.log('Converting files finished.')
}

if (!firstArg || ['all', 'index'].indexOf(firstArg) >= 0) {
  // log
  console.log('Build glossary ...')

  // Group files by first letter
  groupedFiles = groupBy('firstLetter', true)(files)
  content = ['# Glossary', '\n']

  Object.keys(groupedFiles).forEach(function (key) {
    content.push(`## ${key}`)
    content.push('\n', '\n')
    groupedFiles[key].forEach((link) => {
      // The home page is served at the site root
      const target =
        link.target.toLowerCase() === 'readme.md'
          ? '/'
          : sanitizeName(link.target)
      content.push(`[${link.source}](${target})  `)
      content.push('\n')
    })
    content.push('\n')
  })

  // write content to index file
  fs.writeFileSync(targetPath + 'glossary.md', content.join(''), 'utf8')

  // log
  console.log('Building glossary finished.')
}

if (!firstArg || ['all', 'attachments'].indexOf(firstArg) >= 0) {
  // log
  console.log('Move attachments ...')

  // Loop all asset files
  fs.readdirSync(path.join(rootDir, attachmentsFolder)).forEach((file) => {
    // Set new file name
    newfile = targetPath + sanitizeAssetname(file)

    // Copy asset file
    fs.copyFileSync(
      path.join(rootDir, attachmentsFolder, file),
      path.join(rootDir, newfile)
    )
  })

  // log
  console.log('Moving attachments finished.')
}


