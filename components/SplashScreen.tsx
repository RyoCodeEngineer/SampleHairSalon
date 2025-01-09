"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function SplashScreen() {
  // スプラッシュスクリーンの表示状態を管理
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // 内部ナビゲーションかどうかをチェック
    const isInternalNavigation = sessionStorage.getItem("currentPath") !== null;
    const currentPath = sessionStorage.getItem("currentPath");

    // 現在のパスを更新
    sessionStorage.setItem("currentPath", pathname);

    // 初回訪問時またはページリロード時のみスプラッシュスクリーンを表示し、内部ナビゲーション時は表示しない
    if (!isInternalNavigation || currentPath === pathname) {
      const hasVisited = localStorage.getItem("hasVisited");
      if (!hasVisited) {
        localStorage.setItem("hasVisited", "true");
      }
      setIsVisible(true);

      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-neutral-950 to-neutral-900 flex items-center justify-center"
        >
          <div className="relative max-w-2xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* メインテキスト */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-center"
              >
                <div className="handwriting text-5xl sm:text-7xl text-white/90 mb-4">
                  Good morning,
                </div>
                <div className="handwriting text-3xl sm:text-5xl text-gold-light">
                  A brand new me.
                </div>
              </motion.div>

              {/* 装飾要素 */}
              <motion.div
                className="absolute -left-8 -bottom-8 z-10"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="80"
                    height="80"
                    rx="40"
                    fill="url(#rectangleGradient)"
                    fillOpacity="0.1"
                  />
                  <defs>
                    <linearGradient
                      id="rectangleGradient"
                      x1="0"
                      y1="0"
                      x2="80"
                      y2="80"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#C6A57A" />
                      <stop offset="1" stopColor="#E2C9A5" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              <motion.div
                className="absolute top-1/4 right-1/4 z-10"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.5 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="20" r="20" fill="url(#circleGradient)" />
                  <defs>
                    <linearGradient
                      id="circleGradient"
                      x1="0"
                      y1="0"
                      x2="40"
                      y2="40"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#C6A57A" />
                      <stop offset="1" stopColor="#E2C9A5" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              <motion.div
                className="absolute -right-12 -bottom-12 z-10"
                initial={{ rotate: 45, scale: 0, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* <motion.path
                    d="M60 10C32.4 10 10 32.4 10 60C10 87.6 32.4 110 60 110C87.6 110 110 87.6 110 60C110 32.4 87.6 10 60 10Z"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1.2 }}
                  /> */}
                  <motion.path
                    d="M60 30C43.4 30 30 43.4 30 60C30 76.6 43.4 90 60 90C76.6 90 90 76.6 90 60C90 43.4 76.6 30 60 30Z"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 1.5 }}
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="10"
                      y1="10"
                      x2="110"
                      y2="110"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#C6A57A" />
                      <stop offset="1" stopColor="#E2C9A5" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
