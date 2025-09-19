/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export for GitHub Pages, but not for Vercel
  output: process.env.VERCEL ? undefined : 'export',
  // Base path configuration
  basePath: process.env.NODE_ENV === 'production' && !process.env.VERCEL ? '/pescsite' : '',
  assetPrefix: process.env.NODE_ENV === 'production' && !process.env.VERCEL ? '/pescsite/' : '',
  images: {
    // Disable image optimization for static export (GitHub Pages)
    unoptimized: process.env.VERCEL ? false : true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Add public path for static assets
  publicRuntimeConfig: {
    basePath: process.env.NODE_ENV === 'production' && !process.env.VERCEL ? '/pescsite' : '',
  },
};

module.exports = nextConfig
