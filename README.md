# 本项目简介

「Little Knowledge」是一个基于 Next.js（App Router）构建的静态网站，持续收集并分享简明易懂的英语小知识。

在线地址（GitHub Pages）：<https://english-assistant.github.io/little-knowledge/>

## 现有页面

| 路径        | 作用                                                    | 备注    |
| ----------- | ------------------------------------------------------- | ------- |
| `/`         | 首页导航，展示所有知识模块入口                          | **SSG** |
| `/pronouns` | 英语代词详解，人称/物主/反身/指示/疑问/不定等分类及例句 | **SSG** |

> 未来将陆续加入「英语时态」「常用短语」等模块，敬请期待。

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动本地开发服务器
pnpm dev

# 访问
open http://localhost:3000
```

## 构建与部署

```bash
# 生产构建并导出静态站点
pnpm build && pnpm exec next export
# 导出目录位于 ./out，可直接部署至静态托管平台
```

项目已配置 GitHub Actions（`.github/workflows/deploy.yml`），push 到 `main` 分支后将自动构建并发布到 GitHub Pages。
