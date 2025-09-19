// Utility function to handle basePath for images in all environments
export function getImagePath(path: string): string {
  // Ensure path starts with a slash and remove any duplicate slashes
  const cleanPath = `/${path.replace(/^\/+/, '')}`;
  
  // For client-side navigation, we need to ensure the path is always absolute
  // and doesn't get affected by basePath during client-side transitions
  if (typeof window !== 'undefined') {
    return cleanPath;
  }
  
  // For server-side rendering or static export
  if (process.env.NODE_ENV === 'production' && !process.env.VERCEL) {
    return `/pescsite${cleanPath}`;
  }
  
  return cleanPath;
}
