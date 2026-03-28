import type { Lang } from "../i18n/ui-locales";
import { getSupabase, isSupabaseConfigured } from "./supabase";

export const APP_STORE_ID = "6760143192";

export type AppStoreLinks = {
    genericUrl: string;
    reviewUrl: string;
    storefronts: Partial<Record<Lang, string>>;
};

const defaultLinks: AppStoreLinks = {
    genericUrl: `https://apps.apple.com/app/id${APP_STORE_ID}`,
    reviewUrl: `https://apps.apple.com/app/id${APP_STORE_ID}?action=write-review`,
    storefronts: {
        en: `https://apps.apple.com/us/app/id${APP_STORE_ID}`,
        es: `https://apps.apple.com/es/app/id${APP_STORE_ID}`,
    },
};

export function getDefaultAppStoreLinks(): AppStoreLinks {
    return defaultLinks;
}

function isValidAppStoreUrl(value: unknown): value is string {
    return (
        typeof value === "string" &&
        value.startsWith("https://apps.apple.com/") &&
        value.length > "https://apps.apple.com/".length
    );
}

export function getAppStoreUrlForLang(lang: Lang, links: AppStoreLinks = defaultLinks): string {
    return links.storefronts[lang] || links.genericUrl;
}

export async function getRuntimeAppStoreLinks(): Promise<AppStoreLinks> {
    if (!isSupabaseConfigured()) return defaultLinks;

    const supabase = getSupabase();
    if (!supabase) return defaultLinks;

    const { data } = await supabase
        .from("site_settings")
        .select("value")
        .eq("key", "app_store_links")
        .maybeSingle();

    const value = data?.value;
    if (!value || typeof value !== "object") return defaultLinks;

    const storefronts =
        typeof value.storefronts === "object" && value.storefronts
            ? Object.entries(value.storefronts).reduce(
                  (acc, [storefrontLang, storefrontUrl]) => {
                      if (
                          storefrontLang in defaultLinks.storefronts &&
                          isValidAppStoreUrl(storefrontUrl)
                      ) {
                          acc[storefrontLang as Lang] = storefrontUrl;
                      }
                      return acc;
                  },
                  {} as Partial<Record<Lang, string>>,
              )
            : {};

    return {
        genericUrl: isValidAppStoreUrl(value.genericUrl)
            ? value.genericUrl
            : defaultLinks.genericUrl,
        reviewUrl: isValidAppStoreUrl(value.reviewUrl)
            ? value.reviewUrl
            : defaultLinks.reviewUrl,
        storefronts: {
            ...defaultLinks.storefronts,
            ...storefronts,
        },
    };
}

export async function hydrateAppStoreLinks(lang: Lang): Promise<void> {
    const links = await getRuntimeAppStoreLinks();
    const appUrl = getAppStoreUrlForLang(lang, links);

    document.querySelectorAll<HTMLElement>("[data-app-store-link]").forEach((element) => {
        if (element instanceof HTMLAnchorElement) {
            element.href = appUrl;
        }
    });

    document.querySelectorAll<HTMLElement>("[data-app-store-review-link]").forEach((element) => {
        if (element instanceof HTMLAnchorElement) {
            element.href = links.reviewUrl;
        }
    });
}
