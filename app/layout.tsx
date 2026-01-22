import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fly Goldfinch | Premium Travel Experiences",
  description: "Your Gateway to Exclusive Global Adventures. Discover breathtaking destinations across 25+ countries with customized luxury itineraries.",
  keywords: ["travel agency", "luxury travel", "international tours", "custom itineraries", "Fly Goldfinch"],
  authors: [{ name: "Fly Goldfinch" }],
  openGraph: {
    title: "Fly Goldfinch | Premium Travel Experiences",
    description: "Your Gateway to Exclusive Global Adventures",
    type: "website",
    locale: "en_IN",
    siteName: "Fly Goldfinch",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
