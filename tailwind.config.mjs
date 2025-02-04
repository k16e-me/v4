const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
    theme: {
        extend: {
            screens: {
                'xs': '475px',
                ...defaultTheme.screens
            },
            fontFamily: {
                sans: ['Bricolage Grotesque Variable, sans-serif', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                xs: ['0.895rem', '1.355rem'],
                sm: ['0.995rem', '1.375rem'],
                base: ['1rem', '1.555rem'],
                md: ['1.075rem', '1.655rem'],
                lg: ['1.125rem', '1.635rem'],
                xl: ['1.25rem', '1.755rem'],
                '2xl': ['1.5rem', '2.155rem'],
                '3xl': ['1.875rem', '2.375rem'],
            }
        }
    }
}