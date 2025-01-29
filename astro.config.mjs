import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import remarkFigureCaption from '@microflash/remark-figure-caption'
import widont from 'rehype-widont'

export default defineConfig({
    site: 'https://k16e.com',
    prefetch: {
        prefetchAll: true,
        ignoreSlowConnection: true
    },
    assets: {
        baseAssetUrl: '/content/images',
        fileAssetUrl: '/content/images',
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
            nesting: true,
            applyBaseStyles: false
        }),
        mdx({
            ignoreIndentation: true
        }),
        sitemap()
    ],
    build: {
        format: 'preserve'
    },
    vite: {
        resolve: {
            alias: {
                '@images': '/content/images'
            }
        }
    }
})