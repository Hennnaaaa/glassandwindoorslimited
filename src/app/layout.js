import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://glassandwindoors.co.uk"),
  title: {
    default: "Glass and Windoors Limited | Windows, Doors & Glazing UK",
    template: "%s | Glass and Windoors Limited",
  },
  description:
    "Glass and Windoors Limited design, manufacture and install premium windows, doors and glazing across the UK — casement & tilt-turn windows, bi-fold and sliding doors, composite doors, sealed units and roof lanterns.",
  keywords: [
    "windows and doors UK",
    "double glazing",
    "bifold doors",
    "composite doors",
    "sealed units",
    "aluminium windows",
    "uPVC windows",
  ],
  openGraph: {
    title: "Glass and Windoors Limited",
    description:
      "Premium windows, doors and glazing solutions, designed and installed across the UK.",
    url: "https://glassandwindoors.co.uk",
    siteName: "Glass and Windoors Limited",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-GB"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
