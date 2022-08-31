const { defaultTheme } = require('vuepress')
const { searchPlugin } = require('@vuepress/plugin-search')
const { plausiblePlugin } = require('./plausible')

module.exports = {
    lang: 'de-CH',
    title: 'Wiki Mint System',
    description: 'Strukturierte Wissensdatenbank der Mint System GmbH. ',
    theme: defaultTheme({
        logo: '/icon.png',
        repo: 'mint-system/wiki',
        docsBranch: '14.0',
        editLink: false,
        navbar: [
            { text: 'Home', link: '/' },
            { text: 'Glossary', link: '/glossary' },
            { text: 'Mint System', link: 'https://www.mint-system.ch' }
        ]
    }),
    plugins: [
        searchPlugin({
            maxSuggestions: 10
        }),
        plausiblePlugin({
            'domain': 'wiki.mint-system.ch'
        })
    ],
    extendsMarkdown: (md) => {
        md.use(require('markdown-it-include'))
    },
}