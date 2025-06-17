import type { NextConfig } from "next";

// 判断是否在 GitHub Actions 环境，以便自动设置 basePath / assetPrefix
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = "little-knowledge";

const nextConfig: NextConfig = {
  // SSG 导出
  output: "export",

  // GitHub Pages 需要的路径前缀
  basePath: isGithubActions ? `/${repoName}` : undefined,
  assetPrefix: isGithubActions ? `/${repoName}/` : undefined,

  images: {
    // 静态导出不支持动态优化，需关闭
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "miaoduo.fbcontent.cn",
        pathname: "/private/resource/image/**",
      },
    ],
  },
};

export default nextConfig;
