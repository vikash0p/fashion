import ContactComponent from '@/components/ReausableComp/ContactComponent';
import React from 'react'
export const metadata = {
  title: "Contact Us | Fashion Store - Get in Touch",
  description:
    "Reach out to Fashion Store with any questions or inquiries. Whether you need support, have feedback, or want to connect, our contact page provides all the information you need to get in touch with us.",
  openGraph: {
    title: "Contact Us | Fashion Store - Get in Touch",
    description:
      "Get in touch with Fashion Store for support, feedback, or inquiries. Our contact page provides all the details you need to reach out to us.",
    url: `${process.env.URL}/contact`, // Update to your actual URL
    images: "/contact-page-image.png", // Replace with the correct image path or URL
    siteName: "Fashion Store",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Fashion Store - Get in Touch",
    description:
      "Need assistance or have questions? Contact Fashion Store for support or feedback. Visit our contact page for more details.",
    images: "/contact-page-image.png", // Replace with the correct image path or URL
  },
};

const Contact = () => {
  return (
    <div>
<ContactComponent />
    </div>
  )
}

export default Contact
