import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/redux-toolkit/ReduxProvider";

import { Navbar, Footer, GoToTop, NewSeller } from "@/components/AllComponents";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(process.env.URL),

  title: {
    default: "Fashion Store | Timeless Elegance & Trendy Styles",
    template: "%s | Fashion Store",
  },
  description:
    "Welcome to Fashion Store! Discover our curated collections of elegant fashion pieces and trendy styles. Our user-friendly site, optimized with SEO, helps you find everything from timeless classics to the latest trends, making your shopping experience seamless.",
  openGraph: {
    title: {
      default: "Fashion Store | Timeless Elegance & Trendy Styles",
      template: "%s | Fashion Store",
    },
    description:
      "Explore our boutique for timeless fashion pieces and trendy styles. From elegant clothing to accessories, Fashion Store brings you the perfect blend of sophistication and the latest trends.",
    images: [
      {
        url: "https://storefashion.vercel.app/public/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "Fashion Store Logo",
      },
    ],
    url: process.env.URL,
    countryName: "India",
    emails: ["support@fashionstore.com"],
    phoneNumbers: ["1234567890", "9876543210"],
    siteName: "Fashion Store",
    locale: "en_IN",
    type: "website",
  },

  applicationName: "Fashion Store",
  keywords: [
    "FashionStore",
    "LuxuryFashion",
    "TrendyStyles",
    "ElegantClothing",
    "ExclusiveCollections",
    "FashionAccessories",
    "DesignerClothes",
    "Men'sFashion",
    "Women'sFashion",
    "FashionBoutique",
  ],

  authors: [
    { name: "Fashion Store Team" },
    { name: "Fashion Store", url: process.env.URL },
  ],
  creator: "Fashion Store Team",
  publisher: process.env.URL,
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-violet-100">
      <body className={inter.className}>
        <ReduxProvider>

          <Navbar />
          {children}
          <Footer />
          {/* <NewSeller /> */}
          <GoToTop />
        </ReduxProvider>
      </body>
    </html>
  );
}
