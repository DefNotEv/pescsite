/** @type {import('next').NextConfig} */
const nextConfig = {
  // Development settings
  reactStrictMode: true,
  // Static export for GitHub Pages
  output: 'export',
  // Project site under https://defnotev.github.io/pescsite
  basePath: '/pescsite',
  assetPrefix: '/pescsite/',
  images: {
    // GitHub Pages cannot run the Image Optimization server
    unoptimized: true,
  },
  eslint: {
    // Allow production builds to complete even if there are ESLint errors
    ignoreDuringBuilds: true,
  },
  // Optional: ensure directory-style URLs work well on Pages
  // trailingSlash: true,
};

module.exports = nextConfig
