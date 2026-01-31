# 🎯 浏览器直接查看 - 快速开始

## 最简单的方式 ⭐

### Windows 用户
**双击 `preview.bat` 文件** 即可！

### macOS/Linux 用户  
**执行 `./preview.sh`** 即可！

就这么简单！✨

---

## 📋 详细步骤

### 第一步：准备工作

确保你的电脑上安装了以下软件之一：

**选项 A**（推荐）：
- Node.js >= 20
- pnpm

**选项 B**：
- Python >= 3.6

---

### 第二步：启动预览

#### 方式 1：Windows 用户（最简单）
1. 找到 `preview.bat` 文件
2. **双击它**
3. 等待 2-3 分钟（首次运行需要安装依赖）
4. 浏览器自动打开 http://localhost:5000
5. 完成！🎉

#### 方式 2：macOS/Linux 用户（最简单）
1. 打开终端
2. 进入项目目录
3. 执行：`./preview.sh`
4. 等待 2-3 分钟
5. 浏览器打开 http://localhost:5000
6. 完成！🎉

#### 方式 3：使用 Python
1. 打开终端/命令提示符
2. 执行：`python preview-server.py`
3. 浏览器打开 http://localhost:5000
4. 完成！🎉

#### 方式 4：手动启动（开发者）
1. 安装依赖：`pnpm install`
2. 启动服务：`pnpm dev`
3. 浏览器打开 http://localhost:5000
4. 完成！🎉

---

## 🌐 访问页面

启动成功后，在浏览器中访问：

- **首页**: http://localhost:5000
- **公司介绍**: http://localhost:5000/about  
- **行业资讯**: http://localhost:5000/news
- **产品与服务**: http://localhost:5000/products
- **联系我们**: http://localhost:5000/contact
- **在线留言**: http://localhost:5000/message

---

## ⚡ 立即开始

### Windows
```
双击 preview.bat → 等待 → 浏览器打开
```

### macOS/Linux  
```
./preview.sh → 等待 → 浏览器打开
```

---

## 💡 提示

- **首次运行**: 需要 2-3 分钟安装依赖
- **自动刷新**: 修改代码后按 F5 刷新
- **停止服务**: 按 Ctrl+C
- **行业资讯**: 需要互联网连接

---

## ❓ 遇到问题？

### Windows 用户

**问题**: 双击没反应
- 右键 → 打开方式 → 选择 Node.js
- 或杀毒软件拦截 → 添加信任

**问题**: 提示缺少 pnpm
- 执行：`npm install -g pnpm`

**问题**: 提示缺少 Node.js  
- 访问：https://nodejs.org/ 下载安装

### macOS/Linux 用户

**问题**: 提示权限不足
- 执行：`chmod +x preview.sh`

**问题**: 提示缺少 Python
- 访问：https://python.org/ 下载安装

---

## 📚 更多信息

详细指南请查看：
- `QUICK_START.md` - 快速开始指南
- `PREVIEW_GUIDE.md` - 详细预览指南

---

**就这么简单！开始预览你的网站吧！** 🚀
