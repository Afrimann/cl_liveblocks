import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
title: "LiveBlocks | Build collaborative experiences faster",
  description: "subject to change",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
