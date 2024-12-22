import { z, defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { getImage } from 'astro:assets'


async function imageTransform(src: string) {
    if (src.startsWith('@images/')) {
        const { src: optimizedSrc } = await getImage({ src: src.replace('@images/', '/content/images/') })
        return optimizedSrc
    }
    return src
}

const pages = defineCollection({
    loader: glob({ pattern: 'pages/**/[^_]*.{md,mdx,json,yml,yaml}', base: './content'}),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string().max(224),
        cover: z.object({
            src: image().transform(imageTransform),
            alt: z.string(),
        }),
    })
})
const work = defineCollection({
    loader: glob({ pattern: 'work/**/[^_]*.{md,mdx,json,yml,yaml}', base: './content'}),
    schema: ({ image }) => z.object({
        id: z.string().optional(),
        isDraft: z.boolean(),
        region: z.string(),
        title: z.string(),
        description: z.string().max(224),
        color: z.coerce.string().max(6),
        shortcode: z.string().max(3),
        logo: z.string().default('logo'),
        cover: z.object({
            src: image().transform(imageTransform),
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
const blog = defineCollection({
    loader: glob({ pattern: 'blog/**/[^_]*.{md,mdx,json,yml,yaml}', base: './content'}),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string().max(224),
        excerpt: z.string().min(200).max(350).optional(),
        cover: z.object({
            src: image().transform(imageTransform),
            alt: z.string(),
        }).optional(),
        showCover: z.boolean().default(true),
        series: z.string(),
        release: z.date(),
        update: z.date(),
        isDraft: z.boolean().optional(),
    })
})
const tasks = defineCollection({
    loader: glob({ pattern: 'tasks/**/[^_]*.{md,mdx,json,yml,yaml}', base: './content'}),
    schema: ({ image }) => z.object({
        title: z.string(),
        summary: z.string(),
        start: z.string(),
        duration: z.string(),
        details: z.array(z.object({
            title: z.string(),
            body: z.string()
        })).optional(),
        owner: z.object({
            image: image().transform(imageTransform),
            title: z.string()
        }),
        status: z.string()
    })
})

export const collections = {
    pages,
    work,
    blog,
    tasks
}