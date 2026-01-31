# 惟实新聚（上海）高科技有限公司 - 企业官网

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

> 专注仪表类产品的现代化企业官网，具备实时行业资讯更新功能

---

## 📋 项目简介

惟实新聚（上海）高科技有限公司企业官网是一个基于 Next.js 16 + React 19 构建的现代化企业网站，专注于展示公司的仪表类产品和服务。网站具备实时行业资讯更新功能，通过联网搜索自动获取最新资讯，并支持智能分类和缓存优化。

### 核心特性

- ✨ **现代化设计**: 采用 shadcn/ui 组件库和 Tailwind CSS 4，美观大方
- 🚀 **高性能**: Next.js 16 App Router + 服务端组件，首屏加载极快
- 📱 **响应式布局**: 完美支持桌面端和移动端
- 🔄 **实时资讯**: 集成联网搜索，自动获取最新行业资讯
- 🎯 **智能分类**: 自动分类（技术突破、政策法规、应用案例、市场分析）
- 💾 **缓存优化**: 5 分钟缓存机制，提升性能
- 🌐 **零配置部署**: 支持 Vercel、Cloudflare Pages、GitHub Pages 等多平台部署
- 🔒 **类型安全**: 完整的 TypeScript 类型定义

---

## 🏗️ 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| [Next.js](https://nextjs.org/) | ^16.0.0 | 全栈框架（App Router） |
| [React](https://react.dev/) | ^19.0.0 | UI 框架 |
| [TypeScript](https://www.typescriptlang.org/) | ^5.0.0 | 类型系统 |
| [Tailwind CSS](https://tailwindcss.com/) | ^4.0.0 | 样式方案 |
| [shadcn/ui](https://ui.shadcn.com/) | 最新 | UI 组件库 |
| [pnpm](https://pnpm.io/) | ^9.0.0 | 包管理器 |

---

## 📂 项目结构

```
wishplus/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # 首页
│   │   ├── about/             # 公司介绍
│   │   ├── news/              # 行业资讯
│   │   ├── products/          # 产品与服务
│   │   ├── contact/           # 联系我们
│   │   ├── message/           # 在线留言
│   │   └── api/               # API 路由
│   │       └── news/          # 行业资讯 API
│   ├── components/            # 组件
│   │   ├── Navbar.tsx         # 导航栏
│   │   ├── Footer.tsx         # 页脚
│   │   └── ui/                # shadcn/ui 组件
│   ├── lib/                   # 工具函数
│   └── types/                 # 类型定义
├── public/                    # 静态资源
├── docs/                      # 项目文档
├── vercel.json                # Vercel 配置
├── netlify.toml               # Netlify 配置
├── wrangler.toml              # Cloudflare Pages 配置
└── README.md                  # 项目说明
```

详细项目结构请参考 [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)

---

## 🚀 快速开始

### 环境要求

- Node.js 20 或更高版本
- pnpm 9 或更高版本

### 安装依赖

```bash
pnpm install
```

### 本地开发

```bash
pnpm dev
```

访问 [http://localhost:5000](http://localhost:5000)

### 构建生产版本

```bash
pnpm build
```

### 启动生产服务器

```bash
pnpm start
```

---

## 🌐 部署指南

本项目支持多种免费部署平台，推荐使用 **Vercel**（Next.js 官方推荐）或 **Cloudflare Pages**（极速 CDN）。

### 🏆 推荐：Vercel（最简单）

**优势**：
- ✅ Next.js 官方推荐，完美支持
- ✅ 零配置，自动检测项目
- ✅ 全球 CDN，速度极快
- ✅ 每月 100GB 免费流量
- ✅ 预览部署（每个 PR 自动生成预览链接）

**部署步骤**：

1. 访问 [Vercel](https://vercel.com)
2. 使用 GitHub 账号登录
3. 点击 "Add New Project"
4. 选择 GitHub 仓库：`wu13611787866/wishplus`
5. 点击 "Deploy"
6. 等待 2-3 分钟，获得网站地址！

就这么简单！🎉

详细配置请参考 [vercel.json](./vercel.json)

---

### 🥈 推荐：Cloudflare Pages（最快）

**优势**：
- ✅ 极快的全球 CDN（200+ 节点）
- ✅ 完全免费，无带宽限制
- ✅ 自动 HTTPS
- ✅ 零配置部署

**部署步骤**：

1. 注册 [Cloudflare](https://dash.cloudflare.com) 账号
2. 连接 GitHub 账号
3. 创建 Pages 项目
4. 连接仓库 `wu13611787866/wishplus`
5. 配置构建设置：
   - 构建命令：`pnpm install && pnpm build`
   - 输出目录：`.next`
6. 部署！

详细配置请参考 [wrangler.toml](./wrangler.toml)

---

### 🥉 备选：GitHub Pages

**优势**：
- ✅ GitHub 原生支持
- ✅ 完全免费
- ✅ 无需额外账号

**部署步骤**：

1. 将代码推送到 GitHub 仓库
2. 进入仓库 Settings → Pages
3. Source 选择 "GitHub Actions"
4. 推送代码，自动部署

已自动配置 [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml)

---

### 📋 其他平台

- **Netlify**: 支持，已配置 [netlify.toml](./netlify.toml)
- **Railway**: 支持，全栈应用部署
- **Deno Deploy**: 支持，边缘计算

详细对比请参考 [DEPLOYMENT_ALTERNATIVES.md](./DEPLOYMENT_ALTERNATIVES.md)

---

## 📄 页面说明

### 首页 (`/`)
- 全屏轮播 Banner（3 个幻灯片，自动播放）
- 核心功能展示
- 快速入口导航

### 公司介绍 (`/about`)
- 公司概况
- 核心优势
- 发展历程
- 企业愿景

### 行业资讯 (`/news`)
- 实时联网搜索
- 自动更新（5 分钟缓存）
- 智能分类（技术突破、政策法规、应用案例、市场分析）
- 手动刷新按钮

### 产品与服务 (`/products`)
- 核心解决方案
- 全品类产品
- 技术优势

### 联系我们 (`/contact`)
- 公司地址
- 联系电话
- 电子邮件
- 在线地图

### 在线留言 (`/message`)
- 表单验证
- 消息提交
- 成功反馈

---

## 🔌 集成服务

### 联网搜索（行业资讯）

使用 `coze-coding-dev-sdk` 实现实时联网搜索：

```typescript
import { SearchClient, config } from 'coze-coding-dev-sdk';

const client = new SearchClient(config);
const results = await client.search('仪表行业最新资讯');
```

**特性**：
- 实时搜索
- 智能分类
- 5 分钟缓存
- 自动去重

---

## 🎨 设计系统

### 颜色系统

```css
/* 主色调 */
--color-primary: #2563eb;

/* 中性色 */
--color-gray-50: #f9fafb;
--color-gray-900: #111827;
```

### 响应式断点

```css
sm: 640px   /* 手机横屏 */
md: 768px   /* 平板 */
lg: 1024px  /* 笔记本 */
xl: 1280px  /* 桌面 */
```

详细设计系统请参考 [TECH_STACK.md](./TECH_STACK.md)

---

## 📚 文档

- [快速开始指南](./QUICK_START.md)
- [项目结构说明](./PROJECT_STRUCTURE.md)
- [技术栈详解](./TECH_STACK.md)
- [部署方案对比](./DEPLOYMENT_ALTERNATIVES.md)
- [本地预览指南](./README-PREVIEW.md)
- [Git 推送指南](./docs/git-push-guide.md)
- [行业资讯自动更新说明](./docs/news-auto-update.md)

---

## 🔧 开发工具

### VS Code 扩展推荐

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next"
  ]
}
```

### 代码规范

项目使用 ESLint 进行代码规范检查：

```bash
pnpm lint
```

---

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建功能分支：`git checkout -b feature/your-feature`
3. 提交更改：`git commit -m 'feat: Add some feature'`
4. 推送到分支：`git push origin feature/your-feature`
5. 提交 Pull Request

---

## 📝 更新日志

### v1.0.0 (2025-01-04)

**新功能**：
- ✅ 完整的企业官网页面（首页、公司介绍、行业资讯、产品与服务、联系我们、在线留言）
- ✅ 行业资讯自动更新功能（集成联网搜索）
- ✅ 智能分类（技术突破、政策法规、应用案例、市场分析）
- ✅ 5 分钟缓存机制
- ✅ 响应式导航栏和页脚
- ✅ 全屏轮播 Banner

**技术栈**：
- ✅ Next.js 16 (App Router)
- ✅ React 19
- ✅ TypeScript 5
- ✅ Tailwind CSS 4
- ✅ shadcn/ui

**部署配置**：
- ✅ Vercel 配置
- ✅ Cloudflare Pages 配置
- ✅ GitHub Pages 配置
- ✅ Netlify 配置

---

## 📞 联系我们

**惟实新聚（上海）高科技有限公司**

- 地址：上海市 [具体地址]
- 电话：[联系电话]
- 邮箱：[contact@wishplus.com]

---

## 📄 许可证

本项目采用 MIT 许可证。详见 [LICENSE](./LICENSE) 文件。

---

## 🙏 致谢

感谢以下开源项目：

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)

---

**项目版本**: 1.0.0
**最后更新**: 2025-01-04
**维护者**: 惟实新聚（上海）高科技有限公司

---

<div align="center">

**⭐ 如果这个项目对你有帮助，请给我们一个 Star！⭐**

Made with ❤️ by 惟实新聚

</div>
