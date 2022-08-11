// import the original type declarations
import 'react-i18next';
// import all namespaces (for the default language, only)
import ns1 from "../../i18n/locales/ua/language.json"
import ns2 from "../../i18n/locales/en/language.json"


declare module 'react-i18next' {
    interface CustomTypeOptions {
        defaultNS: 'ns1';
        resources: {
            ns1: typeof ns1;
            ns2: typeof ns2;
        };
    }
}