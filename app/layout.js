import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/redux-toolkit/ReduxProvider";
import Navbar from "@/components/ReausableComp/Navbar";
import Footer from "@/components/ReausableComp/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fashion Store",
  description: "Step into elegance at our fashion boutique. Discover timeless pieces and contemporary trends curated with precision, tailored to elevate your style effortlessly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-violet-100">
      <body className={inter.className}>
        <ReduxProvider>
          <Navbar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
