import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jordi's Winehouse",
  description:
    "This dashboard will be used by the marketing team to monitor and analyze the performance of individual products. The focus is on building a user-friendly interface with robust data visualization capabilities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
