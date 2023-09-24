//import { createResolver, logger, defineNuxtModule } from '@nuxt/kit'
//import { $fetch } from 'ofetch'
//import { version } from './package.json'
//
//const { resolve } = createResolver(import.meta.url)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //css: [
  //  resolve('./assets/css/main.css')
  //],
  devtools: { enabled: true },
  extends: [
    '@nuxt-themes/docus',
  ],
})
