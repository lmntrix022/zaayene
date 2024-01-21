import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";


const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ['400','500','600','700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "ZA A' YENE",
  description: "Za A' Yene est une plateforme pour le management d'evenement ",
  icons: {
    icon: '/assets/images/zaayene.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="fr">
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
