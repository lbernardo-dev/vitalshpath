// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://lbernardo-dev.github.io',
    base: '/vitalshpath_landing',
    server: {
        port: 3000,
    },
    integrations: [
        tailwind(),
        react(),
        sitemap({
            i18n: {
                defaultLocale: 'en',
                locales: {
                    en: 'en-US',
                    es: 'es-ES',
                    fr: 'fr-FR',
                    de: 'de-DE',
                    it: 'it-IT',
                    pt: 'pt-PT',
                    ja: 'ja-JP',
                    zh: 'zh-CN',
                    ko: 'ko-KR',
                    ru: 'ru-RU',
                    ar: 'ar-SA',
                    hi: 'hi-IN',
                    tr: 'tr-TR',
                    nl: 'nl-NL',
                    pl: 'pl-PL',
                },
            },
            changefreq: 'weekly',
            priority: 0.7,
            lastmod: new Date(),
            filter: (page) => !page.includes('/404'),
        }),
    ],
});
