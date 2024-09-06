import CartCard from '@/components/CartComp/CartCard'
import React from 'react'
export const metadata = {
  title: "Your Cart | Fashion Store - Review & Checkout",
  description:
    "Review the items in your cart at Fashion Store. Make sure you're ready to checkout with our elegant fashion pieces that blend timeless style and contemporary trends.",
  openGraph: {
    title: "Your Cart | Fashion Store - Review & Checkout",
    description:
      "Check out the fashion pieces in your cart at Fashion Store. From elegant classics to trendy new styles, review your items before completing your purchase.",
    url: `${process.env.URL}/cart`, // Update to your actual URL
    images: "/cart-page-image.png", // Replace with the correct image path or URL
    siteName: "Fashion Store",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Cart | Fashion Store - Review & Checkout",
    description:
      "Your cart at Fashion Store is filled with elegant and trendy items. Complete your purchase to elevate your style.",
    images: "/cart-page-image.png", // Replace with the correct image path or URL
  },
};

export default function Cart() {
  return (
    <div>
      <CartCard />
    </div>
  )
}
