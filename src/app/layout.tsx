import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BackgroundBeams } from "@/ui/effects/background-beams";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XTC Dev",
  description: "Advanced Web development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark `}>
        <BackgroundBeams className="h-screen w-screen" />
        <main className="min-h-screen w-screen">{children}</main>
      </body>
    </html>
  );
}
