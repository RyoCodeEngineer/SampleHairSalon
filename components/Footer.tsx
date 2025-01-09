import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 bg-neutral-950 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-lg font-serif tracking-wider mb-6">
              BEAUTY SALON
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              自然な美しさを引き出す、
              <br />
              あなたらしさを大切にするヘアサロン
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium tracking-wider mb-6">MENU</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/menu"
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  メニュー
                </Link>
              </li>
              <li>
                <Link
                  href="/styles"
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  スタイル
                </Link>
              </li>
              <li>
                <Link
                  href="/staff"
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  スタッフ
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  ブログ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium tracking-wider mb-6">
              INFORMATION
            </h4>
            <ul className="space-y-4">
              <li className="text-sm text-neutral-400">
                〒999-9999
                <br />
                東京都千代田区丸の内１
              </li>
              <li className="text-sm text-neutral-400">TEL: 99-9999-9999</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium tracking-wider mb-6">HOURS</h4>
            <ul className="space-y-4">
              <li className="text-sm text-neutral-400">
                平日: 10:00 - 20:00
                <br />
                土日祝: 9:00 - 19:00
              </li>
              <li className="text-sm text-neutral-400">定休日: 毎週月曜日</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-neutral-800 text-center">
          <p className="text-xs text-neutral-400">
            &copy; 2024 BEAUTY SALON. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
