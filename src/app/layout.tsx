import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CartDrawer from "../components/cart/CartDrawer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Ice & Fire Cafe",
  description: "Experience Authentic Flavors.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} min-h-screen bg-[#FAF7F2] text-[#2C2C2C] font-sans selection:bg-[#8B3A3A]/20 selection:text-[#8B3A3A] antialiased`}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <CartDrawer />
      </body>
    </html>
  );
}
