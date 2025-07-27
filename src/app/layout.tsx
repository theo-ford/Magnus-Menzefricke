import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./globals.css";
import localFont from "next/font/local";

const NeueHaasUnica = localFont({
  src: [
    {
      path: "./fonts/NeueHaasUnicaW1G-Regular.woff2",
      weight: "normal",
      style: "normal"
    },
    {
      path: "./fonts/NeueHaasUnicaW1G-Bold.woff2",
      weight: "bold",
      style: "normal"
    }
  ]
});

export const metadata = {
  title: "Magnus Menzefricke",
  description: "Magnus Menzefricke Portfolio Site",
  icons: {
    icon: "/favicon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={NeueHaasUnica.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="cursor-none">{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
