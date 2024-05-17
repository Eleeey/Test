import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/shared/Nav";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "100", "200", "300", "500", "700"],
});

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
      <body className={dmSans.className}>
        <Nav/>
        {children}
      </body>
    </html>
  );
}
