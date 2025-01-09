import Link from "next/link";
import { Button } from "@/components/ui/Button";
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

export default function MenuExcerpt() {
  return (
    <section className="diagonal-section bg-neutral-950 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-serif tracking-tight mb-16 scroll-reveal">
            <span className="block text-gradient">MENU</span>
          </h2>

          <div className="grid gap-16 md:grid-cols-3">
            {menuCategories.map((category) => (
              <div key={category.title} className="space-y-6 scroll-reveal">
                <h3 className="text-3xl font-bold tracking-wider mb-8">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.items.slice(0, 3).map((item) => (
                    <div
                      key={item.name}
                      className="flex justify-between items-center py-2 border-b border-white/10"
                    >
                      <span className="text-sm tracking-wider">
                        {item.name}
                      </span>
                      <span className="text-sm font-medium">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/menu" className="inline-block">
              <Button
                variant="outline"
                size="lg"
                className="scroll-reveal bg-black border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 group relative overflow-hidden"
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
