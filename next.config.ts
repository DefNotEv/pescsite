import type { NextConfig } from "next";

// GitHub Pages deployment configuration
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoName = 'pescsite';  // Changed to match your GitHub repository name

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
  },
  // Add trailing slash for GitHub Pages compatibility
  trailingSlash: true,
};

// For GitHub Pages deployment
export default nextConfig;
