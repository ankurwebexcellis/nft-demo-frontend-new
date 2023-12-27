import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.css";
import "react-loading-skeleton/dist/skeleton.css";
import "./globals.css";
import { Inter } from "next/font/google";

//  Components
import Header from "@/components/Header";
import Sidebar from "@/components/sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NFT HUB",
  description:
    "A web based product, created to display NFT collection and attributes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="page-wrapper">
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  );
}
