// Device detection utility for performance optimization
export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  // Check user agent
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
  const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
  
  // Check screen width
  const isSmallScreen = window.innerWidth < 768;
  
  // Check touch capability
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  return mobileRegex.test(userAgent) || (isSmallScreen && isTouchDevice) || prefersReducedMotion;
};

export const isLowEndDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  // Check for hardware concurrency (CPU cores)
  const cores = navigator.hardwareConcurrency || 4;
  
  // Check device memory if available
  const memory = (navigator as any).deviceMemory || 4;
  
  // Check connection speed
  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
  const slowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g');
  
  return cores <= 2 || memory <= 2 || slowConnection || isMobile();
};

