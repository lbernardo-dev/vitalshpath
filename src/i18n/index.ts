import { languages, defaultLang, supportedLangs, type Lang } from './ui-locales';
import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import de from './locales/de.json';
import it from './locales/it.json';
import pt from './locales/pt.json';
import ja from './locales/ja.json';
import zh from './locales/zh.json';
import ko from './locales/ko.json';
import ru from './locales/ru.json';
import ar from './locales/ar.json';
import hi from './locales/hi.json';
import tr from './locales/tr.json';
import nl from './locales/nl.json';
import pl from './locales/pl.json';

const translations: Record<Lang, typeof en> = {
    en,
    es,
    fr,
    de,
    it,
    pt,
    ja,
    zh,
    ko,
    ru,
    ar,
    hi,
    tr,
    nl,
    pl,
};

function getTranslation(lang: Lang, key: string): string {
    const keys = key.split('.');
    let value: unknown = translations[lang];
    
    for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
            value = (value as Record<string, unknown>)[k];
        } else {
            value = undefined;
            break;
        }
    }
    
    if (typeof value === 'string') {
        return value;
    }
    
    if (lang !== defaultLang) {
        return getTranslation(defaultLang, key);
    }
    
    return key;
}

export function useTranslations(lang: Lang) {
    return function t(key: string): string {
        return getTranslation(lang, key);
    };
}

export function getTranslations(lang: Lang): typeof en {
    return translations[lang] || translations[defaultLang];
}

export { languages, defaultLang, supportedLangs };
export type { Lang };
