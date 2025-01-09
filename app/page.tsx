import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import LatestStyles from "@/components/LatestStyles";
import MenuExcerpt from "@/components/MenuExcerpt";
import StaffIntro from "@/components/StaffIntro";
import BlogExcerpt from "@/components/BlogExcerpt";

export default function Home() {
  return (
    <Layout>
      <main className="pt-0">
        {/* ヒーローセクション：ウェブサイトの主要な視覚的要素 */}
        <Hero />

        {/* 最新のヘアスタイルセクション */}
        <LatestStyles />

        {/* メニューの抜粋セクション */}
        <MenuExcerpt />

        {/* スタッフ紹介セクション */}
        <StaffIntro />

        {/* ブログ記事の抜粋セクション */}
        <BlogExcerpt />

        {/* アクセス情報セクション */}
        <section className="diagonal-section bg-white text-black">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-6xl font-serif tracking-tight mb-16 scroll-reveal">
                {/* <span className="block text-outline">ACCESS</span> */}
                <span className="block text-gradient">ACCESS</span>
              </h2>
              <div className="grid lg:grid-cols-2 gap-8 items-start h-auto lg:h-[400px]">
                {/* Google Mapsの埋め込み */}
                <div className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl scroll-reveal h-[300px] lg:h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8280303808788!2d139.7671248!3d35.6812362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1654567890123!5m2!1sja!2sjp&zoom=15"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                {/* サロン情報 */}
                <div className="bg-neutral-100 p-6 rounded-lg shadow-lg space-y-4 transition-all duration-300 hover:shadow-xl scroll-reveal h-auto lg:h-full">
                  <h3 className="text-2xl font-semibold text-gold-dark">
                    サロン情報
                  </h3>
                  <p className="text-lg">
                    <span className="font-medium">住所：</span>〒999-9999
                    東京都千代田区丸の内１
                  </p>
                  <p className="text-lg">
                    <span className="font-medium">TEL：</span>99-9999-9999
                  </p>
                  <p className="text-lg">
                    <span className="font-medium">営業時間：</span>
                    <br />
                    平日 10:00-20:00
                    <br />
                    土日祝 9:00-19:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
