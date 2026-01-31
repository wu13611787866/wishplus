# Git 推送指南

## 已配置远程仓库

远程仓库已成功添加：
- 仓库地址: https://github.com/wu13611787866/wishplus.git
- 分支: main

## 推送步骤

由于推送代码需要 GitHub 认证，请在本地终端执行以下命令：

### 方法一：使用 GitHub Personal Access Token（推荐）

1. **生成 Personal Access Token**
   - 访问：https://github.com/settings/tokens
   - 点击 "Generate new token (classic)"
   - 勾选 `repo` 权限
   - 点击生成，复制 token（只显示一次）

2. **推送代码**
   ```bash
   cd /path/to/your/project
   git push -u origin main
   ```
   当提示输入用户名和密码时：
   - 用户名：你的 GitHub 用户名
   - 密码：粘贴刚才生成的 Personal Access Token

### 方法二：使用 SSH（推荐长期使用）

1. **生成 SSH 密钥**（如果还没有）
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

2. **添加 SSH 密钥到 GitHub**
   - 复制公钥内容：`cat ~/.ssh/id_ed25519.pub`
   - 访问：https://github.com/settings/keys
   - 点击 "New SSH key"
   - 粘贴公钥内容并保存

3. **修改远程仓库地址为 SSH**
   ```bash
   git remote set-url origin git@github.com:wu13611787866/wishplus.git
   ```

4. **推送代码**
   ```bash
   git push -u origin main
   ```

### 方法三：使用 GitHub CLI

1. **安装 GitHub CLI**
   ```bash
   # macOS
   brew install gh

   # Windows
   winget install --id GitHub.cli

   # Linux
   sudo apt install gh
   ```

2. **登录 GitHub**
   ```bash
   gh auth login
   ```

3. **推送代码**
   ```bash
   git push -u origin main
   ```

## 当前状态

- **分支**: main
- **提交记录**: 6 个提交
- **远程仓库**: 已配置
- **待推送文件**: 所有文件已提交

## 提交历史

最近的提交记录：
1. feat: 更新产品与服务页面，整合所有配文内容
2. feat: 实现行业资讯自动更新功能，集成联网搜索
3. docs: 添加 Netlify 部署配置和说明文档
4. feat: 更新公司介绍页面，添加Banner和配图
5. feat: 更新公司介绍页面，添加详细的企业信息
6. ... (更多提交)

## 注意事项

1. **认证方式**: 建议使用 SSH 或 GitHub CLI，更安全且不需要每次输入密码
2. **大文件**: 项目包含多个大图片文件（约 20MB），首次推送可能需要一些时间
3. **分支保护**: 如果 GitHub 仓库启用了分支保护，可能需要创建 Pull Request
4. **.gitignore**: 已配置好，不会推送 node_modules 等不必要的文件

## 推送后的操作

推送成功后：

1. **访问仓库**: https://github.com/wu13611787866/wishplus
2. **验证文件**: 确认所有文件都已上传
3. **Netlify 部署**: 可以将仓库连接到 Netlify 进行自动部署
   - 访问：https://app.netlify.com/
   - 点击 "Add new site" → "Import an existing project"
   - 选择 GitHub 仓库
   - Netlify 会自动读取 `netlify.toml` 配置

## 常见问题

### Q: 推送时提示认证失败
A: 检查用户名和密码（或 Personal Access Token）是否正确

### Q: 提示 "remote already exists"
A: 远程仓库已配置，直接执行 `git push -u origin main` 即可

### Q: 推送速度很慢
A: 项目包含多个大图片文件，首次推送需要时间，请耐心等待

### Q: 如何推送到其他分支
A: `git checkout -b branch-name` 创建并切换到新分支，然后 `git push -u origin branch-name`

## 下一步

推送成功后，你可以：
1. 在 GitHub 上查看代码
2. 连接到 Netlify 进行自动部署
3. 邀请团队成员协作
4. 设置 GitHub Actions 进行自动化测试
