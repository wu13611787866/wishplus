# Git 推送指南

## 🚀 快速推送（3 步）

### 方法一：HTTPS 方式（推荐）

```bash
# 1. 推送到 GitHub
git push origin main

# 2. 如果提示输入用户名和密码
# 用户名：你的 GitHub 用户名
# 密码：你的 Personal Access Token（不是 GitHub 密码）

# 3. 等待推送完成
```

### 方法二：SSH 方式（更安全）

```bash
# 1. 检查是否已配置 SSH 密钥
ls -la ~/.ssh/id_rsa.pub

# 2. 如果没有，生成 SSH 密钥
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# 3. 复制公钥到 GitHub
# 在 GitHub 设置中添加 SSH 密钥

# 4. 切换到 SSH 远程地址
git remote set-url origin git@github.com:wu13611787866/wishplus.git

# 5. 推送
git push origin main
```

---

## 📋 详细步骤

### 步骤 1：确认当前状态

```bash
# 查看当前分支
git branch

# 查看未提交的更改
git status

# 查看最近的提交
git log --oneline -5
```

### 步骤 2：推送代码

```bash
# 推送到远程仓库
git push origin main
```

### 步骤 3：验证推送

```bash
# 验证远程仓库
git remote -v

# 查看远程分支
git branch -r

# 查看推送历史
git log origin/main --oneline -5
```

---

## 🔐 身份验证

### 方式一：Personal Access Token（推荐）

1. **创建 Personal Access Token**
   - 访问：https://github.com/settings/tokens
   - 点击 "Generate new token" → "Generate new token (classic)"
   - 选择权限：`repo`（完整仓库访问权限）
   - 点击生成并复制 Token

2. **使用 Token 推送**
   ```bash
   git push origin main
   Username: your-github-username
   Password: your-personal-access-token
   ```

### 方式二：SSH 密钥

1. **生成 SSH 密钥**
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

2. **启动 SSH 代理**
   ```bash
   eval "$(ssh-agent -s)"
   ssh-add ~/.ssh/id_ed25519
   ```

3. **复制公钥**
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```

4. **添加到 GitHub**
   - 访问：https://github.com/settings/ssh/new
   - 粘贴公钥
   - 点击 "Add SSH key"

5. **切换到 SSH 远程地址**
   ```bash
   git remote set-url origin git@github.com:wu13611787866/wishplus.git
   ```

6. **推送**
   ```bash
   git push origin main
   ```

### 方式三：Git 凭证存储

```bash
# 配置凭证存储
git config --global credential.helper store

# 推送（会提示输入一次凭证）
git push origin main

# 之后会自动保存凭证，无需再次输入
```

---

## 🐛 常见问题

### Q: 提示 "fatal: not a git repository"？

A: 需要先初始化 Git 仓库
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/wu13611787866/wishplus.git
git push -u origin main
```

### Q: 提示 "failed to push some refs"？

A: 可能是远程仓库有更新，需要先拉取
```bash
git pull origin main --rebase
git push origin main
```

### Q: 提示 "Authentication failed"？

A: 检查用户名和密码/Token 是否正确
- 用户名：GitHub 用户名
- 密码：Personal Access Token（不是 GitHub 密码）

### Q: 提示 "Permission denied"？

A: 可能没有推送权限
- 确认你是否有仓库的写入权限
- 检查仓库设置中的 Collaborators

### Q: 如何推送所有分支？

A: 使用 `--all` 参数
```bash
git push origin --all
```

### Q: 如何推送标签？

A: 使用 `--tags` 参数
```bash
git push origin --tags
```

---

## 🔄 强制推送（谨慎使用）

**警告**: 强制推送会覆盖远程仓库的历史记录！

```bash
# 强制推送当前分支
git push origin main --force

# 或使用更安全的强制推送
git push origin main --force-with-lease
```

**使用场景**:
- 修正错误的提交信息
- 回滚到之前的提交
- 清理提交历史

**注意事项**:
- 确保没有其他人正在基于该分支工作
- 备份重要数据
- 与团队沟通

---

## 📊 推送状态检查

### 查看推送状态
```bash
# 查看本地和远程的差异
git log origin/main..main --oneline

# 查看远程分支的更新
git fetch origin
git log origin/main --oneline -5
```

### 同步远程更新
```bash
# 获取远程更新
git fetch origin

# 查看差异
git diff origin/main

# 合并远程更新
git merge origin/main
```

---

## 🎯 推送后操作

### 1. 验证推送成功
- 访问 GitHub 仓库：https://github.com/wu13611787866/wishplus
- 检查提交历史
- 确认所有文件都已推送

### 2. 触发部署（如果配置了自动部署）
- Vercel：自动检测推送并部署
- Cloudflare Pages：自动检测推送并部署
- GitHub Pages：通过 GitHub Actions 自动部署
- Netlify：自动检测推送并部署

### 3. 检查部署状态
- 访问对应的部署平台
- 查看构建日志
- 确认部署成功

---

## 🚨 安全建议

1. **使用 SSH** - 比 HTTPS 更安全
2. **使用 Token** - 不要使用密码
3. **启用 2FA** - 启用两步验证
4. **定期轮换** - 定期更换 Token 和密钥
5. **限制权限** - 只授予必要的权限

---

## 📚 相关资源

- [Git 官方文档](https://git-scm.com/docs)
- [GitHub 身份验证](https://docs.github.com/en/authentication)
- [Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
- [SSH 密钥](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

---

## 💡 快速命令参考

```bash
# 推送当前分支
git push origin main

# 推送并设置上游
git push -u origin main

# 推送所有分支
git push origin --all

# 推送所有标签
git push origin --tags

# 拉取远程更新
git pull origin main

# 获取远程更新（不合并）
git fetch origin

# 查看远程仓库
git remote -v

# 添加远程仓库
git remote add origin https://github.com/wu13611787866/wishplus.git

# 修改远程仓库地址
git remote set-url origin <new-url>
```

---

**仓库地址**: https://github.com/wu13611787866/wishplus
**分支**: main
**最后更新**: 2025-01-04
