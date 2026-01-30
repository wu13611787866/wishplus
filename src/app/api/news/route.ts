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
    const categorizedNews = allItems.map((item, index) => {
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

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch news',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
