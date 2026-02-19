export const languages = {
    en: { name: 'English', flag: '🇺🇸', dir: 'ltr' },
    es: { name: 'Español', flag: '🇪🇸', dir: 'ltr' },
    fr: { name: 'Français', flag: '🇫🇷', dir: 'ltr' },
    de: { name: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
    it: { name: 'Italiano', flag: '🇮🇹', dir: 'ltr' },
    pt: { name: 'Português', flag: '🇵🇹', dir: 'ltr' },
    ja: { name: '日本語', flag: '🇯🇵', dir: 'ltr' },
    zh: { name: '中文', flag: '🇨🇳', dir: 'ltr' },
    ko: { name: '한국어', flag: '🇰🇷', dir: 'ltr' },
    ru: { name: 'Русский', flag: '🇷🇺', dir: 'ltr' },
    ar: { name: 'العربية', flag: '🇸🇦', dir: 'rtl' },
    hi: { name: 'हिन्दी', flag: '🇮🇳', dir: 'ltr' },
    tr: { name: 'Türkçe', flag: '🇹🇷', dir: 'ltr' },
    nl: { name: 'Nederlands', flag: '🇳🇱', dir: 'ltr' },
    pl: { name: 'Polski', flag: '🇵🇱', dir: 'ltr' },
} as const;

export const defaultLang = 'en';

export const supportedLangs = Object.keys(languages) as (keyof typeof languages)[];

export type Lang = (typeof supportedLangs)[number];

export function isValidLang(lang: string): lang is Lang {
    return supportedLangs.includes(lang as Lang);
}

export function getLangFromUrl(url: string): Lang {
    const [, lang] = url.split('/');
    if (lang && isValidLang(lang)) {
        return lang;
    }
    return defaultLang;
}

export function useTranslatedPath(lang: Lang) {
    return function translatePath(path: string, l: Lang = lang) {
        return `/${l}${path}`;
    };
}
