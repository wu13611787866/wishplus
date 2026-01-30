import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '公司介绍',
  description: '了解惟实新聚（上海）高科技有限公司的发展历程与企业文化',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Banner */}
      <div className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/about-banner.png"
            alt="公司介绍Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-blue-700/90"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-lg md:text-xl tracking-[0.2em] mb-4 text-blue-200">
            惟实求真，聚新致远
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            公司介绍
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            About Us
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  惟实新聚（上海）高科技有限公司
                </h2>
                <div className="w-20 h-1 bg-blue-600 mb-8"></div>
                <div className="prose prose-lg text-gray-600 leading-relaxed">
                  <p className="text-lg mb-6">
                    惟实新聚（上海）高科技有限公司，是一家专注于<strong>工业仪表、工业控制系统一体化解决方案</strong>的高新技术企业。
                    公司秉承<strong>"惟实求真，聚新致远"</strong>的核心精神，致力于为石油化工、电力能源、环保水处理及高端制造等领域，
                    提供从精准选型、可靠集成到专业服务的全链条价值。
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/about-image1.png"
                  alt="公司概况"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Advantages */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
                <Image
                  src="/about-image2.png"
                  alt="核心优势"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    核心优势
                  </h2>
                  <p className="text-xl text-blue-600 font-medium">
                    源于严苛体系的专业信任
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed mb-8">
                    <p className="text-lg mb-6">
                      公司的核心团队脱胎于对安全与可靠性有极致要求的<strong>国家级重大战略工程体系</strong>，
                      深谙复杂工业环境下的系统逻辑与质量精髓。我们将这份沉淀于基因中的<strong>"零缺陷"</strong>文化，
                      转化为面向现代工业的服务准则。
                    </p>
                    <p className="text-lg">
                      我们不仅是产品的提供者，更是系统化价值的整合者。公司构建了以<strong>全生命周期项目管理</strong>与<strong>严苛供应链管控</strong>为核心的独特运营体系。
                      通过成熟的项目管理方法论，确保从需求对接到交付验收的每一个环节都在进度、成本与质量上受控；
                      通过建立<strong>三级供应商资源池</strong>与<strong>四维评估标准</strong>，确保所集成的每一个组件都源自顶尖品牌与可靠渠道，
                      实现从源头到现场的品质保障。
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">零缺陷文化</h3>
                      <p className="text-sm text-gray-600">源于国家级重大战略工程体系</p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">全生命周期管理</h3>
                      <p className="text-sm text-gray-600">从需求到交付全程受控</p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">严苛供应链管控</h3>
                      <p className="text-sm text-gray-600">三级资源池 · 四维评估标准</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    解决方案
                  </h2>
                  <p className="text-xl text-blue-600 font-medium">
                    从精密部件到智能系统
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-8 md:p-10 text-white mb-8">
                  <div className="prose prose-lg max-w-none leading-relaxed">
                    <p className="text-lg mb-6">
                      我们提供涵盖<strong>压力、温度、流量、物位</strong>等全系列智能仪表，以及高性能控制阀与执行机构的专业选型与成套服务。
                    </p>
                    <p className="text-lg">
                      同时，我们更专注于控制系统深度集成，具备从<strong>PLC/DCS控制柜</strong>的精细化设计组装，
                      到<strong>SCADA/HMI监控系统</strong>定制开发的全方位能力，旨在为客户构建稳定、高效、可视的工业测控神经中枢。
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="bg-gray-50 p-4 rounded-xl text-center hover:bg-blue-50 transition-colors">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">压力仪表</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl text-center hover:bg-blue-50 transition-colors">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">温度仪表</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl text-center hover:bg-blue-50 transition-colors">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">流量仪表</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl text-center hover:bg-blue-50 transition-colors">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">物位仪表</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl text-center hover:bg-blue-50 transition-colors">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">控制系统</p>
                  </div>
                </div>
              </div>

              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/about-image3.png"
                  alt="解决方案"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision */}
      <div className="py-20 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              愿景：成为您最可信赖的合作伙伴
            </h2>
            <div className="w-20 h-1 bg-blue-300 mx-auto mb-8"></div>
            <div className="prose prose-lg mx-auto text-blue-100 leading-relaxed mb-8">
              <p className="text-lg mb-6">
                立足于上海，服务于全国。惟实新聚以<strong>务实</strong>为根基，以<strong>创新聚能</strong>为路径，
                致力于成为工业自动化升级道路上，客户首选的深度合作伙伴。
              </p>
              <p className="text-lg">
                我们交付的不仅是一套设备，更是一份基于专业体系的<strong>可控性、可靠性与省心的体验</strong>。
              </p>
            </div>
            <div className="mt-12 inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-12 py-8">
              <p className="text-2xl font-bold mb-2">诚邀携手，共创未来</p>
              <p className="text-blue-200">Looking Forward to Cooperation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Industries */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              服务领域
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <svg className="w-12 h-12 text-blue-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                <p className="font-semibold text-gray-900">石油化工</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <svg className="w-12 h-12 text-blue-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <p className="font-semibold text-gray-900">电力能源</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <svg className="w-12 h-12 text-blue-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <p className="font-semibold text-gray-900">环保水处理</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <svg className="w-12 h-12 text-blue-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="font-semibold text-gray-900">高端制造</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
