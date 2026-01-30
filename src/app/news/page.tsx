import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '行业资讯',
  description: '仪表行业最新资讯与动态，了解行业发展趋势',
};

export default function NewsPage() {
  const news = [
    {
      id: 1,
      title: '智能化仪表成为行业发展新趋势',
      summary: '随着工业4.0的推进，智能化仪表正在成为各行业升级的重要方向，为生产过程提供更精准的数据支持。',
      date: '2024-01-15',
      category: '行业动态',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      id: 2,
      title: '高精度测量仪表技术突破',
      summary: '最新研发的智能传感器技术，将测量精度提升至新高度，满足高端制造业的严苛要求。',
      date: '2024-01-10',
      category: '技术突破',
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      id: 3,
      title: '仪表行业标准化进程加速',
      summary: '国家相关部门出台多项标准，推动仪表行业规范化发展，提升产品质量与可靠性。',
      date: '2024-01-05',
      category: '政策法规',
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    {
      id: 4,
      title: '数字化仪表助力智能制造',
      summary: '数字化仪表与传统工业深度融合，实现生产过程的实时监测与智能调控。',
      date: '2024-01-03',
      category: '应用案例',
      image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    },
    {
      id: 5,
      title: '新能源领域仪表需求快速增长',
      summary: '随着新能源汽车、光伏等新能源产业的快速发展，对高精度仪表的需求日益增长。',
      date: '2023-12-28',
      category: '市场分析',
      image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    },
    {
      id: 6,
      title: '仪表企业加强自主研发能力',
      summary: '面对激烈的市场竞争，仪表企业纷纷加大研发投入，提升自主创新能力。',
      date: '2023-12-20',
      category: '企业动态',
      image: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Banner */}
      <div className="relative h-96 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            行业资讯
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Industry News
          </p>
        </div>
      </div>

      {/* News List */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Featured News */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">推荐资讯</h2>
              <Link
                href={`/news/${news[0].id}`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="md:flex">
                  <div
                    className="md:w-1/2 h-64 md:h-auto relative"
                    style={{ background: news[0].image }}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-900">
                      {news[0].category}
                    </span>
                  </div>
                  <div className="p-8 md:w-1/2 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      <time>{news[0].date}</time>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {news[0].title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {news[0].summary}
                    </p>
                    <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                      <span>阅读更多</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* News Grid */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">最新资讯</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {news.slice(1).map((item) => (
                  <Link
                    key={item.id}
                    href={`/news/${item.id}`}
                    className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <div
                      className="h-48 relative"
                      style={{ background: item.image }}
                    >
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                      <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-900">
                        {item.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <Calendar className="w-4 h-4" />
                        <time>{item.date}</time>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {item.summary}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-2">
                <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-lg bg-blue-600 text-white font-medium">1</button>
                <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-700">
                  2
                </button>
                <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-700">
                  3
                </button>
                <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
