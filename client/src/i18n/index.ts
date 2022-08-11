import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import English from "./locales/en/language.json";
import Ukrainian from "./locales/ua/language.json";
import Russian from "./locales/ru/language.json";

const resources = {
    en: {
        translation: English
    },
    ua: {
        translation: Ukrainian
    },
    ru: {
        translation: Russian
    }
}

i18next
    .use(initReactI18next)
    .init(
        {
            resources,
            lng: "ua",
            interpolation: {
                escapeValue: false
            }
        }
    )

export default i18next;