// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        greeting: "Hello, World!",
      },
    },
    hi: {
      translation: {
        greeting: "नमस्ते, दुनिया!",
      },
    },
    ar: {
      translation: {
        greeting: "مرحبا، العالم!",
      },
    },
    ja: {
      translation: {
        greeting: "こんにちは、世界！",
      },
    },
    kn: {
      translation: {
        greeting: "ನಮಸ್ಕಾರ, ವಿಶ್ವ!",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
