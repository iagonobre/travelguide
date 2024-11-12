import type { Metadata } from "next";
import "./globals.css";

import { DM_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Travel Guide",
  description: "Bem-vindo ao Travel Guide: um blog pessoal repleto de dicas autênticas e guias detalhados para explorar destinos incríveis e descobrir lugares inesquecíveis.",
};

const dmsans = DM_Sans({
  subsets: ['latin'], weight: ['400', '600', '700'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${dmsans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
