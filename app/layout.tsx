import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/shared/Nav";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FranChain",
  description: "Franchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
