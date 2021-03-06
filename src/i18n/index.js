import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from './zh_cn.js'
import en from './en.js'

Vue.use(VueI18n)
// 准备翻译的语言环境信息
const messages = {
  en: en,
  zh: zh
}
let locale = localStorage.getItem('lang') || 'zh' //从localstorag中获取

// 通过选项创建 VueI18n 实例
const i18n = new VueI18n({
  locale, // 设置地区
  messages // 设置地区信息
})

export default i18n
