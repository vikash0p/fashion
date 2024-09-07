import AboutComponent from '@/components/ReausableComp/AboutComponent';
import React from 'react'
export const metadata = {
  title: "About Us | Fashion Store - Elegance & Trends Combined",
  description:
    "Learn more about Fashion Store, where elegance meets the latest trends. Discover our story, values, and dedication to bringing you exclusive fashion pieces that stand the test of time.",
  openGraph: {
    title: "About Us | Fashion Store - Elegance & Trends Combined",
    description:
      "Fashion Store is dedicated to blending timeless elegance with the latest fashion trends. Discover our journey and commitment to offering high-quality, trendsetting designs.",
    url: `${process.env.URL}/about}`, // Update to your actual URL
    images: "/about-page-image.png", // Replace with the correct image path or URL
    siteName: "Fashion Store",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Fashion Store - Elegance & Trends Combined",
    description:
      "At Fashion Store, we’re all about timeless elegance and the latest trends. Learn more about our story and how we bring you the best in fashion.",
    images: "/about-page-image.png", // Replace with the correct image path or URL
  },
};

const About = () => {
  return (
    <div>
<AboutComponent />
    </div>
  )
}

export default About
