# Node.js 版本配置说明

本项目使用 Node.js 20.x 版本，已在多个配置文件中指定版本要求。

## 📋 配置文件说明

### 1. `.nvmrc` - Node Version Manager

**用途**: 指定使用 nvm 时自动切换的 Node.js 版本

**内容**: `20`

**使用方法**:
```bash
# 安装指定版本的 Node.js
nvm install

# 自动切换到项目指定的版本
nvm use

# 设置默认版本
nvm alias default 20
```

**适用场景**:
- 使用 nvm 管理 Node.js 版本
- 需要在不同项目间自动切换 Node.js 版本

---

### 2. `.node-version` - nodenv / asdf

**用途**: 指定使用 nodenv 或 asdf 时自动切换的 Node.js 版本

**内容**: `20.0.0`

**使用方法**:
```bash
# 使用 nodenv
nodenv install
nodenv local 20.0.0

# 使用 asdf
asdf plugin add nodejs
asdf install nodejs 20.0.0
asdf local nodejs 20.0.0
```

**适用场景**:
- 使用 nodenv 管理 Node.js 版本
- 使用 asdf 管理多个语言版本

---

### 3. `package.json` - engines 字段

**用途**: 指定项目运行的 Node.js 和 pnpm 版本要求

**内容**:
```json
"engines": {
  "node": ">=20.0.0",
  "pnpm": ">=9.0.0"
}
```

**使用方法**:
- npm/pnpm 会检查当前 Node.js 版本是否符合要求
- 部署平台（如 Vercel、Netlify）会自动使用指定版本

**适用场景**:
- 确保所有开发者和部署环境使用正确的版本
- 防止使用过低或过高的 Node.js 版本导致问题

---

### 4. `vercel.json` - Vercel 部署配置

**用途**: 指定 Vercel 部署时使用的 Node.js 版本

**内容**:
```json
"engines": {
  "node": "20.x"
}
```

**适用场景**:
- 部署到 Vercel 平台
- 确保生产环境使用 Node.js 20.x

---

### 5. `wrangler.toml` - Cloudflare Pages 配置

**用途**: 指定 Cloudflare Pages 构建时使用的 Node.js 版本

**内容**:
```toml
[build.environment]
  NODE_VERSION = "20"
  PNPM_VERSION = "9"
```

**适用场景**:
- 部署到 Cloudflare Pages 平台
- 确保构建环境使用 Node.js 20

---

### 6. `netlify.toml` - Netlify 部署配置

**用途**: 指定 Netlify 构建时使用的 Node.js 版本

**内容**:
```toml
[build.environment]
  NODE_VERSION = "20"
  NPM_FLAGS = "--legacy-peer-deps"
```

**适用场景**:
- 部署到 Netlify 平台
- 确保构建环境使用 Node.js 20

---

### 7. `.github/workflows/deploy.yml` - GitHub Actions

**用途**: 指定 GitHub Actions 构建时使用的 Node.js 版本

**内容**:
```yaml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '20'
```

**适用场景**:
- 使用 GitHub Actions 进行 CI/CD
- 部署到 GitHub Pages
- 确保构建环境使用 Node.js 20

---

## 🚀 如何使用

### 方法一：使用 nvm（推荐）

```bash
# 1. 安装指定版本
nvm install

# 2. 切换到该版本
nvm use

# 3. 验证版本
node --version
# 输出: v20.x.x
```

### 方法二：使用 nodenv

```bash
# 1. 安装指定版本
nodenv install

# 2. 设置本地版本
nodenv local

# 3. 验证版本
node --version
# 输出: v20.0.0
```

### 方法三：使用 asdf

```bash
# 1. 安装指定版本
asdf install nodejs 20.0.0

# 2. 设置本地版本
asdf local nodejs 20.0.0

# 3. 验证版本
node --version
# 输出: v20.0.0
```

### 方法四：手动安装

1. 访问 [Node.js 官网](https://nodejs.org/)
2. 下载 Node.js 20.x LTS 版本
3. 安装并验证版本

---

## 🔍 验证版本

### 检查当前 Node.js 版本

```bash
node --version
# 应该输出: v20.x.x
```

### 检查当前 pnpm 版本

```bash
pnpm --version
# 应该输出: 9.x.x
```

### 检查项目配置

```bash
# 查看 .nvmrc
cat .nvmrc

# 查看 .node-version
cat .node-version

# 查看 package.json engines
cat package.json | grep -A 2 '"engines"'
```

---

## ⚠️ 常见问题

### Q: 为什么项目要固定 Node.js 版本？

A:
- 确保开发和部署环境一致
- 避免不同版本导致的兼容性问题
- 提高项目稳定性

### Q: 可以使用其他版本的 Node.js 吗？

A:
- 不建议，可能导致依赖兼容性问题
- 如需升级，请先在测试环境验证
- 更新所有配置文件中的版本号

### Q: 如何更新 Node.js 版本？

A:
1. 更新所有配置文件中的版本号
2. 测试项目是否正常运行
3. 提交代码
4. 通知团队成员更新本地环境

### Q: Windows 用户如何管理 Node.js 版本？

A:
- 使用 [nvm-windows](https://github.com/coreybutler/nvm-windows)
- 或直接安装指定版本

### Q: CI/CD 中如何确保版本正确？

A:
- 已在 `.github/workflows/deploy.yml` 中配置
- 已在 `vercel.json`、`wrangler.toml`、`netlify.toml` 中配置
- 部署平台会自动使用指定版本

---

## 📚 相关资源

- [nvm 文档](https://github.com/nvm-sh/nvm)
- [nodenv 文档](https://github.com/nodenv/nodenv)
- [asdf 文档](https://asdf-vm.com/)
- [Node.js 官网](https://nodejs.org/)
- [Node.js 发布日志](https://github.com/nodejs/node/blob/main/CHANGELOG.md)

---

## 🔄 版本历史

| 版本 | 日期 | 说明 |
|------|------|------|
| 20.x | 2025-01-04 | 初始配置，使用 Node.js 20.x LTS |

---

**Node.js 版本**: 20.x (LTS)
**pnpm 版本**: 9.x
**最后更新**: 2025-01-04
