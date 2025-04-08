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

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={NeueHaasUnica.className}>
      <body>{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
