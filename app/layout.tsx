import "./globals.css";
import { Noto_Sans_JP, Noto_Serif_JP, Dancing_Script } from "next/font/google";
import SplashScreen from "@/components/SplashScreen";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SampleHairSalon",
  description: "美容院のサイトのサンプルです。",
};

// フォントの設定
const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  display: "swap",
});

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  weight: ["200", "300", "400", "500", "600"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${notoSans.variable} ${notoSerif.variable} ${dancingScript.variable}`}
    >
      <body className="font-sans">
        {/* スプラッシュスクリーンコンポーネント */}
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
