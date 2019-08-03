/**国际化 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en'
import cn from './cn'
import storage from '../utils/storage'

Vue.use(VueI18n)

const messages = {
  en, cn
}

let locale = storage.getLocale()
if (!locale) {
  locale = 'cn'
  storage.saveLocale(locale)
}

const i18n = new VueI18n({
  locale,
  messages
})

export default i18n
