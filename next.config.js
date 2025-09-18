/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports
  output: 'export',
  
  // Optional: Change the output directory to 'out' (default is '.next')
  distDir: 'out',
  
  // Optional: Add a trailing slash for GitHub Pages compatibility
  trailingSlash: true,
  
  // Optional: Configure image optimization
  images: {
    // Disable image optimization as it's not supported with static exports
    unoptimized: true,
  },
  
  // Configure base path for GitHub Pages
  basePath: '/pescsite', // Required for https://defnotev.github.io/pescsite
  
  // Optional: Configure asset prefix for CDN or subfolder deployment
  // Set asset prefix for proper asset loading in subdirectory
  assetPrefix: '/pescsite/',
}

module.exports = nextConfig
