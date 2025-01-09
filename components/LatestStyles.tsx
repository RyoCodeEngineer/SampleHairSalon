"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const styles = [
  {
    name: "エレガントアップ",
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  },
  {
    name: "ナチュラルボブ",
    image:
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  },
  {
    name: "ゆるふわパーマ",
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
  },
  {
    name: "モダンショート",
    image:
      "https://images.unsplash.com/photo-1552673304-23f6ad21aada?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  },
];

export default function LatestStyles() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

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
    <section
      ref={sectionRef}
      className="py-24 diagonal-section bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* <motion.div
            className="flex flex-col md:flex-row justify-between items-end mb-16"
            style={{ y }}
          >
            <h2 className="text-6xl font-serif tracking-tight scroll-reveal">
              <span className="block text-gradient font-bold">STYLES</span>
            </h2>
            <p
              className="text-lg text-gray-600 max-w-md mt-4 md:mt-0 scroll-reveal"
              style={{ transitionDelay: "0.2s" }}
            >
              トレンドを取り入れながら、あなたらしさを最大限に引き出すスタイルをご提案します。
            </p>
          </motion.div> */}

          <h2 className="text-6xl font-serif tracking-tight mb-16 scroll-reveal">
            <span className="block text-gradient">STYLES</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {styles.map((style, index) => (
              <motion.div
                key={style.name}
                className="scroll-reveal group relative overflow-hidden"
                style={{ transitionDelay: `${0.2 * (index + 1)}s` }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative aspect-[3/4] mb-4 overflow-hidden">
                  <div className="absolute inset-0 bg-gold-light/20 transform rotate-0 transition-transform duration-500 ease-out group-hover:rotate-6" />
                  <Image
                    src={style.image}
                    alt={style.name}
                    fill
                    className="object-cover transform rotate-0 transition-all duration-500 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-2xl font-medium tracking-wider">
                      {style.name}
                    </h3>
                  </div>
                </div>
                <motion.div
                  className="h-1 w-full bg-gold-light/30 rounded-full overflow-hidden"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="h-full bg-gold w-0 group-hover:w-full transition-all duration-500 ease-out" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/styles" passHref>
              <Button
                variant="outline"
                size="lg"
                className="scroll-reveal border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 group relative overflow-hidden"
              >
                <span className="relative z-10 font-serif">VIEW ALL</span>
                <span className="absolute inset-0 bg-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
