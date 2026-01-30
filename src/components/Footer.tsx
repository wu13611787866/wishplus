import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="惟实新聚 Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">惟实新聚</h3>
                <p className="text-sm text-gray-400">Weishi Xinju</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4 max-w-md">
              惟实新聚（上海）高科技有限公司专注于仪表类产品的研发、生产与销售，
              致力于为客户提供高品质、高精度的测量仪表解决方案。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4">快速导航</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  公司介绍
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-blue-400 transition-colors">
                  产品与服务
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-blue-400 transition-colors">
                  行业资讯
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4">联系我们</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  联系我们
                </Link>
              </li>
              <li>
                <Link href="/message" className="hover:text-blue-400 transition-colors">
                  在线留言
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} 惟实新聚（上海）高科技有限公司 版权所有</p>
        </div>
      </div>
    </footer>
  );
}
