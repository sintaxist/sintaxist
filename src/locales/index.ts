import esTranslations from './es.json';
import enTranslations from './en.json';

export const LANGUAGES = {
  es: {
    name: 'ES',
    translations: esTranslations
  },
  en: {
    name: 'EN',
    translations: enTranslations
  },
};

export type AppLocale = keyof typeof LANGUAGES;

export const defaultLang: AppLocale = 'es';