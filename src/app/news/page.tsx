'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight, RefreshCw, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NewsItem {
  id: string;
  title: string;
  url: string;
  snippet: string;
  summary?: string;
  site_name?: string;
  publish_time?: string;
  logo_url?: string;
  category: string;
  auth_info_level: number;
}

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [fromCache, setFromCache] = useState(false);
  const [source, setSource] = useState<string>('sdk');

  const fetchNews = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/news');
      const result = await response.json();

      if (result.success) {
        setNews(result.data);
        setFromCache(result.fromCache);
        setSource(result.source || 'sdk');
      } else {
        setError(result.message || '获取资讯失败');
      }
    } catch (err) {
      setError('网络错误，请稍后重试');
      console.error('Failed to fetch news:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  // 获取分类对应的渐变背景
  const getCategoryGradient = (category: string) => {
    const gradients: Record<string, string> = {
      '技术突破': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      '政策法规': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      '应用案例': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      '市场分析': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      '行业动态': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    };
    return gradients[category] || 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)';
  };

  // 格式化日期
  const formatDate = (dateStr?: string) => {
    if (!dateStr) return '最近';
    const date = new Date(dateStr);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days === 0) return '今天';
    if (days === 1) return '昨天';
    if (days < 7) return `${days}天前`;
    return date.toLocaleDateString('zh-CN');
  };

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
          <p className="text-sm mt-4 text-blue-200">
            自动更新 · 实时获取最新行业动态
          </p>
        </div>
      </div>

      {/* News List */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header with refresh button */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">最新资讯</h2>
              <Button
                onClick={fetchNews}
                disabled={loading}
                variant="outline"
                className="flex items-center gap-2"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                刷新
              </Button>
            </div>

            {/* Cache indicator */}
            {fromCache && !loading && (
              <div className="mb-4 flex items-center gap-2 text-sm text-amber-600 bg-amber-50 px-4 py-2 rounded-lg">
                <AlertCircle className="w-4 h-4" />
                <span>显示缓存数据（缓存5分钟）</span>
              </div>
            )}

            {/* Source indicator */}
            {source === 'fallback' && !loading && (
              <div className="mb-4 flex items-center gap-2 text-sm text-blue-600 bg-blue-50 px-4 py-2 rounded-lg">
                <AlertCircle className="w-4 h-4" />
                <span>显示示例数据（实时搜索暂不可用）</span>
              </div>
            )}

            {/* Loading state */}
            {loading && (
              <div className="text-center py-16">
                <RefreshCw className="w-12 h-12 text-blue-600 mx-auto mb-4 animate-spin" />
                <p className="text-gray-600">正在加载最新资讯...</p>
              </div>
            )}

            {/* Error state */}
            {error && !loading && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
                <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-red-900 mb-2">加载失败</h3>
                <p className="text-red-700 mb-4">{error}</p>
                <Button onClick={fetchNews} variant="outline">
                  重试
                </Button>
              </div>
            )}

            {/* News Grid */}
            {!loading && !error && news.length > 0 && (
              <>
                {/* Featured News */}
                {news[0] && (
                  <div className="mb-8">
                    <Link
                      href={news[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                    >
                      <div className="md:flex">
                        <div
                          className="md:w-1/2 h-64 md:h-auto relative"
                          style={{ background: getCategoryGradient(news[0].category) }}
                        >
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                          <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-900">
                            {news[0].category}
                          </span>
                        </div>
                        <div className="p-8 md:w-1/2 flex flex-col justify-center">
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <time>{formatDate(news[0].publish_time)}</time>
                            </div>
                            {news[0].site_name && (
                              <span className="text-blue-600">{news[0].site_name}</span>
                            )}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {news[0].title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                            {news[0].summary || news[0].snippet}
                          </p>
                          <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                            <span>阅读全文</span>
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {news.slice(1).map((item) => (
                    <Link
                      key={item.id}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
                    >
                      <div
                        className="h-48 relative"
                        style={{ background: getCategoryGradient(item.category) }}
                      >
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-900">
                          {item.category}
                        </span>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                          <Calendar className="w-4 h-4" />
                          <time>{formatDate(item.publish_time)}</time>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {item.summary || item.snippet}
                        </p>
                        {item.site_name && (
                          <p className="text-xs text-blue-600 mt-2">{item.site_name}</p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}

            {/* Empty state */}
            {!loading && !error && news.length === 0 && (
              <div className="text-center py-16 bg-white rounded-xl">
                <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">暂无资讯</h3>
                <p className="text-gray-600">暂时没有找到相关资讯，请稍后再试</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Auto-refresh info */}
      <div className="bg-blue-50 border-t border-blue-100 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 text-sm text-blue-700">
            <RefreshCw className="w-4 h-4" />
            <span>资讯每5分钟自动更新，点击刷新按钮可立即获取最新内容</span>
          </div>
        </div>
      </div>
    </div>
  );
}
