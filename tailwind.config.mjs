/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'rose-poudre': '#FFB6C1',
                'rose-poudre-light': '#FFC1CC',
                'corail-doux': '#FFB6A3',
                'corail-warmth': '#FF9A8B',
                'peche-clair': '#FFDAB9',
                'peche-light': '#FFE4D0',
                background: '#FFF9F5',
                'background-alt': '#FFFAF7',
                'blanc-casse': '#FEFEFE',
                'gris-texte': '#4A4A4A',
                'gris-clair': '#F5F5F5',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-hero': 'linear-gradient(135deg, #FFE4D0 0%, #FFC1CC 100%)',
                'gradient-cta': 'linear-gradient(135deg, #FFB6C1, #FF9A8B)',
            },
        },
    },
    plugins: [],
}
