import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import remarkFigureCaption from '@microflash/remark-figure-caption'
import widont from 'rehype-widont'

export default defineConfig({
    site: 'https://k16e.co',
    prefetch: {
        prefetchAll: true,
        ignoreSlowConnection: true
    },
    markdown: {
        rehypePlugins: [
            widont,
        ],
        remarkPlugins: [
            remarkFigureCaption
        ]
    },
    integrations: [
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