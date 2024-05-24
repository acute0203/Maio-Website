import i18next from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"
import { getBrowserLang } from "@/core/utils/getBrowserLang"
import en from "@/locales/en/strings.json"
import zh from "@/locales/zh/strings.json"

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "zh",
    lng:
      (typeof window !== "undefined" &&
        (localStorage.getItem("i18nextLng") ||
          getBrowserLang(navigator.language))) ||
      "zh",
    resources: {
      en: {
        translation: en,
      },
      zh: {
        translation: zh,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  })
  .catch()

export default i18next
