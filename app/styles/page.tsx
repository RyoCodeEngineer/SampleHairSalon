"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { motion, AnimatePresence } from "framer-motion";

const hairstyles = [
  {
    id: 1,
    name: "ナチュラルボブ",
    image:
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    length: "ミディアム",
    type: "ストレート",
  },
  {
    id: 2,
    name: "ゆるふわパーマ",
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
    length: "ロング",
    type: "パーマ",
  },
  {
    id: 3,
    name: "ショートレイヤー",
    image:
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    length: "ショート",
    type: "レイヤー",
  },
  {
    id: 4,
    name: "エレガントアップ",
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    length: "ロング",
    type: "アップスタイル",
  },
  {
    id: 5,
    name: "クールショート",
    image:
      "https://images.unsplash.com/photo-1552673304-23f6ad21aada?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    length: "ショート",
    type: "ストレート",
  },
  {
    id: 6,
    name: "ロングレイヤー",
    image:
      "https://images.unsplash.com/photo-1523263685509-57c1d050d19b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    length: "ロング",
    type: "レイヤー",
  },
];

export default function StylesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [lengthFilter, setLengthFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [filteredStyles, setFilteredStyles] = useState([]);

  const filteredHairstyles = useMemo(() => {
    return hairstyles.filter((style) => {
      const matchesSearch = style.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesLength =
        lengthFilter === "all" || style.length === lengthFilter;
      const matchesType = typeFilter === "all" || style.type === typeFilter;
      return matchesSearch && matchesLength && matchesType;
    });
  }, [searchTerm, lengthFilter, typeFilter]);

  useEffect(() => {
    setFilteredStyles(filteredHairstyles);
  }, [filteredHairstyles]);

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
          <span className="block text-gradient">STYLES</span>
        </motion.h1>
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <div>
            <Label htmlFor="search">スタイル検索</Label>
            <Input
              id="search"
              type="text"
              placeholder="スタイル名を入力"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-gold focus:ring-gold"
            />
          </div>
          <div>
            <Label htmlFor="length">長さ</Label>
            <Select value={lengthFilter} onValueChange={setLengthFilter}>
              <SelectTrigger
                id="length"
                className="border-gold focus:ring-gold"
              >
                <SelectValue placeholder="長さを選択" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">すべて</SelectItem>
                <SelectItem value="ショート">ショート</SelectItem>
                <SelectItem value="ミディアム">ミディアム</SelectItem>
                <SelectItem value="ロング">ロング</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="type">タイプ</Label>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger id="type" className="border-gold focus:ring-gold">
                <SelectValue placeholder="タイプを選択" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">すべて</SelectItem>
                <SelectItem value="ストレート">ストレート</SelectItem>
                <SelectItem value="パーマ">パーマ</SelectItem>
                <SelectItem value="レイヤー">レイヤー</SelectItem>
                <SelectItem value="アップスタイル">アップスタイル</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <AnimatePresence>
          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {filteredStyles.map((style, index) => (
              <motion.div
                key={style.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <div className="relative h-80">
                  <Image
                    src={style.image}
                    alt={style.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h2 className="text-2xl font-semibold mb-2">{style.name}</h2>
                  <p className="text-sm">長さ: {style.length}</p>
                  <p className="text-sm">タイプ: {style.type}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </Layout>
  );
}
