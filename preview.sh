#!/bin/bash

# 惟实新聚官网 - 本地预览脚本
# 使用方法: ./preview.sh

echo "=========================================="
echo "  惟实新聚官网 - 本地预览启动"
echo "=========================================="
echo ""

# 检查是否安装了 pnpm
if ! command -v pnpm &> /dev/null; then
    echo "❌ 错误: 未安装 pnpm"
    echo "请先安装 pnpm: npm install -g pnpm"
    exit 1
fi

# 检查是否安装了 Node.js
if ! command -v node &> /dev/null; then
    echo "❌ 错误: 未安装 Node.js"
    echo "请先安装 Node.js: https://nodejs.org/"
    exit 1
fi

echo "✅ 环境检查通过"
echo ""

# 检查是否需要安装依赖
if [ ! -d "node_modules" ]; then
    echo "📦 正在安装依赖..."
    pnpm install
    echo ""
fi

# 启动开发服务器
echo "🚀 启动开发服务器..."
echo ""
echo "=========================================="
echo "  🌐 访问地址: http://localhost:5000"
echo "=========================================="
echo ""
echo "💡 提示:"
echo "   - 按 Ctrl+C 停止服务器"
echo "   - 修改代码后会自动刷新"
echo ""

pnpm dev
