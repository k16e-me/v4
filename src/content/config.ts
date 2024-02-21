import { z, defineCollection } from 'astro:content'

const pages = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().max(200),
    })
})
const work = defineCollection({
    type: 'content',
    schema: z.object({
        isDraft: z.boolean(),
        region: z.string(),
        title: z.string(),
        description: z.string().max(200),
        color: z.coerce.string().max(6),
        shortcode: z.string().max(3),
        logo: z.string().default('logo'),
        cover: z.object({
            src: z.string(),
            alt: z.string(),
        }),
        tag: z.string().max(15),
        client: z.object({
            name: z.string(),
            shortname: z.string(),
            person: z.string(),
            role: z.string().default('Founder')
        }),
        date: z.date(),
        card: z.object({
            consultant: z.string(),
            collaborators: z.string().array().optional(),
            technologies: z.string().array(),
            client: z.string(),
            locale: z.string(),
            link: z.string().url().optional(),
            services: z.string().array().optional()
        }).optional()
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