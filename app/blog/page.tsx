"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "春のヘアケア特集",
    excerpt:
      "春の乾燥対策や紫外線対策など、季節に合わせたヘアケア方法をご紹介します。",
    image:
      "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80",
    date: "2023-03-15",
    category: "ヘアケア",
  },
  {
    id: 2,
    title: "トレンドヘアカラー2023",
    excerpt:
      "今年注目のヘアカラーや、顔周りの印象を変えるハイライトテクニックをご紹介。",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    date: "2023-04-02",
    category: "トレンド",
  },
  {
    id: 3,
    title: "簡単アレンジテクニック",
    excerpt:
      "忙しい朝でも簡単にできるヘアアレンジ方法を、ステップバイステップで解説します。",
    image:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
    date: "2023-04-20",
    category: "ヘアアレンジ",
  },
  {
    id: 4,
    title: "髪質改善トリートメントの効果",
    excerpt:
      "話題の髪質改善トリートメントについて、その効果と持続性をご説明します。",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    date: "2023-05-05",
    category: "トリートメント",
  },
  {
    id: 5,
    title: "美容師が教える正しいブローの仕方",
    excerpt:
      "プロの美容師が教える、髪のダメージを抑えつつ、綺麗に仕上げるブローテクニック。",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
    date: "2023-05-18",
    category: "テクニック",
  },
  {
    id: 6,
    title: "夏に向けたヘアケアのポイント",
    excerpt:
      "夏の強い紫外線や汗、海水などから髪を守るための効果的なヘアケア方法をご紹介します。",
    image:
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    date: "2023-06-01",
    category: "ヘアケア",
  },
];

const BlogPost = ({ post }) => (
  <motion.div
    layout
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <div className="relative h-48 md:h-64">
      <Image src={post.image} alt={post.title} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <span className="inline-block bg-gold text-white text-xs px-2 py-1 rounded-full mb-2">
          {post.category}
        </span>
        <h2 className="text-xl font-semibold text-white">{post.title}</h2>
      </div>
    </div>
    <div className="p-4">
      <p className="text-gray-600 mb-4">{post.excerpt}</p>
      <div className="flex justify-between items-center">
        <span className="text-gray-500 text-sm">{post.date}</span>
        <Link href="/blog" className="text-gold hover:underline">
          続きを読む
        </Link>
      </div>
    </div>
  </motion.div>
);

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const categories = [
    "all",
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          className="text-6xl font-serif tracking-tight mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block text-outline">OUR</span>
          <span className="block text-gradient">BLOG</span>
        </motion.h1>
        <div className="mb-8 flex flex-wrap justify-center gap-2 px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 rounded-full text-sm transition-colors duration-300 ${
                selectedCategory === category
                  ? "bg-gold text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category === "all" ? "すべて" : category}
            </button>
          ))}
        </div>
        <AnimatePresence>
          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            layout
          >
            {filteredPosts.map((post) => (
              <BlogPost key={post.id} post={post} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </Layout>
  );
}
