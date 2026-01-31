import { NextResponse } from 'next/server';
import { Config } from 'coze-coding-dev-sdk';

export const dynamic = 'force-dynamic';

export async function GET() {
  const diagnostics: any = {
    timestamp: new Date().toISOString(),
    environment: {
      NODE_ENV: process.env.NODE_ENV,
      platform: process.env.VERCEL ? 'Vercel' : process.env.CF_PAGES ? 'Cloudflare' : 'Unknown',
    },
    sdk: {
      loaded: true,
      configExists: !!Config,
    },
    test: {
      configInitialization: null,
      error: null,
    },
  };

  try {
    // 测试 SDK 配置初始化
    const config = new Config();
    diagnostics.test.configInitialization = {
      success: true,
      hasAccessToken: !!config.accessToken,
      hasBaseURL: !!config.baseURL,
    };
  } catch (error) {
    diagnostics.test.error = {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
    };
  }

  return NextResponse.json(diagnostics);
}
