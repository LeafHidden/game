
import { defineNuxtPlugin } from '#app'
import directives from '~/directives/index'
export default defineNuxtPlugin((nuxtApp)=>{
    nuxtApp.vueApp.use(directives)
})
