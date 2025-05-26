import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
// import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { searchPlugin } from '@vuepress/plugin-search'
import { plausiblePlugin } from './plausible'
import { mermaidPlugin } from './mermaid'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    bundler: viteBundler(),
    lang: 'de-CH',
    title: 'Wiki Mint System',
    description: 'Strukturierte Wissensdatenbank der Mint System GmbH. ',
    head: [
        ['link', { rel: 'icon', href: '/icon.png' }]
    ],
    pagePatterns: ['**/*.md', '!.vuepress', '!node_modules'],
    theme: defaultTheme({
        logo: '/icon.png',
        repo: 'mint-system/wiki',
        docsBranch: 'main',
        editLink: false,
        navbar: [
            { text: 'Home', link: '/' },
            { text: 'Glossary', link: '/glossary' },
            { text: 'Mint System', link: 'https://www.mint-system.ch' },
            { text: 'Chat', link: 'https://matrix.to/#/#allgemein:mint-system.ch' }
        ]
    }),
    plugins: [
        // docsearchPlugin({
        //     appId: 'K0L2Z2FR1R',
        //     apiKey: 'fa95c381e8996dbc5ac371d4acbd4ca5',
        //     indexName: 'wiki_mint_system_ch_k0l2z2fr1r_pages',
        // }),
        searchPlugin({
            maxSuggestions: 10
        }),
        plausiblePlugin({
            'domain': 'wiki.mint-system.ch'
        }),
        mermaidPlugin(),
        shikiPlugin({
            theme: 'catppuccin-latte',
            langs: ['bash', 'yml', 'yaml', 'json', 'css', 'html', 'xml', 'groovy', 'py', 'python', 'sql', 'powershell', 'txt', 'csv', 'mermaid', 'md', 'markdown', 'toml', 'php'],
        }),
    ],
})
