@echo off
chcp 65001 >nul
REM 惟实新聚官网 - 本地预览脚本 (Windows)
REM 使用方法: 双击 preview.bat

echo ==========================================
echo   惟实新聚官网 - 本地预览启动
echo ==========================================
echo.

REM 检查是否安装了 pnpm
where pnpm >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ 错误: 未安装 pnpm
    echo 请先安装 pnpm: npm install -g pnpm
    pause
    exit /b 1
)

REM 检查是否安装了 Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ 错误: 未安装 Node.js
    echo 请先安装 Node.js: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ 环境检查通过
echo.

REM 检查是否需要安装依赖
if not exist "node_modules" (
    echo 📦 正在安装依赖...
    call pnpm install
    echo.
)

REM 启动开发服务器
echo 🚀 启动开发服务器...
echo.
echo ==========================================
echo   🌐 访问地址: http://localhost:5000
echo ==========================================
echo.
echo 💡 提示:
echo    - 按 Ctrl+C 停止服务器
echo    - 修改代码后会自动刷新
echo.

call pnpm dev

pause
