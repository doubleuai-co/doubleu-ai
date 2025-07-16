import type { Metadata } from "next";
import { Montserrat, Heebo, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin"],
});

// const satoshi = Satoshi({
//   variable: "--font-satoshi",
//   subsets: ["latin"],
//   weight: ["400", "500", "700"], // Available weights
// });

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Available weights
});

export const metadata: Metadata = {
  title: "DoubleU AI",
  description: "AI Agents That Think, Reason, Respond & Act.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
      {/* <body className={`${montserrat.variable} ${heebo.variable} ${inter.variable} antialiased`}> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
