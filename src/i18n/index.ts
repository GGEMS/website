import type { Lang } from './config';
import en from './en';
import fr from './fr';

export type TranslationKey = keyof typeof en;

const translations: Record<Lang, Record<TranslationKey, string>> = {
  en,
  fr,
};

export function useTranslations(lang: Lang) {
  return (key: TranslationKey): string => translations[lang][key];
}
