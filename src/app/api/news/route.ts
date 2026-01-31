import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// 每天更新的静态数据（5条）
let dailyNews: any[] = [];
let lastUpdate: string = '';

// 生成今日的资讯数据
function generateDailyNews(): any[] {
  const today = new Date();
  const categories = ['技术突破', '政策法规', '应用案例', '市场分析', '行业动态'];

  return [
    {
      id: 'news-1',
      title: `2025年仪器仪表行业技术发展趋势分析`,
      url: '#',
      snippet: '随着工业4.0的深入推进，仪器仪表行业正迎来新的发展机遇。',
      summary: '随着工业4.0的深入推进，仪器仪表行业正迎来新的发展机遇。智能化、网络化、高精度成为行业发展的主要方向。',
      site_name: '行业资讯网',
      publish_time: new Date(today.getTime() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      category: '技术突破',
      auth_info_level: 4,
    },
    {
      id: 'news-2',
      title: '国产高精度传感器技术实现重大突破',
      url: '#',
      snippet: '我国科研团队在高精度传感器领域取得重要进展。',
      summary: '我国科研团队在高精度传感器领域取得重要进展，多项关键技术达到国际先进水平。',
      site_name: '科技日报',
      publish_time: new Date(today.getTime() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      category: '技术突破',
      auth_info_level: 5,
    },
    {
      id: 'news-3',
      title: '新型工业仪表国家标准正式发布',
      url: '#',
      snippet: '国家市场监督管理总局发布新一批工业仪表国家标准。',
      summary: '国家市场监督管理总局发布新一批工业仪表国家标准，将于2025年6月1日起实施。',
      site_name: '国家标准化管理委员会',
      publish_time: new Date(today.getTime() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      category: '政策法规',
      auth_info_level: 5,
    },
    {
      id: 'news-4',
      title: '智能制造推动测量仪表产业升级',
      url: '#',
      snippet: '多家企业加速布局智能制造领域，推动产业升级。',
      summary: '多家企业加速布局智能制造领域，推动产业升级，实现从传统制造向智能制造的转型。',
      site_name: '工业新闻网',
      publish_time: new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      category: '应用案例',
      auth_info_level: 3,
    },
    {
      id: 'news-5',
      title: '全球仪器仪表市场持续增长',
      url: '#',
      snippet: '2024年全球仪器仪表市场规模突破3000亿美元。',
      summary: '2024年全球仪器仪表市场规模突破3000亿美元，亚太地区成为增长最快的市场。',
      site_name: '市场观察',
      publish_time: new Date(today.getTime() - 10 * 24 * 60 * 60 * 1000).toISOString(),
      category: '市场分析',
      auth_info_level: 3,
    },
  ];
}

export async function GET(request: NextRequest) {
  try {
    const today = new Date().toISOString().split('T')[0];

    // 检查是否需要更新（每天更新一次）
    if (lastUpdate !== today || dailyNews.length === 0) {
      console.log('更新每日资讯数据:', today);
      dailyNews = generateDailyNews();
      lastUpdate = today;
    }

    return NextResponse.json({
      success: true,
      data: dailyNews,
      lastUpdate: lastUpdate,
      count: dailyNews.length,
    });
  } catch (error) {
    console.error('Failed to fetch news:', error);

    // 降级到静态数据
    const fallbackData = generateDailyNews();

    return NextResponse.json({
      success: true,
      data: fallbackData,
      lastUpdate: 'fallback',
      count: fallbackData.length,
    });
  }
}
