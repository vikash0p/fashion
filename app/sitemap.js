export default function sitemap() {
    const currentDate = new Date().toISOString();

    
    const urls = [
        { url: 'https://storefashion.vercel.app/', changeFrequency: 'yearly', priority: 1 },
        { url: 'https://storefashion.vercel.app/category', changeFrequency: 'monthly', priority: 0.8 },
        { url: 'https://storefashion.vercel.app/about', changeFrequency: 'monthly', priority: 0.8 },
        { url: 'https://storefashion.vercel.app/contact', changeFrequency: 'monthly', priority: 0.8 },
        { url: 'https://storefashion.vercel.app/register', changeFrequency: 'monthly', priority: 0.8 },
        { url: 'https://storefashion.vercel.app/login', changeFrequency: 'monthly', priority: 0.8 },
        { url: 'https://storefashion.vercel.app/cart', changeFrequency: 'monthly', priority: 0.8 },
        // Dynamically generating categories
        ...Array.from({ length: 20 }, (_, i) => ({
            url: `https://storefashion.vercel.app/category/${i + 1}`,
            changeFrequency: 'monthly',
            priority: 0.8,
        })),
    ];

    return urls.map((urlData) => ({
        url: urlData.url,
        lastModified: currentDate,
        changeFrequency: urlData.changeFrequency,
        priority: urlData.priority,
    }));
}
