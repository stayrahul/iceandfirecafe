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
      <body className={`${inter.variable} ${playfair.variable} min-h-screen bg-[#FDFBF7] text-[#2C1E16] font-sans selection:bg-[#C84B31]/20 selection:text-[#C84B31] antialiased`}>
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
