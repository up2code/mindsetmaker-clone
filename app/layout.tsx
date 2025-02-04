import type { Metadata } from "next";
import { Sarabun } from "next/font/google";
import "./globals.css";
import NavBar from "./(components)/NavBar";
import Footer from "./(components)/Footer";

const sarabun = Sarabun({
  weight: ["500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Mindset Maker - “Happy life Happy Skills” สร้างสุขได้ ในสไตล์ของเราเอง",
  description:
    "มาร่วมเรียนรู้และเข้าใจจิตวิทยาเชิงบวกแบบง่าย ๆ  ผ่านเครื่องมือ สื่อละครสั้น  Animation และอื่น ๆ อีกมากมายได้เลย !  อย่ารอช้าแวะมาเติมทักษะทางใจไปด้วยกัน",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sarabun.className} antialiased`}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
