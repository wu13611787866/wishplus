# Node.js 版本配置更新说明

## ✅ 已完成的配置

### 1. package.json
```json
"engines": {
  "node": ">=20.0.0",
  "pnpm": ">=9.0.0"
}
```

### 2. 新增文件

- ✅ `.nvmrc` - 指定 Node.js 版本为 20
- ✅ `.node-version` - 指定 Node.js 版本为 20.0.0
- ✅ `NODE_VERSION.md` - 详细的版本配置说明文档

### 3. 部署配置文件

- ✅ `vercel.json` - 添加 Node.js 20.x 配置
- ✅ `wrangler.toml` - 已有 Node.js 20 配置
- ✅ `netlify.toml` - 已有 Node.js 20 配置
- ✅ `.github/workflows/deploy.yml` - 已有 Node.js 20 配置

---

## 📋 配置文件用途

| 文件 | 用途 | 版本 |
|------|------|------|
| `.nvmrc` | nvm 自动切换 | 20 |
| `.node-version` | nodenv/asdf 自动切换 | 20.0.0 |
| `package.json` | 引擎版本要求 | >=20.0.0 |
| `vercel.json` | Vercel 部署 | 20.x |
| `wrangler.toml` | Cloudflare Pages | 20 |
| `netlify.toml` | Netlify 部署 | 20 |
| `.github/workflows/deploy.yml` | GitHub Actions | 20 |

---

## 🚀 使用方法

### 开发者本地环境

#### 使用 nvm（推荐）
```bash
nvm install
nvm use
node --version  # 应该输出 v20.x.x
```

#### 使用 nodenv
```bash
nodenv install
nodenv local
node --version  # 应该输出 v20.0.0
```

#### 使用 asdf
```bash
asdf install nodejs 20.0.0
asdf local nodejs 20.0.0
node --version  # 应该输出 v20.0.0
```

---

## 🌐 部署平台

所有部署平台已配置为使用 Node.js 20.x：

- ✅ Vercel
- ✅ Cloudflare Pages
- ✅ Netlify
- ✅ GitHub Pages

部署时会自动使用正确的 Node.js 版本，无需额外配置。

---

## 🔍 验证

### 检查本地 Node.js 版本
```bash
node --version
# 应该输出: v20.x.x
```

### 检查 pnpm 版本
```bash
pnpm --version
# 应该输出: 9.x.x
```

### 检查配置文件
```bash
cat .nvmrc          # 应该输出: 20
cat .node-version   # 应该输出: 20.0.0
```

---

## 📚 文档

详细说明请查看 [NODE_VERSION.md](./NODE_VERSION.md)

---

## ⚠️ 注意事项

1. **项目要求**: Node.js >= 20.0.0
2. **包管理器**: pnpm >= 9.0.0
3. **向下兼容**: 可以在更高版本的 Node.js 上运行（如 v24）
4. **一致性**: 所有配置文件已统一版本要求

---

## 🔄 后续步骤

1. ✅ 所有配置文件已添加到 Git 仓库
2. ✅ 推送代码到 GitHub
3. ✅ 通知团队成员更新本地 Node.js 版本
4. ✅ 部署时自动使用 Node.js 20.x

---

**更新日期**: 2025-01-04
**Node.js 版本**: 20.x (LTS)
**pnpm 版本**: 9.x
