import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    server: {
        host: '0', // default: localhost
        port: 80 // default: 3000
    },
    css: [
        '@fortawesome/fontawesome-svg-core/styles.css'
    ]
})
