import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import pages from 'astro-pages'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import remarkFigureCaption from '@microflash/remark-figure-caption'
import widont from 'rehype-widont'
// import rehypeFigure from 'rehype-figure'

export default defineConfig({
    site: 'https://k16e.co',
    prefetch: {
        prefetchAll: true,
        defaultStrategy: 'viewport',
        ignoreSlowConnection: true
    },
    markdown: {
        rehypePlugins: [
            widont,
            // [rehypeFigure, { className: 'r-figure' }]
        ],
        remarkPlugins: [
            [remarkFigureCaption, { captionClassName: 'r-figcaption' }]
        ]
    },
    integrations: [
        pages('routes'),
        tailwind({
            nesting: true
        }),
        mdx(),
        sitemap()
    ],
    build: {
        format: 'preserve'
    }
})