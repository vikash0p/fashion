export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '*',
            disallow: '/private/*',
        },
        sitemap: 'https://storefashion.vercel.app/sitemap.xml',
    }
}