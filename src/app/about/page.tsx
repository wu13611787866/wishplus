import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '公司介绍',
  description: '了解惟实新聚（上海）高科技有限公司的发展历程与企业文化',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Banner */}
      <div className="relative h-96 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            公司介绍
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            About Us
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                惟实新聚（上海）高科技有限公司
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed">
                惟实新聚（上海）高科技有限公司是一家专注于仪表类产品研发、生产与销售的高新技术企业。
                公司秉承"惟实创新，汇聚智慧"的企业理念，致力于为客户提供高品质、高精度的测量仪表解决方案。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-gray-900">企业愿景</h3>
                <p className="text-gray-600 leading-relaxed">
                  成为国内领先的仪表产品解决方案提供商，以技术创新引领行业发展，
                  为客户创造更大价值。
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-gray-900">企业使命</h3>
                <p className="text-gray-600 leading-relaxed">
                  通过持续的技术创新和优质服务，为客户提供精准可靠的测量仪表产品，
                  助力各行业实现智能化升级。
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-gray-900">核心价值观</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-xl">诚</span>
                  </div>
                  <p className="font-semibold text-gray-900">诚信为本</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-xl">创</span>
                  </div>
                  <p className="font-semibold text-gray-900">创新驱动</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-xl">质</span>
                  </div>
                  <p className="font-semibold text-gray-900">品质至上</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-xl">合</span>
                  </div>
                  <p className="font-semibold text-gray-900">合作共赢</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Development History */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              发展历程
            </h2>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>

              <div className="space-y-12">
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-lg font-bold text-blue-600 mb-2">公司成立</h3>
                      <p className="text-gray-600">
                        惟实新聚（上海）高科技有限公司正式成立，开启仪表产品研发之旅
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>

                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                  <div className="w-1/2 pl-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-lg font-bold text-blue-600 mb-2">技术突破</h3>
                      <p className="text-gray-600">
                        成功研发多款高精度仪表产品，获得多项技术专利
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-lg font-bold text-blue-600 mb-2">市场拓展</h3>
                      <p className="text-gray-600">
                        产品覆盖全国多个省市，建立完善的销售与服务网络
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>

                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                  <div className="w-1/2 pl-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-lg font-bold text-blue-600 mb-2">持续创新</h3>
                      <p className="text-gray-600">
                        持续投入研发，探索智能化仪表技术，引领行业未来
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team & Culture */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              团队与文化
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">专业团队</h3>
                <p className="text-gray-600">
                  汇聚行业精英，拥有丰富的仪表研发与生产经验
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">创新文化</h3>
                <p className="text-gray-600">
                  鼓励技术创新与突破，持续推动产品升级换代
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">客户导向</h3>
                <p className="text-gray-600">
                  以客户需求为中心，提供定制化解决方案
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
