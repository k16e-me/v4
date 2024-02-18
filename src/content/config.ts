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
        title: z.string(),
        isDraft: z.boolean(),
        cover: z.object({
            src: z.string(),
            alt: z.string(),
        }),
        tag: z.string().max(10),
        region: z.string(),
        client: z.object({
            name: z.string(),
            shortname: z.string(),
            person: z.string(),
            code: z.string().max(3),
            color: z.coerce.string().max(6)
        }),
        description: z.string().max(155),
        doneDate: z.date()
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