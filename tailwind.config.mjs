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
                xs: ['0.895rem', '1.355rem'],
                sm: ['0.995rem', '1.375rem'],
                base: ['1rem', '1.555rem'],
                md: ['1.075rem', '1.655rem'],
                lg: ['1.125rem', '1.635rem'],
                xl: ['1.25rem', '1.755rem'],
                '2xl': ['1.5rem', '2.155rem'],
                '3xl': ['1.875rem', '2.375rem'],
            },
            colors: {
                zinc: {
                    '50': '#f5f5f6',
                    '100': '#e6e6e7',
                    '200': '#cfcfd2',
                    '300': '#aeaeb2',
                    '400': '#85868b',
                    '500': '#6a6b70',
                    '600': '#5b5b5f',
                    '700': '#4d4d51',
                    '800': '#444546',
                    '900': '#202020',
                    '950': '#19191a',
                },
                slate: {
                    '50': '#f4f5f8',
                    '100': '#e9ebf0',
                    '200': '#d8dce5',
                    '300': '#bcc3d4',
                    '400': '#9ca5be',
                    '500': '#848bad',
                    '600': '#72789e',
                    '700': '#66698f',
                    '800': '#565877',
                    '900': '#484a60',
                    '950': '#2f303c',
                },
                amber: {
                    '50': '#fefbe8',
                    '100': '#fff8c2',
                    '200': '#ffef88',
                    '300': '#ffde43',
                    '400': '#ffc910',
                    '500': '#efaf03',
                    '600': '#cc8500',
                    '700': '#a45f04',
                    '800': '#874a0c',
                    '900': '#733d10',
                    '950': '#431e05',
                }
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms')
    ]
}