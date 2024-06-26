import Footer from "@/components/layoutSection/footer";
import Header from "@/components/layoutSection/header";
import type{ Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import fontSans from "@/types/fonst";


export const metadata: Metadata = {
  title: 'Flex Membrana Protege | Productos de alta calidad inovasio',
  description: 'Descubre nuestros productos de membrana de protección.',
  openGraph: {
    title: 'Flex MembranaProtec | Productos de alta calidad inovasion',
    description: 'Descubre nuestros productos de membrana de protección de alta calidad.',
    url: process.env.NEXT_SITE,
    siteName: 'Flex Membrana Protege', 
    locale: 'en_ES',
    type: 'website',
    images: [
      {
        url: 'https://flexmembranaprotege.com/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Flex Membrana Protege',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased dark:bg-background-dark dark:text-foreground-dark",
          fontSans.variable
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
