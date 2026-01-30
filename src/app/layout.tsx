import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: '惟实新聚 - 仪表类产品专家',
    template: '%s | 惟实新聚',
  },
  description:
    '惟实新聚（上海）高科技有限公司专注于仪表类产品的研发、生产与销售，致力于为客户提供高品质、高精度的测量仪表解决方案。',
  keywords: [
    '惟实新聚',
    '仪表',
    '测量仪表',
    '仪器仪表',
    '压力仪表',
    '温度仪表',
    '液位仪表',
    '流量仪表',
  ],
  authors: [{ name: '惟实新聚（上海）高科技有限公司' }],
  generator: 'Coze Code',
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang="zh-CN">
      <body className={`antialiased`}>
        {isDev && <Inspector />}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
