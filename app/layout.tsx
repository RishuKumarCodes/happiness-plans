import type { Metadata } from "next";
import { Inter, Montserrat, Dancing_Script, Felipa } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const felipa = Felipa({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-felipa",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
});

export const metadata: Metadata = {
  title: "Happiness Plans - Your Gateway to Unforgettable Journeys ",
  description:
    "One destination for all your travel dreams - from exotic holidays to destination weddings, we make happiness happen worldwide",
  keywords:
    "travel services, destination weddings, study abroad programs, holiday packages, international travel, cruise bookings, foreign exchange, travel planning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${felipa.variable} ${montserrat.variable} ${dancingScript.variable} font-body`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
