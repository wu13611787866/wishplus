# 惟实新聚官网 - 快速开始指南

## 🚀 5 分钟快速部署

本指南将帮助你在 5 分钟内完成项目的本地预览或在线部署。

---

## 📋 前置条件

### 必须具备

- ✅ 一个 GitHub 账号（用于部署）
- ✅ 基础的文件操作能力

### 可选（本地预览）

- Node.js 20 或更高版本
- pnpm 9 或更高版本

---

## 🎯 选择你的部署方式

### 方案一：Vercel 在线部署（最推荐）⭐⭐⭐⭐⭐

**时间**: 3 分钟 | **难度**: ⭐ | **免费**: ✅

#### 步骤

1. **注册/登录 Vercel**
   - 访问：https://vercel.com
   - 使用 GitHub 账号登录

2. **导入项目**
   - 点击 "Add New Project"
   - 选择 "Import an Existing Project"
   - 选择 GitHub 仓库：`wu13611787866/wishplus`

3. **部署**
   - Vercel 自动检测 Next.js 项目
   - 点击 "Deploy" 按钮
   - 等待 2-3 分钟

4. **完成！**
   - 获得网站地址：`https://your-project.vercel.app`
   - 可以自定义域名（可选）

#### 优势

- ✅ 零配置，自动部署
- ✅ 全球 CDN，速度极快
- ✅ 自动 HTTPS
- ✅ 每月 100GB 免费流量
- ✅ 预览部署（每个 PR 自动生成预览链接）

---

### 方案二：Cloudflare Pages 在线部署⭐⭐⭐⭐⭐

**时间**: 4 分钟 | **难度**: ⭐⭐ | **免费**: ✅

#### 步骤

1. **注册 Cloudflare**
   - 访问：https://dash.cloudflare.com
   - 注册账号
   - 连接 GitHub 账号

2. **创建 Pages 项目**
   - 点击 "Workers & Pages"
   - 点击 "Create application"
   - 选择 "Pages"
   - 点击 "Connect to Git"

3. **选择仓库**
   - 选择 `wu13611787866/wishplus` 仓库

4. **配置构建设置**
   - 构建命令：`pnpm install && pnpm build`
   - 输出目录：`.next`
   - Node 版本：20

5. **部署**
   - 点击 "Save and Deploy"
   - 等待构建完成

6. **完成！**
   - 获得网站地址：`https://your-project.pages.dev`

#### 优势

- ✅ 极快的全球 CDN（200+ 节点）
- ✅ 完全免费，无带宽限制
- ✅ 自动 HTTPS
- ✅ 零配置部署

---

### 方案三：GitHub Pages 在线部署⭐⭐⭐⭐

**时间**: 5 分钟 | **难度**: ⭐⭐ | **免费**: ✅

#### 步骤

1. **推送到 GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/wu13611787866/wishplus.git
   git push -u origin main
   ```

2. **启用 GitHub Pages**
   - 进入 GitHub 仓库
   - Settings → Pages
   - Source 选择 "GitHub Actions"
   - 保存

3. **等待部署**
   - 推送代码后自动触发构建
   - 等待 2-3 分钟

4. **完成！**
   - 访问：`https://your-username.github.io/wishplus`

#### 优势

- ✅ GitHub 原生支持
- ✅ 完全免费
- ✅ 无需额外账号
- ✅ 自动部署

---

### 方案四：本地预览（双击启动）⭐⭐⭐⭐⭐

**时间**: 2 分钟 | **难度**: ⭐ | **免费**: ✅

#### Windows 用户

1. **双击** `preview.bat` 文件
2. **等待** 安装依赖（首次运行需要 2-3 分钟）
3. **访问** http://localhost:5000

#### macOS/Linux 用户

1. **打开终端**
2. **执行** `./preview.sh`
3. **等待** 安装依赖
4. **访问** http://localhost:5000

#### 优势

- ✅ 无需命令行操作（Windows）
- ✅ 自动安装依赖
- ✅ 本地预览
- ✅ 快速查看效果

---

### 方案五：本地开发（手动启动）⭐⭐⭐⭐

**时间**: 3 分钟 | **难度**: ⭐⭐⭐ | **免费**: ✅

#### 步骤

1. **安装依赖**
   ```bash
   pnpm install
   ```

2. **启动开发服务器**
   ```bash
   pnpm dev
   ```

3. **访问** http://localhost:5000

#### 优势

- ✅ 完整的开发环境
- ✅ 支持热更新
- ✅ 适合修改和调试

---

## 📊 方案对比

| 方案 | 时间 | 难度 | 免费流量 | 推荐度 | 适用场景 |
|------|------|------|----------|--------|----------|
| Vercel | 3分钟 | ⭐ | 100GB/月 | ⭐⭐⭐⭐⭐ | 快速上线，团队协作 |
| Cloudflare Pages | 4分钟 | ⭐⭐ | 无限 | ⭐⭐⭐⭐⭐ | 追求极致速度 |
| GitHub Pages | 5分钟 | ⭐⭐ | 无限 | ⭐⭐⭐⭐ | 完全免费，简单 |
| 本地预览（双击） | 2分钟 | ⭐ | N/A | ⭐⭐⭐⭐⭐ | 快速查看效果 |
| 本地开发 | 3分钟 | ⭐⭐⭐ | N/A | ⭐⭐⭐⭐ | 修改和调试 |

---

## 🎯 我的推荐

### 如果你想要快速上线

👉 **选择 Vercel**（3 分钟搞定）

1. 访问 https://vercel.com
2. 用 GitHub 登录
3. 导入项目
4. 部署完成！

### 如果你想要最快速度

👉 **选择 Cloudflare Pages**（4 分钟搞定）

1. 注册 Cloudflare
2. 连接 GitHub
3. 创建 Pages 项目
4. 部署完成！

### 如果你想要完全免费

👉 **选择 GitHub Pages**（5 分钟搞定）

1. 推送代码到 GitHub
2. 启用 GitHub Pages
3. 自动部署完成！

### 如果你只想本地查看

👉 **选择本地预览（双击）**（2 分钟搞定）

1. 双击 `preview.bat`（Windows）
2. 等待安装
3. 浏览器打开！

---

## 🌐 访问地址

### 在线部署后

部署完成后，访问以下地址：

| 平台 | 默认域名 |
|------|----------|
| Vercel | `https://your-project.vercel.app` |
| Cloudflare Pages | `https://your-project.pages.dev` |
| GitHub Pages | `https://your-username.github.io/wishplus` |

### 本地预览

| 页面 | 地址 |
|------|------|
| 首页 | http://localhost:5000 |
| 公司介绍 | http://localhost:5000/about |
| 行业资讯 | http://localhost:5000/news |
| 产品与服务 | http://localhost:5000/products |
| 联系我们 | http://localhost:5000/contact |
| 在线留言 | http://localhost:5000/message |

---

## ⚙️ 系统要求

### 最低要求

- **操作系统**: Windows 7+, macOS 10.12+, Linux
- **内存**: 2GB RAM
- **硬盘**: 500MB 可用空间

### 软件要求

| 方案 | Node.js | pnpm | Python |
|------|---------|------|--------|
| Vercel | ❌ | ❌ | ❌ |
| Cloudflare Pages | ❌ | ❌ | ❌ |
| GitHub Pages | ❌ | ❌ | ❌ |
| 本地预览（双击） | ✅ | ✅ | ❌ |
| 本地开发 | ✅ | ✅ | ❌ |

**说明**: 在线部署无需安装任何软件，本地预览需要安装 Node.js 和 pnpm。

---

## 💡 常见问题

### Q: 部署后网站打不开？
A:
1. 检查部署状态是否为 "Success"
2. 等待 DNS 生效（可能需要 1-2 分钟）
3. 清除浏览器缓存后重试

### Q: 行业资讯显示错误？
A:
1. 确保网站有互联网连接
2. 检查 API 路由是否正确配置
3. 查看控制台错误信息

### Q: 图片显示不出来？
A:
1. 检查 `public/` 目录是否包含所有图片
2. 确保图片文件名正确
3. 检查图片路径是否正确

### Q: 如何修改网站内容？
A:
1. 克隆代码到本地
2. 修改对应的文件（如 `src/app/page.tsx`）
3. 推送代码到 GitHub
4. 自动触发重新部署

### Q: 如何自定义域名？
A:
- Vercel: Project Settings → Domains
- Cloudflare: Custom domains
- GitHub Pages: Pages → Custom domain

### Q: 端口 5000 被占用？
A:
1. 关闭占用端口的程序
2. 或修改端口配置（编辑 `.coze` 文件）

---

## 📚 更多资源

### 详细文档

- [项目结构说明](./PROJECT_STRUCTURE.md)
- [技术栈详解](./TECH_STACK.md)
- [部署方案对比](./DEPLOYMENT_ALTERNATIVES.md)
- [本地预览指南](./README-PREVIEW.md)

### 官方文档

- [Next.js 文档](https://nextjs.org/docs)
- [Vercel 文档](https://vercel.com/docs)
- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages)

---

## 🎉 恭喜！

你已经成功部署或预览了惟实新聚企业官网！

### 下一步

1. ✏️ **自定义内容** - 修改公司信息、联系方式等
2. 🎨 **调整样式** - 修改颜色、字体等设计元素
3. 📸 **替换图片** - 更换 Logo、产品图片等
4. 🚀 **优化性能** - 添加缓存、CDN 等
5. 📊 **添加分析** - 集成 Google Analytics 等

---

## 📞 需要帮助？

- 📖 查看详细文档
- 🐛 提交 Issue
- 💬 联系技术支持

---

**快速开始指南版本**: 1.0.0
**最后更新**: 2025-01-04
