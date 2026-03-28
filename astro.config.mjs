// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

const siteOrigin = 'https://lbernardo-dev.github.io';
const basePath = '/vitalshpath';
const siteRoot = `${siteOrigin}${basePath}`;

// https://astro.build/config
export default defineConfig({
    site: siteOrigin,
    base: basePath,
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
            filter: (page) => {
                const normalized = page.replace(/\/$/, '');
                return (
                    !page.includes('/404') &&
                    !page.includes('/admin') &&
                    !page.includes('/maintenance') &&
                    normalized !== siteRoot
                );
            },
            serialize(item) {
                return item;
            },
        }),
    ],
});
