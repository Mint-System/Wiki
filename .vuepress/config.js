import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { plausiblePlugin } from './plausible'
import { defineUserConfig } from 'vuepress'


export default defineUserConfig({
    lang: 'de-CH',
    title: 'Wiki Mint System',
    description: 'Strukturierte Wissensdatenbank der Mint System GmbH. ',
    head: [
        ['link', { rel: 'icon', href: '/icon.png' }]
    ],
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
        }),
    ],
})