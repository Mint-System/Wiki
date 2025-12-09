const fs = require('fs')
const path = require('path')

// settings
const debug = process.env.DEBUG == 'true'

function sanitizeName(file) {
  return file
    .toLocaleLowerCase()
    .replace(/\s+/g, '-')
    .replace('---', '-')
    .replace('--', '-')
    .replace("'", '-')
}

function sanitizeAssetname(file) {
  return file
    .toLocaleLowerCase()
    .replace(/\s+/g, '-')
    .replace('---', '-')
    .replace('--', '-')
    .replace("'", '-')
    .replace(/ö/g, 'o')
    .replace(/ü/g, 'u')
    .replace(/ä/g, 'a')
}

function mapColor(color) {
  colors = {
    0: '#7e7e7e',
    1: '#aa363d',
    2: '#a56c3a',
    3: '#aba960',
    4: '#199e5c',
    5: '#249391',
    6: '#795fac',
  }
  let appliedColor = colors[0]

  if (color && 0 < color.length < 2) {
    appliedColor = colors[color]
  }
  if (color && 1 < color.length) {
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
  const fontFamily = 'Consolas, Monaco, monospace';
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

  if (edge['fromEnd'] === 'arrow') {
    marker = `marker-end="url(#arrow-end-${id})" marker-start="url(#arrow-start-${id})"`
    fromOffset = 11
  }
  if (edge['toEnd'] === 'none') {
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

  if (edge['label']) {
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
    let labelWidth = labelLength * 4
    let labelX = fromX - labelWidth
    let labelY = fromY

    if (toX < fromX) {
      labelX -= Math.abs(toX - fromX) / 2
    }
    if (toX > fromX) {
      labelX += Math.abs(fromX - toX) / 2
    }
    if (toY < fromY) {
      labelY -= Math.abs(fromY - toY) / 2
    }
    if (toY > fromY) {
      labelY += Math.abs(fromY - toY) / 2
    }

    if (debug) {
      console.log(
        `${edge['label']}: X:${labelX}/Y:${labelY} from X:${fromX}/Y:${fromY} to X:${toX}/Y:${toY}`
      )
    }

    if (debug) {
      labelText += ` (${labelX}/${labelY})`
    }

    // Calculate size of background
    let textHeight = 20
    let textWidth = labelWidth * 2.4
    if (labelText && labelText.split('\n').length > 1) {
      textHeight = labelText.split('\n').length * 15

      let spans = ''
      let index = 0
      let spanY = labelY - textHeight / 2
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
  const fontFamily = 'Consolas, Monaco, monospace';

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
    if (
      plainText.length / node['width'] >= 0.09 &&
      plainText.split('\n').length == 1
    ) {
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
        <foreignObject x="${node['x'] + textOffsetX}" y="${node['y'] + textOffsetY}" width="${node['width'] - textOffsetX * 2}" height="${node['height'] - textOffsetY * 2}">
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

    const base64_content = fs.readFileSync(filePath, 'base64')
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
  const fontFamily = 'Consolas, Monaco, monospace';

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

  let svg = ''
  svg += '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n'
  svg +=
    '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n'

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

  svg += `<svg viewBox="${minX - spacing} ${minY - spacing} ${width + spacing * 2} ${height + spacing * 2}" xmlns="http://www.w3.org/2000/svg">\n`

  // Render group as rect

  for (const group of nodes.filter((node) => node['type'] === 'group')) {
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

    fromNode = nodes.filter((node) => node['id'] === edge['fromNode'])[0]
    toNode = nodes.filter((node) => node['id'] === edge['toNode'])[0]

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

  for (const node of nodes.filter((node) =>
    ['text', 'file'].includes(node['type'])
  )) {
    svg += renderNode(node)
  }

  svg += '</svg>'

  return svg
}

module.exports = { convertCanvasToSVG, sanitizeName, sanitizeAssetname }
