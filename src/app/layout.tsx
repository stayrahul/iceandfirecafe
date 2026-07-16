import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CartDrawer from "../components/cart/CartDrawer";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Ice & Fire Cafe",
  description: "Experience Authentic Flavors in Simraungadh.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${jakarta.variable} ${outfit.variable} min-h-screen bg-[#111111] text-[#F8F9FA] font-sans antialiased selection:bg-[#FF5A36]/30 selection:text-[#FF5A36]`}>
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
        <CartDrawer />
      </body>
    </html>
  );
}
