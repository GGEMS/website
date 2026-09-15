export const languages = {
  en: 'English',
  fr: 'Français',
} as const;

export type Lang = keyof typeof languages;

export const supportedLanguages = Object.keys(languages) as Lang[];
export const defaultLang: Lang = 'en';

export function localizedPath(pathname: string, targetLang: Lang): string {
  const segments = pathname.split('/').filter(Boolean);

  if (
    segments.length > 0 &&
    supportedLanguages.includes(segments[0] as Lang) &&
    segments[0] !== defaultLang
  ) {
    segments.shift();
  }

  const basePath = segments.length > 0
    ? `/${segments.join('/')}/`
    : '/';

  if (targetLang === defaultLang) {
    return basePath;
  }

  return basePath === '/'
    ? `/${targetLang}/`
    : `/${targetLang}${basePath}`;
}
