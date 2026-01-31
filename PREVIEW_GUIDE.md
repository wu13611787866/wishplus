# 惟实新聚官网 - 本地预览指南

## 🚀 最简单的启动方式

### Windows 用户

1. **双击 `preview.bat` 文件**
2. 等待安装依赖（首次运行需要几分钟）
3. 浏览器会自动打开 http://localhost:5000
4. 按需浏览网站内容

### macOS/Linux 用户

1. **在终端执行**:
   ```bash
   ./preview.sh
   ```

2. 或手动执行:
   ```bash
   pnpm dev
   ```

3. 浏览器访问: http://localhost:5000

## 📋 前置要求

- **Node.js**: 版本 20 或更高
  - 下载地址: https://nodejs.org/
  
- **pnpm**: 包管理器
  - 安装命令: `npm install -g pnpm`

## 💡 使用提示

1. **首次运行**: 需要安装依赖，大约需要 2-3 分钟
2. **自动刷新**: 修改代码后，浏览器会自动刷新
3. **停止服务**: 按 `Ctrl+C`
4. **端口冲突**: 如果 5000 端口被占用，可以修改 `preview.sh` 中的端口号

## 🌐 访问地址

启动成功后，在浏览器中访问：

- **首页**: http://localhost:5000
- **公司介绍**: http://localhost:5000/about
- **行业资讯**: http://localhost:5000/news
- **产品与服务**: http://localhost:5000/products
- **联系我们**: http://localhost:5000/contact
- **在线留言**: http://localhost:5000/message

## 🔧 故障排除

### 问题 1: 提示 "pnpm 未找到"

**解决方案**:
```bash
npm install -g pnpm
```

### 问题 2: 提示 "node 未找到"

**解决方案**:
1. 访问 https://nodejs.org/
2. 下载并安装 Node.js (推荐 LTS 版本)
3. 重启终端

### 问题 3: 5000 端口被占用

**解决方案**:
```bash
# 查找占用 5000 端口的进程
# Windows
netstat -ano | findstr :5000

# macOS/Linux
lsof -i :5000

# 或修改 preview.sh 中的端口号
```

### 问题 4: 依赖安装失败

**解决方案**:
```bash
# 清理缓存
rm -rf node_modules pnpm-lock.yaml

# 重新安装
pnpm install
```

## 📦 打包分享

如果想分享给他人，可以：

1. **构建静态版本**:
   ```bash
   pnpm build
   ```

2. **使用简单的 HTTP 服务器**:
   ```bash
   # Python 3
   python -m http.server 8000 -d .next

   # Node.js
   npx serve .next -p 8000
   ```

3. **访问**: http://localhost:8000

## 🎯 功能清单

✅ 首页 - 全屏轮播展示
✅ 公司介绍 - 详细的企业信息和发展历程
✅ 行业资讯 - 实时获取仪器仪表行业最新资讯（自动更新）
✅ 产品与服务 - 五大产品类别的解决方案
✅ 联系我们 - 联系方式和在线咨询表单
✅ 在线留言 - 完整的留言反馈系统

## 📞 技术支持

如有问题，请检查：
1. Node.js 版本是否 >= 20
2. pnpm 是否正确安装
3. 端口 5000 是否被占用
4. 网络连接是否正常（行业资讯需要联网）
