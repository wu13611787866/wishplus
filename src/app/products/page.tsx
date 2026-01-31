'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Product 1: 配图1配文 - 左侧留白区域 */}
      <div className="min-h-[600px] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2 text-white">
              <p className="text-sm tracking-widest mb-4 text-blue-200">INTEGRATED SOLUTIONS</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                一体化智能测控<br />解决方案
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                从精密部件到智能系统，提供全生命周期的可靠交付与价值保障
              </p>
              <div className="prose prose-lg text-blue-50 leading-relaxed mb-8">
                <p className="mb-4">
                  在工业自动化智能化、集成化转型的关键阶段，系统兼容性、可靠交付与全周期管理至关重要。
                </p>
                <p className="mb-4">
                  惟实新聚（上海）高科技有限公司以此为立身之本，致力于成为工业测控领域值得信赖的一体化解决方案伙伴。
                </p>
                <p className="mb-4">
                  我们深度融合<strong>"精密仪表、控制阀门、智能系统"</strong>，构建从感知、执行到监控的完整技术链。
                </p>
                <p className="mb-4">
                  依托源自重大工程的<strong>"全生命周期项目管理"</strong>与<strong>"严苛供应链品控"</strong>体系，
                  确保从设计、集成到运维的每个环节具备确定性、可追溯性与高品质。
                </p>
                <p>
                  我们不止于产品，更提供<strong>"可靠运行的保障"</strong>与<strong>"省心协同的体验"</strong>，
                  助力石油化工、电力能源、环保水处理等关键行业客户构建安全、高效、智慧的未来运营。
                </p>
              </div>
              <div className="mt-8 inline-block bg-blue-100/20 backdrop-blur-sm rounded-xl px-6 py-4 border border-blue-300/30">
                <p className="text-lg font-bold">
                  精控之道，价值共生——惟实新聚，以体系化能力，兑现每一份交付承诺。
                </p>
              </div>
            </div>

            {/* Right Image Placeholder */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 flex items-center justify-center min-h-[450px] border border-white/20">
                <div className="text-center text-white">
                  <div className="w-32 h-32 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center">
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium mb-2">产品与服务配图1区域</p>
                  <p className="text-sm text-blue-200">一体化智能测控解决方案</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product 2: 配图2配文 - 中部居中 */}
      <div className="min-h-[800px] bg-white flex items-center justify-center py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm tracking-widest mb-4 text-blue-600">CORE SOLUTIONS</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                核心解决方案
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Solution 1 */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">智能仪表成套服务</h3>
                <p className="text-lg text-blue-600 mb-4">精准感知 · 数据可靠</p>
                <p className="text-gray-600 leading-relaxed">
                  提供压力、温度、流量、物位等全系列工业仪表的专业选型、成套供应与校验服务，
                  确保测量数据精准、稳定。
                </p>
              </div>

              {/* Solution 2 */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">阀门与执行机构解决方案</h3>
                <p className="text-lg text-blue-600 mb-4">可靠执行 · 精准控制</p>
                <p className="text-gray-600 leading-relaxed">
                  涵盖调节、切断、安全等各类阀门及执行机构，专注于严苛工况适配与长寿命设计，
                  保障流程控制的安全与精确。
                </p>
              </div>

              {/* Solution 3 */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    </svg>
                  </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">控制系统深度集成</h3>
                <p className="text-lg text-blue-600 mb-4">智能中枢 · 一体交付</p>
                <p className="text-gray-600 leading-relaxed">
                  核心优势业务。提供从PLC/DCS控制柜设计组装，到SCADA/HMI监控系统定制开发的完整集成服务，
                  打造高效、透明的工厂"智慧大脑"。
                </p>
              </div>

              {/* Solution 4 */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">全周期项目与供应链管理</h3>
                <p className="text-lg text-blue-600 mb-4">体系保障 · 确定交付</p>
                <p className="text-gray-600 leading-relaxed">
                  源自高要求工程的全生命周期项目管理体系与严苛供应链品控，确保每一个项目在质量、成本、进度上全面受控，
                  实现确定性交付。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product 3: 产品与服务3配文 - 纯白底色 */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm tracking-widest mb-4 text-blue-600">CORE ADVANTAGES</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                核心优势
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Advantage 1 */}
              <div className="text-center p-8 bg-gray-50 rounded-2xl">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">01</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">卓越的工程基因</h3>
                <p className="text-gray-600 leading-relaxed">
                  核心团队拥有服务国家重大战略工程的深厚背景，
                  传承对复杂系统、极高安全性与可靠性的深刻理解与极致追求。
                </p>
              </div>

              {/* Advantage 2 */}
              <div className="text-center p-8 bg-gray-50 rounded-2xl">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">02</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">系统化价值整合</h3>
                <p className="text-gray-600 leading-relaxed">
                  我们不仅是产品供应商，更是系统价值的整合者。通过整合优质产品资源与专业服务，
                  为客户提供最优的整体解决方案，降低综合成本与风险。
                </p>
              </div>

              {/* Advantage 3 */}
              <div className="text-center p-8 bg-gray-50 rounded-2xl">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">03</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">深耕行业理解</h3>
                <p className="text-gray-600 leading-relaxed">
                  专注于石油化工、电力能源、环保水处理、高端制造等领域，
                  深刻理解行业工艺、标准与核心需求。
                </p>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                我们以源于国家重大工程的卓越基因，深谙复杂系统与极致可靠之道；<br />
                作为系统价值的整合者，提供从产品到服务的一站式解决方案；<br />
                深耕核心行业，深刻理解工艺与标准。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product 4: 产品与服务4配文 - 纯白底色 */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm tracking-widest mb-4 text-blue-600">PRODUCT PORTFOLIO</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                全品类解决方案
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600">
                全品类运营，满足客户一站式采购需求，价格透明，品质保证。
              </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
              {[
                '超声波流量计', '调节阀', '智能网关', '安全阀',
                '电磁流量计', 'PLC控制系统', '电动执行机构', 'DCS系统',
                'SCADA监控系统', '信号隔离器', '温度仪表', 'HMI人机界面',
                '雷达物位计', '气动执行机构', '质量流量计', '振动变送器',
                '控制系统机柜成套', '薄膜真空规', '切断阀', '以太网交换机', '压力变送器'
              ].map((product, index) => (
                <div key={index} className="bg-white p-4 rounded-xl text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <p className="text-sm font-medium text-gray-900">{product}</p>
                </div>
              ))}
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl text-center shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">体系化交付</h3>
                <p className="text-sm text-gray-600">全周期项目管理<br />交付可控</p>
              </div>

              <div className="bg-white p-6 rounded-xl text-center shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">可靠·省心</h3>
                <p className="text-sm text-gray-600">严苛供应链管控<br />质量可靠</p>
              </div>

              <div className="bg-white p-6 rounded-xl text-center shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">深厚工程基因</h3>
                <p className="text-sm text-gray-600">技术底蕴保障<br />专业可靠</p>
              </div>

              <div className="bg-white p-6 rounded-xl text-center shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">一站式服务</h3>
                <p className="text-sm text-gray-600">价值整合<br />省心省力</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product 5: 配图5配文 - 中部居中 */}
      <div className="min-h-[600px] bg-gradient-to-br from-blue-900 via-blue-700 to-blue-800 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              寻找可靠的自动化合作伙伴？
            </h2>
            <div className="w-20 h-1 bg-blue-300 mx-auto mb-8"></div>
            <p className="text-xl text-blue-100 leading-relaxed mb-12">
              无论您是需要单一产品，还是复杂的系统集成项目，<br />
              惟实新聚都能以专业的体系与负责的态度，<br />
              为您提供值得信赖的解决方案。
            </p>
            <div className="mb-12">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-xl px-10 py-8">
                <Link href="/contact">
                  获取定制方案
                </Link>
              </Button>
            </div>
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/30">
              <p className="text-2xl font-bold mb-2">精控之道，价值共生</p>
              <p className="text-lg text-blue-200">—— 惟实求真，聚新致远</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
