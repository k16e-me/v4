/** @type {import('tailwindcss').Config} */
const
    defaultTheme = require('tailwindcss/defaultTheme'),
    colors = require('tailwindcss/colors')

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
                xs: ['0.885rem', '1.345rem'],
                sm: ['0.975rem', '1.365rem'],
                base: ['1rem', '1.555rem'],
                md: ['1.075rem', '1.655rem'],
                lg: ['1.125rem', '1.625rem'],
                xl: ['1.25rem', '1.755rem'],
                '2xl': ['1.5rem', '2.155rem'],
                '3xl': ['1.875rem', '2.375rem'],
            },
            colors: {
                accent: {
                    '50': '#fefce8',
                    '100': '#fef9c3',
                    '200': '#fef08a',
                    '300': '#fde047',
                    '400': '#facc15',
                    '500': '#eab308',
                    '600': '#ca8a04',
                    '700': '#a16207',
                    '800': '#854d0e',
                    '900': '#713f12',
                    '950': '#422006'
                },
                secondary: {
                    '50': '#ecfdf4',
                    '100': '#d0fbe2',
                    '200': '#a6f4cb',
                    '300': '#6ce9ae',
                    '400': '#31d68f',
                    '500': '#0cac6c',
                    '600': '#039860',
                    '700': '#027a50',
                    '800': '#046141',
                    '900': '#054f37',
                    '950': '#012d1f'
                },
                primary: {
                    '50': '#f5f5f6',
                    '100': '#e6e6e7',
                    '200': '#cfcfd2',
                    '300': '#aeaeb2',
                    '400': '#85868b',
                    '500': '#6a6b70',
                    '600': '#5b5b5f',
                    '700': '#4d4d51',
                    '800': '#444546',
                    '900': '#3c3c3d',
                    '950': '#19191a'
                }
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms')
    ]
}