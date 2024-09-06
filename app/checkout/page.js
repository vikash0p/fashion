import React from 'react'
export const metadata = {
  title: "Checkout | Fashion Store - Secure & Easy Payment",
  description:
    "Complete your purchase at Fashion Store. Review your order, choose your payment method, and enjoy a secure and seamless checkout experience with our elegant fashion pieces.",
  openGraph: {
    title: "Checkout | Fashion Store - Secure & Easy Payment",
    description:
      "Finalize your purchase at Fashion Store. Review your cart, select a payment method, and enjoy a smooth and secure checkout experience.",
    url: `${process.env.URL}/checkout`, // Update to your actual URL
    images: "/checkout-page-image.png", // Replace with the correct image path or URL
    siteName: "Fashion Store",
  },
  twitter: {
    card: "summary_large_image",
    title: "Checkout | Fashion Store - Secure & Easy Payment",
    description:
      "Your Fashion Store checkout process is secure and easy. Review your items and complete your purchase with confidence.",
    images: "/checkout-page-image.png", // Replace with the correct image path or URL
  },
};

export default function CheckOut() {
  return (
    <div className='w-full h-screen bg-violet-100 '>

    </div>
  )
}
