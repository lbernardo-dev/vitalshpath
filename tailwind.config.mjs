/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                cream: {
                    base: '#FDFCFB',
                    accent: '#F9F5F1',
                    light: '#FFFFFF',
                    dark: '#F2EBE3',
                },
                'teal-primary': '#0080A0',
                'teal-light': '#4FB3C3',
                'orange-accent': '#E65100',
                'slate-text': '#1A1C1E',
                'slate-muted': '#64748B',
                glass: {
                    border: 'rgba(255, 255, 255, 0.12)',
                    glow: 'rgba(255, 255, 255, 0.4)',
                }
            },
            boxShadow: {
                'premium': '0 50px 120px -30px rgba(0, 0, 0, 0.06)',
                'premium-hover': '0 70px 140px -20px rgba(0, 128, 160, 0.12)',
                'glow': '0 0 60px rgba(0, 128, 160, 0.25)',
                'inner-glow': 'inset 0 0 20px rgba(255, 255, 255, 0.5)',
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
                '6xl': '3rem',
            },
            backdropBlur: {
                '40px': '40px',
                '60px': '60px',
            }
        },
    },
    plugins: [],
}
