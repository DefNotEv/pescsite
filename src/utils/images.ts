// Utility function to handle basePath for images in static export
export function getImagePath(path: string): string {
  // In development, no basePath prefix needed
  if (process.env.NODE_ENV === 'development') {
    return path;
  }
  
  // In production, prefix with basePath
  return `/pescsite${path}`;
}
