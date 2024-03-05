// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  head: {
    title: 'Elmaam Academy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
  },
  modules: [
   '@pinia/nuxt',
   '@nuxt/ui',
   '@nuxt/image',
   'nuxt-icon',
   '@nuxtjs/google-fonts',
   '@formkit/auto-animate/nuxt',
  ],
  imports: {
    dirs: ['~/stores']
  },
  colorMode: {
    preference: 'light',
  },
  ui: {
    icons:'all'
  },
 plugins: [  '~/plugins/youtube.js' ] ,
   googleFonts: {
     families: {
       Poppins: true,
       Roboto: true,
       Cairo: true,
     },
     preload: true,
    prefetch: false
  },
  image: {
    screens: {
      'xs': 320,
      'md': 768,
      'xl': 1280,
    },
    qulity: 95,
    format: ['webp'],
    inject: true,
  },
  css: ['~/assets/css/tailwind.css',"plyr/dist/plyr.css"],
})
