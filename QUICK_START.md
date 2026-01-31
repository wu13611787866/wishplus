# 惟实新聚官网 - 浏览器直接查看方案

## 🎯 推荐方案（从简单到复杂）

### 方案一：双击启动（最简单）⭐

**适用场景**: Windows 用户，不想使用命令行

#### Windows 用户
1. 双击 `preview.bat` 文件
2. 等待自动安装依赖（首次运行需要 2-3 分钟）
3. 浏览器自动打开 http://localhost:5000
4. 开始浏览！

#### macOS/Linux 用户
1. 在终端执行: `./preview.sh`
2. 等待安装依赖
3. 浏览器打开 http://localhost:5000

---

### 方案二：使用 Python 服务器

**适用场景**: 已安装 Python，不想安装 Node.js

1. **检查 Python 版本**:
   ```bash
   python --version
   ```
   需要 Python 3.6 或更高版本

2. **运行服务器**:
   ```bash
   python preview-server.py
   ```

3. **访问**: http://localhost:5000

---

### 方案三：手动启动（开发者）

**适用场景**: 已安装 Node.js 和 pnpm

1. **安装依赖**（首次运行）:
   ```bash
   pnpm install
   ```

2. **启动开发服务器**:
   ```bash
   pnpm dev
   ```

3. **访问**: http://localhost:5000

---

### 方案四：构建后预览（完整功能）

**适用场景**: 需要完整预览，包括所有功能

1. **安装依赖**:
   ```bash
   pnpm install
   ```

2. **构建项目**:
   ```bash
   pnpm build
   ```

3. **使用 HTTP 服务器**:
   ```bash
   # 方法1: 使用 Python
   python -m http.server 8000

   # 方法2: 使用 Node.js
   npx serve .next -p 8000
   ```

4. **访问**: http://localhost:8000

---

## 📊 方案对比

| 方案 | 难度 | 速度 | 功能完整度 | 推荐度 |
|------|------|------|------------|--------|
| 方案一（双击启动） | ⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 方案二（Python） | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| 方案三（手动） | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 方案四（构建） | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |

---

## 🚀 快速开始（3 步）

### Windows 用户

1. ✅ **双击** `preview.bat`
2. ✅ **等待** 安装完成（2-3分钟）
3. ✅ **浏览** http://localhost:5000

### macOS/Linux 用户

1. ✅ **执行** `./preview.sh`
2. ✅ **等待** 安装完成（2-3分钟）
3. ✅ **浏览** http://localhost:5000

---

## 🌐 访问地址

启动后，在浏览器中访问以下页面：

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
| 方案一 | ✅ | ✅ | ❌ |
| 方案二 | ❌ | ❌ | ✅ |
| 方案三 | ✅ | ✅ | ❌ |
| 方案四 | ✅ | ✅ | ❌ |

---

## 💡 常见问题

### Q: 双击 preview.bat 没反应？
A: 可能是：
1. 杀毒软件拦截 → 添加到信任列表
2. 文件关联问题 → 右键 → 打开方式 → 选择 Node.js

### Q: 提示 "pnpm 未找到"？
A: 安装 pnpm: `npm install -g pnpm`

### Q: 提示 "node 未找到"？
A: 安装 Node.js: https://nodejs.org/

### Q: 端口 5000 被占用？
A: 
1. 关闭占用端口的程序
2. 或修改端口号（编辑 preview.sh/bat）

### Q: 行业资讯显示错误？
A: 需要互联网连接才能获取最新资讯

### Q: 图片显示不出来？
A: 确保项目文件完整，包括 public/ 目录

---

## 📦 分享给他人

### 方法一：打包项目

```bash
# 1. 打包项目
zip -r wishplus-preview.zip . -x "node_modules/*" ".next/*" ".git/*"

# 2. 发送 .zip 文件给他人
# 3. 对方解压后双击 preview.bat 即可
```

### 方法二：使用 Git

```bash
# 克隆仓库
git clone https://github.com/wu13611787866/wishplus.git
cd wishplus

# 双击 preview.bat 即可
```

---

## 🎨 功能亮点

✅ **首页**: 全屏轮播展示，3个幻灯片
✅ **公司介绍**: 详细的企业信息和发展历程
✅ **行业资讯**: 实时获取仪器仪表行业最新资讯（自动更新）
✅ **产品与服务**: 五大产品类别的解决方案
✅ **联系我们**: 联系方式和在线咨询表单
✅ **在线留言**: 完整的留言反馈系统
✅ **响应式设计**: 支持手机、平板、电脑
✅ **自动刷新**: 修改代码后自动更新

---

## 📞 需要帮助？

1. 查看 `PREVIEW_GUIDE.md` 详细指南
2. 检查系统要求
3. 确认软件已正确安装
4. 检查端口是否被占用

---

**祝您使用愉快！** 🎉
