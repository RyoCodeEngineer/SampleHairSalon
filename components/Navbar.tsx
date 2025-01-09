"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  // モバイルメニューの開閉状態を管理するstate
  const [isOpen, setIsOpen] = useState(false);
  // スクロール状態を管理するstate
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    // スクロール位置を監視する関数
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // スクロールイベントリスナーを追加
    window.addEventListener("scroll", handleScroll);

    // コンポーネントのクリーンアップ時にイベントリスナーを解除
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-md`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* ロゴ */}
          <Link href="/" className="text-2xl font-serif tracking-widest group">
            <span className="relative inline-block">
              BEAUTY SALON
              {/* <motion.div
                className="absolute -left-8 top-1/2 -translate-y-1/2"
                initial={{ rotate: -45, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="text-gold-light transform group-hover:rotate-12 transition-transform"
                >
                  <path d="M6 9C6 9 8 3 12 3C16 3 18 9 18 9" />
                  <path d="M6 14C6 14 8 19 12 19C16 19 18 14 18 14" />
                </svg>
              </motion.div> */}
            </span>
          </Link>
          {/* デスクトップメニュー */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/menu" className="hover-cut text-sm tracking-wider">
              メニュー
            </Link>
            <Link href="/styles" className="hover-cut text-sm tracking-wider">
              スタイル
            </Link>
            <Link href="/staff" className="hover-cut text-sm tracking-wider">
              スタッフ
            </Link>
            <Link href="/blog" className="hover-cut text-sm tracking-wider">
              ブログ
            </Link>
            <Link href="/contact" passHref>
              <Button variant="outline" className="text-sm tracking-wider">
                お問い合わせ
              </Button>
            </Link>
          </div>
          {/* モバイルメニューボタン */}
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="メニュー"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </div>
      {/* モバイルメニュー */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link
                href="/menu"
                className="text-sm tracking-wider"
                onClick={toggleMenu}
              >
                メニュー
              </Link>
              <Link
                href="/styles"
                className="text-sm tracking-wider"
                onClick={toggleMenu}
              >
                スタイル
              </Link>
              <Link
                href="/staff"
                className="text-sm tracking-wider"
                onClick={toggleMenu}
              >
                スタッフ
              </Link>
              <Link
                href="/blog"
                className="text-sm tracking-wider"
                onClick={toggleMenu}
              >
                ブログ
              </Link>
              <Link href="/contact" passHref>
                <Button
                  variant="outline"
                  className="text-sm tracking-wider w-full"
                  onClick={toggleMenu}
                >
                  お問い合わせ
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
