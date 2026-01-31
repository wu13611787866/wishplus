import { NextRequest, NextResponse } from 'next/server';
import { SearchClient, Config } from 'coze-coding-dev-sdk';

export const dynamic = 'force-dynamic';

// 缓存时间：5分钟
const CACHE_TTL = 5 * 60 * 1000;

interface NewsCache {
  data: any;
  timestamp: number;
}

let newsCache: NewsCache | null = null;

// 备用静态数据（当 SDK 不可用时使用）
const fallbackNews = [
  {
    id: 'fallback-1',
    title: '2025年仪器仪表行业发展趋势分析',
    url: 'https://example.com/news/1',
    snippet: '随着工业4.0的深入推进，仪器仪表行业正迎来新的发展机遇。',
    summary: '随着工业4.0的深入推进，仪器仪表行业正迎来新的发展机遇。智能化、网络化、高精度成为行业发展的主要方向。',
    site_name: '行业资讯网',
    publish_time: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    category: '市场分析',
    auth_info_level: 3,
  },
  {
    id: 'fallback-2',
    title: '国产高精度传感器技术实现重大突破',
    url: 'https://example.com/news/2',
    snippet: '我国科研团队在高精度传感器领域取得重要进展。',
    summary: '我国科研团队在高精度传感器领域取得重要进展，多项关键技术达到国际先进水平。',
    site_name: '科技日报',
    publish_time: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    category: '技术突破',
    auth_info_level: 4,
  },
  {
    id: 'fallback-3',
    title: '新型工业仪表国家标准正式发布',
    url: 'https://example.com/news/3',
    snippet: '国家市场监督管理总局发布新一批工业仪表国家标准。',
    summary: '国家市场监督管理总局发布新一批工业仪表国家标准，将于2025年6月1日起实施。',
    site_name: '国家标准化管理委员会',
    publish_time: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    category: '政策法规',
    auth_info_level: 5,
  },
  {
    id: 'fallback-4',
    title: '智能制造推动测量仪表产业升级',
    url: 'https://example.com/news/4',
    snippet: '多家企业加速布局智能制造领域，推动产业升级。',
    summary: '多家企业加速布局智能制造领域，推动产业升级，实现从传统制造向智能制造的转型。',
    site_name: '工业新闻网',
    publish_time: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    category: '应用案例',
    auth_info_level: 3,
  },
  {
    id: 'fallback-5',
    title: '全球仪器仪表市场持续增长',
    url: 'https://example.com/news/5',
    snippet: '2024年全球仪器仪表市场规模突破3000亿美元。',
    summary: '2024年全球仪器仪表市场规模突破3000亿美元，亚太地区成为增长最快的市场。',
    site_name: '市场观察',
    publish_time: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    category: '市场分析',
    auth_info_level: 3,
  },
];

export async function GET(request: NextRequest) {
  try {
    // 检查缓存
    if (newsCache && Date.now() - newsCache.timestamp < CACHE_TTL) {
      return NextResponse.json({
        success: true,
        data: newsCache.data,
        fromCache: true,
      });
    }

    // 尝试使用 SDK 获取实时数据
    let categorizedNews: any[] = [];

    try {
      // 初始化搜索客户端
      const config = new Config();
      const client = new SearchClient(config);

      // 搜索仪器仪表行业最新资讯
      const searchQueries = [
        '仪器仪表行业 最新资讯',
        '工业仪表 技术动态',
        '测量设备 行业新闻',
      ];

      // 并行执行多个搜索
      const searchPromises = searchQueries.map((query) =>
        client.advancedSearch(query, {
          searchType: 'web',
          count: 5,
          needUrl: true,
          needSummary: true,
          timeRange: '1w', // 获取最近一周的内容
        })
      );

      const responses = await Promise.all(searchPromises);

      // 合并结果并去重
      const allItems: any[] = [];
      const seenUrls = new Set<string>();

      for (const response of responses) {
        if (response.web_items) {
          for (const item of response.web_items) {
            // 去重
            if (item.url && !seenUrls.has(item.url)) {
              seenUrls.add(item.url);
              allItems.push({
                id: item.id,
                title: item.title,
                url: item.url,
                snippet: item.snippet,
                summary: item.summary,
                site_name: item.site_name,
                publish_time: item.publish_time,
                logo_url: item.logo_url,
                auth_info_level: item.auth_info_level,
              });
            }
          }
        }
      }

      // 按发布时间排序（如果有）
      allItems.sort((a, b) => {
        if (a.publish_time && b.publish_time) {
          return new Date(b.publish_time).getTime() - new Date(a.publish_time).getTime();
        }
        return b.auth_info_level - a.auth_info_level; // 按权威性排序
      });

      // 分类
      categorizedNews = allItems.map((item, index) => {
        const title = item.title.toLowerCase();
        let category = '行业动态';

        if (title.includes('技术') || title.includes('创新') || title.includes('研发')) {
          category = '技术突破';
        } else if (title.includes('政策') || title.includes('标准') || title.includes('规范')) {
          category = '政策法规';
        } else if (title.includes('应用') || title.includes('案例') || title.includes('项目')) {
          category = '应用案例';
        } else if (title.includes('市场') || title.includes('需求') || title.includes('趋势')) {
          category = '市场分析';
        }

        return {
          ...item,
          category,
        };
      });

      // 如果没有获取到数据，使用备用数据
      if (categorizedNews.length === 0) {
        console.log('SDK 未返回数据，使用备用静态数据');
        categorizedNews = fallbackNews;
      }
    } catch (sdkError) {
      console.error('SDK 错误，使用备用静态数据:', sdkError);
      categorizedNews = fallbackNews;
    }

    // 更新缓存
    newsCache = {
      data: categorizedNews,
      timestamp: Date.now(),
    };

    return NextResponse.json({
      success: true,
      data: categorizedNews,
      fromCache: false,
      count: categorizedNews.length,
      source: categorizedNews === fallbackNews ? 'fallback' : 'sdk',
    });
  } catch (error) {
    console.error('Failed to fetch news:', error);

    // 如果有缓存，返回缓存数据
    if (newsCache) {
      return NextResponse.json({
        success: true,
        data: newsCache.data,
        fromCache: true,
        error: 'Using cached data due to error',
      });
    }

    // 最后的备用方案
    return NextResponse.json({
      success: true,
      data: fallbackNews,
      fromCache: false,
      source: 'fallback',
      error: 'Using fallback data due to error',
      message: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
