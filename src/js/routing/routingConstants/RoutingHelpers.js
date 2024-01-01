export const availableLocales = ['en', 'ar'];

export const getDefaultLanguage = ({ fallbackLocal }) => {
  let browserLang = window.navigator.languages ? window.navigator.languages[0] : null;
  browserLang =
    browserLang ||
    window.navigator.language ||
    window.navigator?.browserLanguage ||
    window.navigator?.userLanguage;

  let shortLang = browserLang;
  if (shortLang?.indexOf('-') !== -1) shortLang = shortLang?.split('-')[0];

  if (shortLang?.indexOf('_') !== -1) shortLang = shortLang?.split('_')[0];
  shortLang = availableLocales.includes(shortLang) ? shortLang : fallbackLocal;

  return shortLang;
};
