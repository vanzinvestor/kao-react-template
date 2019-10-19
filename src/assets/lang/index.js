import i18n from 'i18next';

import en from './en.json';
import id from './id.json';

const resources = {
  en: { translation: en },
  id: { translation: id },
};

i18n.init({
  resources,
  lng: 'id',
  fallbackLng: 'id',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
