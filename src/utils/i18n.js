import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import enLocale from '../locale/en.json'
import arLocale from '../locale/ar.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { ...enLocale },
      ar: { ...arLocale },
    },
    lng: 'ar',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
