# 惟实新聚（上海）高科技有限公司 - 企业官网

## 部署到 Netlify

本项目已配置好 Netlify 部署，可以通过以下方式免费部署测试。

### 方式一：通过 Git 部署（推荐）

1. **推送到 Git 仓库**
   - 将项目推送到 GitHub、GitLab 或 Bitbucket
   - 确保包含以下文件：
     - `netlify.toml`
     - `package.json`
     - `pnpm-lock.yaml`
     - 所有源代码文件

2. **连接 Netlify**
   - 访问 [Netlify](https://app.netlify.com/)
   - 点击 "Add new site" → "Import an existing project"
   - 选择你的 Git 仓库
   - 选择分支（通常是 `main` 或 `master`）

3. **配置构建设置**
   Netlify 会自动读取 `netlify.toml` 配置，无需手动设置：
   - **Build command**: `pnpm install && pnpm build`
   - **Publish directory**: `.next`
   - **Node version**: `20`

4. **部署**
   - 点击 "Deploy site"
   - 等待构建完成（约 2-3 分钟）
   - 部署成功后，Netlify 会提供一个随机域名（如：https://random-name.netlify.app）

5. **自定义域名（可选）**
   - 在 Site settings → Domain management 中设置自定义域名
   - 可以绑定自己的域名或使用 Netlify 提供的免费域名

### 方式二：通过 Netlify CLI 部署

1. **安装 Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **登录 Netlify**
   ```bash
   netlify login
   ```

3. **初始化项目**
   ```bash
   netlify init
   ```

4. **部署**
   ```bash
   netlify deploy --prod
   ```

### 方式三：通过拖拽部署

1. **构建项目**
   ```bash
   pnpm build
   ```

2. **打包项目**
   ```bash
   # 创建一个包含所有必要文件的目录
   mkdir deploy
   cp -r public next.config.js .next package.json pnpm-lock.yaml deploy/
   ```

3. **拖拽部署**
   - 访问 [Netlify Drop](https://app.netlify.com/drop)
   - 将 `deploy` 文件夹拖拽到页面中
   - 等待上传和构建完成

### 注意事项

1. **图片文件**
   - 确保所有图片文件（`public/` 目录下的图片）都已提交到 Git 仓库
   - 大图片文件（超过 10MB）可能需要优化或使用外部存储

2. **构建时间**
   - Netlify 免费版每月有 300 分钟的构建时间限制
   - 本项目构建时间约 2-3 分钟

3. **流量限制**
   - Netlify 免费版每月 100GB 带宽
   - 超过后会限制访问速度

4. **环境变量**
   - 如需使用环境变量，在 Netlify 的 Site settings → Environment variables 中配置

### 项目特点

- ✅ 静态生成，加载速度快
- ✅ 响应式设计，支持移动端
- ✅ 使用 Next.js 16 + React 19
- ✅ Tailwind CSS 4 样式系统
- ✅ 已配置 Netlify 自动部署
- ✅ 行业资讯自动更新（实时联网搜索）
- ✅ 智能分类（技术突破、政策法规、应用案例、市场分析）
- ✅ 5分钟缓存机制，提高性能

### 主要功能

- **首页**: 全屏轮播展示，自动播放
- **公司介绍**: 详细的企业信息和发展历程
- **行业资讯**: 实时获取仪器仪表行业最新资讯，支持自动刷新
- **产品与服务**: 展示五大产品类别的解决方案
- **联系我们**: 联系方式和在线咨询表单
- **在线留言**: 完整的留言反馈系统

### 本地运行

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 启动生产服务器
pnpm start
```

### 技术栈

- **框架**: Next.js 16 (App Router)
- **UI**: React 19
- **样式**: Tailwind CSS 4
- **组件**: shadcn/ui
- **语言**: TypeScript 5

---

如有问题，请参考 [Netlify 文档](https://docs.netlify.com/)
