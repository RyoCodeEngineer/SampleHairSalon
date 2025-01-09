"use client";

import { useEffect } from "react";
import Image from "next/image";

// スタッフ情報の配列
const staff = [
  {
    name: "スタッフ01",
    role: "シニアスタイリスト",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    description:
      "10年以上のキャリアを持つシニアスタイリスト。ナチュラルな美しさを引き出すカットが得意。",
  },
  {
    name: "スタッフ02",
    role: "カラーリスト",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    description:
      "トレンドと似合わせの両立を得意とするカラーリスト。一人一人に合わせた提案を心がけています。",
  },
  {
    name: "スタッフ03",
    role: "アシスタント",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    description:
      "丁寧な施術とコミュニケーションを大切にしています。お客様の「なりたい」を実現するお手伝いをさせていただきます。",
  },
];

export default function StaffIntro() {
  useEffect(() => {
    // Intersection Observerの設定
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

    // 'scroll-reveal'クラスを持つ要素を監視
    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => observer.observe(el));

    // コンポーネントのクリーンアップ時にObserverを解除
    return () => observer.disconnect();
  }, []);

  return (
    <section className="diagonal-section bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-serif tracking-tight mb-16 scroll-reveal">
            <span className="block text-gradient">STAFF</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {staff.map((member, index) => (
              <div
                key={member.name}
                className="scroll-reveal group"
                style={{ transitionDelay: `${0.2 * (index + 1)}s` }}
              >
                {/* スタッフの画像 */}
                <div className="relative aspect-square mb-6 overflow-hidden rounded-full border-2 border-gold/30 transition-all group-hover:border-gold">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                {/* スタッフの情報 */}
                <div className="text-center">
                  <h3 className="text-xl font-medium tracking-wider mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gold mb-4">{member.role}</p>
                  <p className="text-neutral-600 leading-relaxed line-clamp-3">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
