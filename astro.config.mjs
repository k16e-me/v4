import { defineConfig } from 'astro/config'
import { loadEnv } from 'vite'
import storyblok from '@storyblok/astro'
import tailwind from '@astrojs/tailwind'
import pages from 'astro-pages'
import mdx from '@astrojs/mdx'

const
    env = loadEnv('', process.cwd(), 'STORYBLOK')

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