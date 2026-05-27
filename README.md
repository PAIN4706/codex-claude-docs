# Codex + Claude Code 配置文档

这是一个基于 VitePress 的教程文档站，内容覆盖 Codex 与 Claude Code 的安装、配置、常见问题和 GitHub Pages 部署。

## 本地预览

```powershell
npm install
npm run docs:dev
```

## 构建

```powershell
npm run docs:build
```

## 部署

仓库推送到 GitHub 后，在仓库 Settings -> Pages 中选择 GitHub Actions。`.github/workflows/deploy.yml` 会自动构建并发布站点。
