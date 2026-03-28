import type { Lang } from "../i18n/ui-locales";

export const appStoreLabels: Record<
    Lang,
    { view: string; rate: string }
> = {
    en: { view: "View on the App Store", rate: "Rate on the App Store" },
    es: { view: "Ver en App Store", rate: "Valorar en App Store" },
    fr: { view: "Voir sur l’App Store", rate: "Noter sur l’App Store" },
    de: { view: "Im App Store ansehen", rate: "Im App Store bewerten" },
    it: { view: "Vedi su App Store", rate: "Valuta su App Store" },
    pt: { view: "Ver na App Store", rate: "Avaliar na App Store" },
    ja: { view: "App Storeで見る", rate: "App Storeで評価する" },
    zh: { view: "在 App Store 查看", rate: "在 App Store 评分" },
    ko: { view: "App Store에서 보기", rate: "App Store에서 평가하기" },
    ru: { view: "Открыть в App Store", rate: "Оценить в App Store" },
    ar: { view: "عرض في App Store", rate: "قيّم على App Store" },
    hi: { view: "App Store पर देखें", rate: "App Store पर रेट करें" },
    tr: { view: "App Store’da görüntüle", rate: "App Store’da puan ver" },
    nl: { view: "Bekijk in de App Store", rate: "Beoordeel in de App Store" },
    pl: { view: "Zobacz w App Store", rate: "Oceń w App Store" },
};
