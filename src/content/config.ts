import { z, defineCollection } from 'astro:content'

const pages = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().max(155),
    })
})
const work = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().max(155),
        isDraft: z.boolean(),
        cover: z.object({
            src: z.string(),
            alt: z.string(),
        }),
        tag: z.string().max(15),
        region: z.string(),
        client: z.object({
            name: z.string(),
            shortname: z.string(),
            person: z.string(),
            role: z.string().default('Founder'),
            code: z.string().max(3),
            color: z.coerce.string().max(6),
            svg: z.string().default('logo')
        }),
        date: z.date(),
    })
})
const astro = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
    })
})

export const collections = {
    pages,
    work,
    astro
}