// Utility function to handle basePath for images in all environments
export function getImagePath(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In development or Vercel, no basePath prefix needed
  if (process.env.NODE_ENV !== 'production' || process.env.VERCEL) {
    return `/${cleanPath}`;
  }
  
  // In GitHub Pages production, prefix with basePath
  return `/pescsite/${cleanPath}`;
}
