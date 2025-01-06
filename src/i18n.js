import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
//constants
import { LocalStorageKeys } from '@/js/constants/Constants';
//managers
import LocalStorageManager from '@/js/managers/LocalStorageManger';
//translations
import translationAr from '@/public/translations/ar.json';
import translationEn from '@/public/translations/en.json';

const resources = {
  en: {
    translation: translationEn,
  },
  ar: {
    translation: translationAr,
  },
};

const languageDetector = new LanguageDetector();
languageDetector.addDetector({
  name: 'customLocalStorageDetector',

  lookup() {
    return LocalStorageManager.getItem(LocalStorageKeys.I18_NEXT_LNG);
  },
});

i18n
  .use(languageDetector)
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    supportedLngs: ['ar', 'ar-SA', 'en', 'en-US'],
    fallbackLng: 'en',
    debug: false,
    interpolation: { escapeValue: false },
    resources,
    detection: {
      order: ['customLocalStorageDetector', 'navigator'],
      caches: [],
    },

    // react i18next special options (optional)
    // override if needed - omit if ok with defaults

    react: {
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
      useSuspense: false,
    },
  });

export default i18n;
