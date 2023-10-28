export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '',
      },
      sitemap: 'https://keedriver.com/sitemap.xml',
    }
  }