"use client";

import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const menuCategories = [
  {
    title: "CUT",
    titleJa: "カット",
    items: [
      { name: "カット", price: "¥4,400" },
      { name: "スクールカット", price: "¥3,300" },
    ],
  },
  {
    title: "COLOR",
    titleJa: "カラー",
    items: [
      { name: "シングルカラー", price: "¥4,950〜" },
      { name: "イルミナカラー", price: "¥7,150〜" },
      { name: "オーガニックカラー", price: "¥6,600〜" },
      { name: "ホイルウィービング5枚〜10枚", price: "¥3,300〜" },
      { name: "バレイヤージュカラー", price: "¥17,600" },
      { name: "グラデーショングラデーションカラー", price: "¥14,500" },
    ],
  },
  {
    title: "PERM",
    titleJa: "パーマ",
    items: [
      { name: "ナチュラルウェーブ", price: "¥7,150" },
      { name: "デジタルパーマ", price: "¥13,200" },
      { name: "スパイラルパーマ", price: "¥16,500" },
      { name: "ツイストパーマ", price: "¥16,500" },
      { name: "ツイストスパイラルパーマ", price: "¥16,500" },
    ],
  },
];

export default function MenuPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <div className="bg-neutral-50 text-black min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-6xl font-serif tracking-tight mb-16 text-center">
            <span className="block text-outline">OUR</span>
            <span className="block text-gradient">MENU</span>
          </h1>

          <div className="max-w-5xl mx-auto">
            <div className="grid gap-24">
              {menuCategories.map((category) => (
                <div key={category.title} className="scroll-reveal">
                  <h2 className="text-4xl font-bold tracking-wider mb-12 text-gold">
                    {category.title}
                  </h2>
                  <div className="space-y-6">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex justify-between items-center py-3 border-b border-gray-200"
                      >
                        <span className="text-base tracking-wider">
                          {item.name}
                        </span>
                        <span className="text-base font-medium">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
