import { defineConfig } from 'astro/config'
import { loadEnv } from 'vite'
import storyblok from '@storyblok/astro'
import tailwind from '@astrojs/tailwind'
import pages from 'astro-pages'
import mdx from '@astrojs/mdx'

const
    env = loadEnv('', process.cwd(), 'STORYBLOK')

export default defineConfig({
    site: 'https://komponents-v2.netlify.app',
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
    ]
})