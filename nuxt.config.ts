// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/robots', "@nuxt/image"],
  app: {
    head: {
      title: 'Arif Hidayat',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          name: 'description',
          content: 'Fullstack Software Engineer',
        }
      ]
    }
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },
  robots: {
    /* module options */
  },
  image: {
    format: ['webp', 'avif']
  }
})
