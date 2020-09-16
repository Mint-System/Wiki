function convert(content,file) {
    // convert wiki image links
    const wikiImage = /!\[\[([^\]]*\.png|jpg|jpeg)\]\]/g
    content = content.replace(wikiImage, '<img src="/assets/$1" \/>')

    // convert embeded content links
    // ![[Content] -> [Content](Content.md ':include')
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
            // Convert to docsify id
            anchor = anchor.toLowerCase().replace(/ /g, "-")
        }

        if (match.indexOf('|') > 0) {
            href = match.match(/\[\[([^\||#]*)/)[1]
            title = match.match(/\|(.*)\]\]/)[1]
        }

        content = content.replace(match, `<a href="/#/${href ? href : file.replace('\.md', '')}${anchor ? ('?id=' + anchor) : ''}">${title}</a>`)
    }

    // add footer
    content = content + [
        '\n\n',
        '[📝 Edit Document](' + 'https://github.com/Mint-System/Knowledge/blob/master/' + file + ')\n',
        '<hr>',
        '<footer>',
        'Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a>',
        '</footer>'
    ].join('')

    return content
}

exports.convert = convert
