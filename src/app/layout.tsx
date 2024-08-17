import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BackgroundBeams } from "@/ui/effects/background-beams";
import TopNav from "./_components/topnav";
import BottomNav from "./_components/bottomnav";
import { StarsBackground } from "@/ui/effects/stars-background";
import { ShootingStars } from "@/ui/effects/shooting-stars";
import { World } from "@/ui/effects/globe";
import {PHProvider} from "./_analytics/providers"
import dynamic from "next/dynamic";

const PostHogPageView = dynamic(() => import("./_analytics/PostHogPageView"), {
  ssr: false,
});

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
      <PHProvider>
      <body className={`${inter.className} dark relative`}>
        <PostHogPageView/>
        <div className="relative h-screen grid grid-rows-[auto,1fr]">
          <TopNav />
          <div className="relative min-h-full overflow-y-scroll">
            <StarsBackground className="h-screen fixed" starDensity={0.0003} />
            <ShootingStars
              maxDelay={4300}
              className="w-screen h-screen fixed"
            />
            <main className="relative">{children}</main>
          </div>
          {/* <BottomNav /> */}
        </div>
      </body>
      </PHProvider>
    </html>
  );
}
