import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: '产品与服务',
  description: '惟实新聚提供专业的仪表产品与服务解决方案',
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Product 1: 配文1在左侧留白区域 */}
      <div className="min-h-[600px] bg-gradient-to-br from-blue-900 to-blue-700 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2 text-white">
              <h2 className="text-sm tracking-widest mb-2 text-blue-200">PRODUCTS & SERVICES</h2>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                压力测量仪表
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Pressure Measurement Instruments
              </p>
              <div className="space-y-4 text-blue-50 leading-relaxed">
                <p>
                  提供高精度压力变送器、压力开关、压力表等产品，广泛应用于石油、化工、电力、冶金等行业。
                </p>
                <p>
                  产品具备高稳定性、高可靠性、抗干扰能力强等特点，满足各种严苛工况下的测量需求。
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <Button asChild className="bg-white text-blue-900 hover:bg-blue-50">
                  <Link href="/contact">了解详情</Link>
                </Button>
              </div>
            </div>

            {/* Right Image Placeholder */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 flex items-center justify-center min-h-[400px]">
                <div className="text-center text-white">
                  <div className="w-32 h-32 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium">压力仪表产品展示</p>
                  <p className="text-sm text-blue-200 mt-2">配图1区域</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product 2: 配文2在中部居中 */}
      <div className="min-h-[600px] bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm tracking-widest mb-2 text-gray-400">PRODUCTS & SERVICES</h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            温度测量仪表
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Temperature Measurement Instruments
          </p>
          <div className="max-w-3xl mx-auto text-gray-200 leading-relaxed mb-8">
            <p className="mb-4">
              专业提供热电阻、热电偶、温度变送器等温度测量产品，具有测量精度高、响应速度快、稳定性好等优点。
            </p>
            <p>
              可根据客户需求提供定制化解决方案，满足不同行业的温度监测需求。
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-gray-900 hover:bg-gray-100">
              查看产品
            </Button>
          </div>
        </div>
      </div>

      {/* Product 3: 纯白底色 */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Image Placeholder */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12 flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-blue-200 rounded-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-gray-800">流量测量仪表</p>
                  <p className="text-sm text-gray-600 mt-2">配图3区域</p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2">
              <h2 className="text-sm tracking-widest mb-2 text-blue-600">PRODUCTS & SERVICES</h2>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                流量测量仪表
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Flow Measurement Instruments
              </p>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  提供电磁流量计、涡街流量计、超声波流量计等流量测量产品，广泛应用于水务、化工、环保等领域。
                </p>
                <p>
                  产品采用先进的测量技术，具有高精度、低维护、抗干扰能力强等特点。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product 4: 纯白底色 */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            {/* Right Image Placeholder */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12 flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-blue-200 rounded-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-gray-800">液位测量仪表</p>
                  <p className="text-sm text-gray-600 mt-2">配图4区域</p>
                </div>
              </div>
            </div>

            {/* Left Content */}
            <div className="lg:w-1/2">
              <h2 className="text-sm tracking-widest mb-2 text-blue-600">PRODUCTS & SERVICES</h2>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                液位测量仪表
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Level Measurement Instruments
              </p>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  提供超声波液位计、雷达液位计、磁翻板液位计等产品，适用于各种液位测量场景。
                </p>
                <p>
                  产品具有测量精度高、安装方便、维护简单等特点，广泛应用于石油、化工、水处理等行业。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product 5: 配文5在中部居中 */}
      <div className="min-h-[600px] bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-sm tracking-widest mb-2 text-blue-200">PRODUCTS & SERVICES</h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            定制化解决方案
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Customized Solutions
          </p>
          <div className="max-w-3xl mx-auto text-blue-50 leading-relaxed mb-10">
            <p className="mb-4">
              凭借丰富的行业经验和技术实力，我们可根据客户的具体需求，提供个性化的仪表解决方案。
            </p>
            <p className="mb-4">
              从方案设计、产品选型到安装调试、售后维护，我们提供全流程专业服务，确保客户满意。
            </p>
            <p>
              无论您的需求多么特殊，我们都能为您提供最适合的解决方案。
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <Button asChild className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-6">
              <Link href="/contact">获取定制方案</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
