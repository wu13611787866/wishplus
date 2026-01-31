# 🔧 Vercel 配置修复说明

## 问题

在 Vercel 部署时遇到以下错误：

```
Invalid request: should NOT have additional property `engines`. Please remove it.
```

## 原因

Vercel 的 `vercel.json` 配置文件**不支持** `engines` 属性。

## 解决方案

### 修复前的配置

```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": ".next",
  "devCommand": "pnpm dev",
  "installCommand": "pnpm install",
  "framework": "nextjs",
  "engines": {
    "node": "20.x"
  }
}
```

### 修复后的配置

```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": ".next",
  "devCommand": "pnpm dev",
  "installCommand": "pnpm install",
  "framework": "nextjs"
}
```

## Node.js 版本配置

Vercel 会自动从 `package.json` 中的 `engines` 字段读取 Node.js 版本要求，无需在 `vercel.json` 中重复指定。

### package.json 中的配置（已存在）

```json
{
  "engines": {
    "node": ">=20.0.0",
    "pnpm": ">=9.0.0"
  }
}
```

## 其他平台的配置

### Cloudflare Pages（wrangler.toml）

✅ 支持 `NODE_VERSION` 配置：

```toml
[build.environment]
  NODE_VERSION = "20"
  PNPM_VERSION = "9"
```

### Netlify（netlify.toml）

✅ 支持 `NODE_VERSION` 配置：

```toml
[build.environment]
  NODE_VERSION = "20"
  NPM_FLAGS = "--legacy-peer-deps"
```

### GitHub Pages（.github/workflows/deploy.yml）

✅ 支持 `node-version` 配置：

```yaml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '20'
```

## 总结

- ✅ **Vercel**: 自动从 `package.json` 读取 `engines` 字段
- ✅ **Cloudflare Pages**: 在 `wrangler.toml` 中指定
- ✅ **Netlify**: 在 `netlify.toml` 中指定
- ✅ **GitHub Pages**: 在 workflow 文件中指定
- ❌ **Vercel**: 不支持在 `vercel.json` 中使用 `engines` 属性

## 验证

修复后，Vercel 部署应该能够正常进行。

---

**修复时间**: 2025-01-04
**提交**: cf7116d
**状态**: ✅ 已修复并推送
