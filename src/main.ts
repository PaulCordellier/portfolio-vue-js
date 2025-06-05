import './assets/main.scss'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import frenchLocalization from '@/locales/french.json'
import englishLocalization from '@/locales/english.json'

const app = createApp(App)

app.use(router)

type MessageFromat = typeof englishLocalization

const availableLocales = ['fr', 'en']

let defaultLocale: string | undefined
const navigatorLocale = navigator.language.split('-')[0]

for (const locale of availableLocales) {
    if (locale == navigatorLocale) {
        defaultLocale = locale
        break
    }
}

if (!defaultLocale) {
    defaultLocale = availableLocales[0]
}

const i18n = createI18n<[MessageFromat], 'fr' | 'en'>({
    locale: defaultLocale,
    legacy: false,
    availableLocales,
    messages: {
        en: englishLocalization,
        fr: frenchLocalization,
    },
})

app.use(i18n)

app.mount('#app')
