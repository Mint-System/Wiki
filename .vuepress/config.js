module.exports = {
    title: 'Wiki Mint System',
    description: 'Wiki Mint System',
    head: [
        ['link', { rel: "icon", type: "image/png", href: "icon.png"}],
    ],
    themeConfig: {
        logo: 'icon.png',
        sidebar: 'auto',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Topics', link: '/topics' },
            { text: 'Glossary', link: '/glossary' }
        ]
    },
    plugins: [
        'fulltext-search',
        '@vuepress/active-header-links',
        '@vuepress/medium-zoom',
        'vuepress-plugin-mermaidjs',
        'plausible-analytics',
        '@vuepress/back-to-top',
        [
            'vuepress-plugin-sitemap',
            {
                hostname: 'https://wiki.mint-system.ch/'
            }
        ]
    ],
    extendMarkdown: (md) => {
        md.use(require('markdown-it-include'))
    }
}
