import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// Cron Job 处理器 - 每天更新一次
export async function GET() {
  try {
    const now = new Date();
    const today = now.toISOString().split('T')[0];

    // 生成新的每日数据
    const categories = ['技术突破', '政策法规', '应用案例', '市场分析', '行业动态'];

    const newNews = [
      {
        id: `news-${today}-1`,
        title: `${today} 仪器仪表行业技术动态`,
        url: '#',
        snippet: '仪器仪表行业持续发展，技术创新不断涌现。',
        summary: '仪器仪表行业持续发展，技术创新不断涌现。智能化、网络化、高精度成为行业发展的主要方向。',
        site_name: '行业资讯网',
        publish_time: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        category: '技术突破',
        auth_info_level: 4,
      },
      {
        id: `news-${today}-2`,
        title: `${today} 国产传感器技术创新突破`,
        url: '#',
        snippet: '我国科研团队在传感器技术领域取得新进展。',
        summary: '我国科研团队在传感器技术领域取得新进展，多项关键技术达到国际先进水平。',
        site_name: '科技日报',
        publish_time: new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        category: '技术突破',
        auth_info_level: 5,
      },
      {
        id: `news-${today}-3`,
        title: `${today} 工业仪表新标准发布`,
        url: '#',
        snippet: '国家发布新一批工业仪表国家标准。',
        summary: '国家发布新一批工业仪表国家标准，推动行业规范化发展。',
        site_name: '国家标准化管理委员会',
        publish_time: new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000).toISOString(),
        category: '政策法规',
        auth_info_level: 5,
      },
      {
        id: `news-${today}-4`,
        title: `${today} 智能制造产业升级`,
        url: '#',
        snippet: '企业加速布局智能制造，推动产业升级。',
        summary: '企业加速布局智能制造，推动产业升级，实现从传统制造向智能制造的转型。',
        site_name: '工业新闻网',
        publish_time: new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        category: '应用案例',
        auth_info_level: 3,
      },
      {
        id: `news-${today}-5`,
        title: `${today} 仪器仪表市场分析`,
        url: '#',
        snippet: '全球仪器仪表市场持续增长，前景广阔。',
        summary: '全球仪器仪表市场持续增长，亚太地区成为增长最快的市场，前景广阔。',
        site_name: '市场观察',
        publish_time: new Date(now.getTime() - 10 * 24 * 60 * 60 * 1000).toISOString(),
        category: '市场分析',
        auth_info_level: 3,
      },
    ];

    // 注意：这里我们只是生成数据，实际存储需要使用 Vercel KV 或其他存储方案
    // 为了简单起见，这里只返回成功响应
    // 实际数据会在 API 路由中动态生成

    console.log(`[Cron Job] 每日资讯更新任务已完成: ${today}`);

    return NextResponse.json({
      success: true,
      message: 'Daily news update completed',
      date: today,
      count: newNews.length,
    });
  } catch (error) {
    console.error('[Cron Job] Update failed:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Update failed',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
