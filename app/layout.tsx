import type { Metadata } from "next";
import "./globals.css";
import {Roboto} from "next/font/google";

const roboto=Roboto({
    subsets:["latin"],
    style:"normal",
    weight:["200","300","400","500","600","700"],
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
