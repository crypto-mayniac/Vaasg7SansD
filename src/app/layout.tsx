import type { Metadata } from "next";
import localFont from "next/font/local";
import "animate.css/animate.compat.css"
import "./globals.css";

const christmasFont = localFont({
  src: "./fonts/christmas2.woff",
  variable: "--christmas",
  weight: "normal",
});
const typeFont = localFont({
  src: "./fonts/DaughterType.woff",
  variable: "--type",
  weight: "normal",
});
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Santa's Daughter - Solana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="theme-color" content="#151633" />
      <body
        className={`${christmasFont.variable} ${typeFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
