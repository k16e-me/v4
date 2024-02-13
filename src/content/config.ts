import { z, defineCollection } from 'astro:content'

const pages = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string()
    })
})
const work = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string()
    })
})
const astro = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string()
    })
})

export const collections = {
    pages,
    work,
    astro
}