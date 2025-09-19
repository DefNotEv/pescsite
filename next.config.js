/** @type {import('next').NextConfig} */
const nextConfig = {
  // Development settings
  reactStrictMode: true,
  // Static export for GitHub Pages, but not for Vercel
  output: process.env.VERCEL ? undefined : 'export',
  // Project site under https://defnotev.github.io/pescsite
  basePath: process.env.NODE_ENV === 'development' || process.env.VERCEL ? '' : '/pescsite',
  assetPrefix: process.env.NODE_ENV === 'development' || process.env.VERCEL ? '' : '/pescsite/',
  images: {
    // GitHub Pages cannot run the Image Optimization server
    unoptimized: true,
  },
  eslint: {
    // Allow production builds to complete even if there are ESLint errors
    ignoreDuringBuilds: true,
  },
  // Ensure directory-style URLs work well on Pages
  trailingSlash: true,
};

module.exports = nextConfig
