import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import pages from 'astro-pages'
import mdx from '@astrojs/mdx'

export default defineConfig({
    site: 'https://v4.k16e.co',
    prefetch: {
        prefetchAll: true,
        defaultStrategy: 'viewport',
        ignoreSlowConnection: true
    },
    integrations: [
        pages('routes'),
        tailwind({
            nesting: true
        }),
        mdx()
    ],
    build: {
        format: 'preserve'
    }
})