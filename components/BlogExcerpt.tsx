import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const blogPosts = [
  {
    id: 1,
    title: "春のヘアケア特集",
    excerpt:
      "春の乾燥対策や紫外線対策など、季節に合わせたヘアケア方法をご紹介します。",
    image:
      "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80",
    date: "2023-03-15",
  },
  {
    id: 2,
    title: "トレンドヘアカラー2023",
    excerpt:
      "今年注目のヘアカラーや、顔周りの印象を変えるハイライトテクニックをご紹介。",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    date: "2023-04-02",
  },
  {
    id: 3,
    title: "簡単アレンジテクニック",
    excerpt:
      "忙しい朝でも簡単にできるヘアアレンジ方法を、ステップバイステップで解説します。",
    image:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
    date: "2023-04-20",
  },
];

export default function BlogExcerpt() {
  return (
    <section className="diagonal-section bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-6xl font-serif tracking-tight mb-16 scroll-reveal">
          <span className="block text-gradient">BLOGS</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.title} className="block">
              <div
                key={post.title}
                className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-gold hover:text-gold-light transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-white/80 mb-2">{post.excerpt}</p>
                  <p className="text-white/60 text-sm">{post.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/blog" passHref>
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
    </section>
  );
}
