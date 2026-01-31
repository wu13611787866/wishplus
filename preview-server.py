#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
惟实新聚官网 - Python HTTP 服务器
使用方法: python preview-server.py
"""

import os
import sys
import subprocess
from http.server import HTTPServer, SimpleHTTPRequestHandler
import webbrowser
import threading
import time

class CustomHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory='.', **kwargs)
    
    def log_message(self, format, *args):
        """自定义日志输出"""
        print(f"[{self.log_date_time_string()}] {format % args}")

def start_server(port=5000):
    """启动 HTTP 服务器"""
    try:
        server = HTTPServer(('localhost', port), CustomHandler)
        print(f"✅ 服务器已启动")
        print(f"🌐 访问地址: http://localhost:{port}")
        print(f"📁 工作目录: {os.getcwd()}")
        print(f"\n💡 提示:")
        print(f"   - 按 Ctrl+C 停止服务器")
        print(f"   - 修改文件后按 F5 刷新浏览器")
        print("\n" + "="*50)
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n\n✅ 服务器已停止")
        sys.exit(0)
    except OSError as e:
        if e.errno == 48:  # Address already in use
            print(f"\n❌ 错误: 端口 {port} 已被占用")
            print(f"💡 解决方案: 修改端口号或关闭占用端口的程序")
            sys.exit(1)
        else:
            print(f"\n❌ 错误: {e}")
            sys.exit(1)

def main():
    """主函数"""
    print("="*50)
    print("  惟实新聚官网 - 本地预览工具")
    print("="*50)
    print()
    
    # 检查 Python 版本
    if sys.version_info < (3, 6):
        print("❌ 错误: 需要 Python 3.6 或更高版本")
        print(f"当前版本: Python {sys.version}")
        sys.exit(1)
    
    print(f"✅ Python 版本: {sys.version.split()[0]}")
    
    # 检查工作目录
    if not os.path.exists('src'):
        print("❌ 错误: 未找到 src 目录")
        print("💡 请在项目根目录运行此脚本")
        sys.exit(1)
    
    print(f"✅ 工作目录: {os.getcwd()}")
    
    # 检查是否需要构建
    if not os.path.exists('.next'):
        print("\n⚠️  提示: 项目尚未构建")
        print("💡 如需完整预览，请先执行: pnpm build")
        print("📌 当前仅可预览静态文件")
    
    print()
    
    # 启动服务器
    start_server(5000)

if __name__ == '__main__':
    main()
