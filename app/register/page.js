import RegisterForm from '@/components/FormComponent/RegisterForm';
import React from 'react'
export const metadata = {
    title: "Register | Fashion Store - Create Your Account",
    description:
        "Sign up for a Fashion Store account to start enjoying personalized shopping experiences. Register to manage your orders, track your purchases, and receive exclusive offers.",
    openGraph: {
        title: "Register | Fashion Store - Create Your Account",
        description:
            "Create a Fashion Store account to access personalized features, track your orders, and receive special offers. Register now for a seamless shopping experience.",
        url: `${process.env.URL}/register`, // Update to your actual URL
        images: "/register-page-image.png", // Replace with the correct image path or URL
        siteName: "Fashion Store",
    },
    twitter: {
        card: "summary_large_image",
        title: "Register | Fashion Store - Create Your Account",
        description:
            "Sign up at Fashion Store to enjoy a tailored shopping experience. Register to manage your orders and access exclusive offers.",
        images: "/register-page-image.png", // Replace with the correct image path or URL
    },
};

const Register = () => {
  return (
    <div>
<RegisterForm />
    </div>
  )
}

export default Register
