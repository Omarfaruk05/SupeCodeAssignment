/* eslint-disable react/no-children-prop */

import { Inter } from "next/font/google";
import "./globals.css";
import Main from "@/components/layout/Main";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Main children={children} />
      </body>
    </html>
  );
}
