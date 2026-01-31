@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

echo ======================================
echo   惟实新聚官网 - GitHub 推送脚本
echo ======================================
echo.

REM 检查 Git 状态
echo 📋 检查 Git 状态...
git status
echo.

REM 显示最近的提交
echo 📝 最近的提交：
git log --oneline -5
echo.

REM 显示远程仓库
echo 🌐 远程仓库：
git remote -v
echo.

echo ======================================
echo   推送方式选择
echo ======================================
echo.
echo 方式 1: HTTPS（需要用户名和 Token）
echo   命令: git push origin main
echo.
echo 方式 2: SSH（需要 SSH 密钥）
echo   命令: git remote set-url origin git@github.com:wu13611787866/wishplus.git
echo   命令: git push origin main
echo.

REM 询问用户是否继续
set /p "continue=是否现在推送到 GitHub? (y/n): "

if /i "%continue%"=="y" (
  echo.
  echo 🚀 开始推送...
  echo.

  REM 尝试推送
  git push origin main

  if %errorlevel% equ 0 (
    echo.
    echo ✅ 推送成功！
    echo.
    echo 📦 访问仓库: https://github.com/wu13611787866/wishplus
    echo.
  ) else (
    echo.
    echo ❌ 推送失败！
    echo.
    echo 💡 解决方案：
    echo.
    echo   1. 如果提示身份验证失败，请使用 Personal Access Token
    echo      访问: https://github.com/settings/tokens
    echo      生成后使用 Token 作为密码
    echo.
    echo   2. 或者切换到 SSH 方式：
    echo      git remote set-url origin git@github.com:wu13611787866/wishplus.git
    echo      git push origin main
    echo.
  )
) else (
  echo.
  echo ❌ 取消推送
  echo.
  echo 💡 稍后可以使用以下命令手动推送：
  echo   git push origin main
  echo.
)

echo ======================================
pause
