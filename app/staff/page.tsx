"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Layout from "@/components/Layout";
import { motion, useScroll, useTransform } from "framer-motion";

const staffMembers = [
  {
    id: 1,
    name: "スタッフ01",
    role: "シニアスタイリスト",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    description:
      "10年以上の経験を持つシニアスタイリスト。ナチュラルなスタイリングが得意で、お客様の髪質や顔の形に合わせた提案が好評です。",
    specialties: ["ナチュラルスタイル", "ヘアケアアドバイス", "カラーリング"],
  },
  {
    id: 2,
    name: "スタッフ02",
    role: "カラーリスト",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    description:
      "トレンドを押さえたカラーリングが得意なカラーリスト。お客様の肌色や瞳の色を考慮し、最適な髪色を提案します。",
    specialties: ["トレンドカラー", "ハイライト", "バレイヤージュ"],
  },
  {
    id: 3,
    name: "スタッフ03",
    role: "アシスタント",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    description:
      "丁寧な接客と確かな技術で、多くのお客様から信頼を得ているアシスタント。日々の修行を重ね、着実にスキルアップしています。",
    specialties: ["シャンプー", "ヘッドスパ", "アシスタント業務"],
  },
];

interface StaffMemberProps {
  member: {
    id: number;
    name: string;
    role: string;
    image: string;
    description: string;
    specialties: string[];
  };
  index: number;
}

const StaffMember = ({ member, index }: StaffMemberProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col md:flex-row items-center gap-8 py-16"
      style={{ y, opacity }}
    >
      <div
        className={`w-full md:w-1/2 ${
          index % 2 === 0 ? "md:order-1" : "md:order-2"
        }`}
      >
        <div className="relative h-[60vh] overflow-hidden rounded-lg shadow-xl">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h2 className="text-3xl font-semibold mb-1">{member.name}</h2>
            <p className="text-gold text-xl">{member.role}</p>
          </div>
        </div>
      </div>
      <div
        className={`w-full md:w-1/2 ${
          index % 2 === 0 ? "md:order-2" : "md:order-1"
        }`}
      >
        <p className="text-xl text-gray-600 mb-6">{member.description}</p>
        <h3 className="text-2xl font-semibold mb-4 text-gold">専門分野</h3>
        <ul className="space-y-2">
          {member.specialties.map((specialty, index) => (
            <li key={index} className="flex items-center">
              <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
              <span className="text-lg">{specialty}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default function StaffPage() {
  return (
    <Layout>
      <div className="relative min-h-screen overflow-hidden bg-white">
        <div className="relative z-10">
          <div className="container mx-auto px-4 py-16">
            <motion.h1
              className="text-6xl font-serif tracking-tight mb-16 text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="block text-outline">OUR</span>
              <span className="block text-gradient">STAFF</span>
            </motion.h1>
            <div className="space-y-24">
              {staffMembers.map((member, index) => (
                <StaffMember key={member.id} member={member} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
