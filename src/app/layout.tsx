import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "АвтоСервис Волгоград - профессиональный ремонт автомобилей",
  description: "Качественный ремонт автомобилей в Волгограде. Кузовной ремонт, техническое обслуживание, диагностика двигателя, ремонт подвески. Опытные мастера, гарантия на все работы. Запись на ремонт: 8-800-333-44-55",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
