const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
    theme: {
        extend: {
            screens: {
                'xs': '475px',
                ...defaultTheme.screens
            },
            fontFamily: {
                sans: ['Bricolage Grotesque Variable, sans-serif', ...defaultTheme.fontFamily.sans],
            },
        }
    }
}