import React from 'react'
import { fetchData } from '@/utils/fetchData'
import ProductCategory from '@/components/CategoryComp/ProductCategory';
export const metadata = {
    title: "Shop by Category | Fashion Store - Discover Styles by Collection",
    description:
        "Explore Fashion Store’s curated categories. Whether you're searching for casual wear, formal attire, or accessories, find the perfect pieces that match your style.",
    openGraph: {
        title: "Shop by Category | Fashion Store - Discover Styles by Collection",
        description:
            "Browse through Fashion Store’s collections, from casual to formal styles and accessories. Find the right pieces to elevate your wardrobe.",
        url: `${process.env.URL}/category`, // Update to your actual URL
        images: "/category-page-image.png", // Replace with the correct image path or URL
        siteName: "Fashion Store",
    },
    twitter: {
        card: "summary_large_image",
        title: "Shop by Category | Fashion Store - Discover Styles by Collection",
        description:
            "Find the perfect fashion pieces by category at Fashion Store. Discover stylish collections that suit every occasion.",
        images: "/category-page-image.png", // Replace with the correct image path or URL
    },
};

export default async function category() {
    const product = await fetchData();



    return (
        <>
            <ProductCategory product={product} />
        </>
    )
}
