import i18n from 'i18next';
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';
import portfolioEN from './locales/en/portfolio.json';
import portfolioRU from './locales/ru/portfolio.json';

const resources = {
  en: {
    translation: translationEN,
    portfolio: portfolioEN
  },
  ru: {
    translation: translationRU,
    portfolio: portfolioRU
  }
};

i18n
  // backend connection i18next
  .use(Backend)
  // Automatic language detection
  .use(LanguageDetector)
  // Initialization module
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',        // Standard language
    debug: true,
    detection: {              // Language cookie recognition and caching
      order: ['queryString', 'cookie'],
      cash: ['cookie']
    },
    interpolation: {
      escapeValue: false
    }
  }
);

export default i18n;
