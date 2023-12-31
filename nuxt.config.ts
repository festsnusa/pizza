// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/css/main.scss'
  ],
  modules: [
    //...
    '@vee-validate/nuxt',
  ],
  plugins:['@/plugins/antd']
})
