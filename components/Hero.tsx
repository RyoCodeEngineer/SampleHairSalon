"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// ヒーローセクションで使用する画像の配列
const images = [
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
];

export default function Hero() {
  // 現在表示中の画像のインデックスを管理するstate
  const [currentImage, setCurrentImage] = useState(0);
  // スクロール位置を管理するstate
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // 5秒ごとに画像を切り替えるインターバルを設定
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    // スクロール位置を監視する関数
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // スクロールイベントリスナーを追加
    window.addEventListener("scroll", handleScroll);

    // コンポーネントのクリーンアップ時にイベントリスナーとインターバルを解除
    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        {images.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={`Hero image ${index + 1}`}
            fill
            priority={index === 0}
            className="object-cover transition-opacity duration-1000 image-mask"
            style={{
              opacity: index === currentImage ? 1 : 0,
              transform: `scale(${1 + scrollY * 0.0005}) translate3d(0, ${
                scrollY * 0.2
              }px, 0)`,
            }}
          />
        ))}
      </div>
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />

      {/* ヒーローコンテンツ */}
      <div className="relative min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center text-white space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-7xl md:text-8xl xl:text-9xl font-serif tracking-tight">
              <span className="block text-gradient">BEAUTY</span>
              <span className="block text-gradient">SALON</span>
            </h1>
            <p className="text-xl tracking-wider max-w-lg mx-auto text-white">
              自然な美しさを引き出す、あなたらしさを大切にするヘアサロン
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/contact" passHref>
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white hover:bg-white/20 transition-all duration-300"
                >
                  お問い合わせ
                </Button>
              </Link>
              <Link href="/menu" passHref>
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white hover:bg-white/20 transition-all duration-300"
                >
                  メニューを見る
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
