// Global responsive constraint system for all platforms

declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        viewportHeight?: number;
        [key: string]: any;
      };
      [key: string]: any;
    };
  }
}

export interface ViewportConstraints {
  minWidth: number;
  maxWidth: number;
  minHeight?: number;
  maxHeight?: number;
  aspectRatio?: number;
  padding: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

export interface PlatformConstraints {
  telegram: {
    compact: ViewportConstraints;
    expanded: ViewportConstraints;
    fullscreen: ViewportConstraints;
  };
  web: {
    mobile: ViewportConstraints;
    tablet: ViewportConstraints;
    desktop: ViewportConstraints;
  };
  mobile: {
    portrait: ViewportConstraints;
    landscape: ViewportConstraints;
  };
}

// Telegram Mini App Constraints (based on research)
export const TELEGRAM_CONSTRAINTS = {
  // Compact mode (bottom sheet, half screen)
  compact: {
    minWidth: 320,
    maxWidth: 480,
    minHeight: 300,
    maxHeight: 400,
    padding: {
      top: 8,
      bottom: 60, // Space for Telegram UI
      left: 16,
      right: 16,
    },
  },
  
  // Expanded mode (full height, still in chat)
  expanded: {
    minWidth: 320,
    maxWidth: 480,
    minHeight: 500,
    maxHeight: 800,
    padding: {
      top: 8,
      bottom: 20, // Minimal space for Telegram UI
      left: 16,
      right: 16,
    },
  },
  
  // Fullscreen mode (covers entire device)
  fullscreen: {
    minWidth: 320,
    maxWidth: 480,
    minHeight: 600,
    maxHeight: 1000,
    padding: {
      top: 0, // No Telegram UI
      bottom: 0,
      left: 0,
      right: 0,
    },
  },
} as const;

// Web Platform Constraints
export const WEB_CONSTRAINTS = {
  mobile: {
    minWidth: 320,
    maxWidth: 768,
    padding: {
      top: 16,
      bottom: 16,
      left: 16,
      right: 16,
    },
  },
  
  tablet: {
    minWidth: 768,
    maxWidth: 1024,
    padding: {
      top: 24,
      bottom: 24,
      left: 32,
      right: 32,
    },
  },
  
  desktop: {
    minWidth: 1024,
    maxWidth: 1440,
    padding: {
      top: 32,
      bottom: 32,
      left: 48,
      right: 48,
    },
  },
} as const;

// React Native Mobile Constraints
export const MOBILE_CONSTRAINTS = {
  portrait: {
    minWidth: 320,
    maxWidth: 428, // iPhone 14 Pro Max width
    padding: {
      top: 44, // Status bar + notch
      bottom: 34, // Home indicator
      left: 16,
      right: 16,
    },
  },
  
  landscape: {
    minWidth: 568, // iPhone SE landscape
    maxWidth: 926, // iPhone 14 Pro Max landscape
    padding: {
      top: 0,
      bottom: 21, // Home indicator in landscape
      left: 44, // Notch area
      right: 44,
    },
  },
} as const;

// Breakpoint system that works across all platforms
export const UNIVERSAL_BREAKPOINTS = {
  xs: 320,  // Minimum mobile width
  sm: 480,  // Large mobile / Telegram max width
  md: 768,  // Tablet
  lg: 1024, // Desktop
  xl: 1440, // Large desktop
} as const;

// Device detection utilities
export const detectPlatform = () => {
  if (typeof window === 'undefined') return 'server';
  
  // Telegram Mini App detection
  if (window.Telegram?.WebApp) return 'telegram';
  
  // Mobile web detection
  if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return 'mobile-web';
  }
  
  return 'web';
};

export const detectTelegramMode = () => {
  if (typeof window === 'undefined' || !window.Telegram?.WebApp) return null;
  
  const tg = window.Telegram.WebApp;
  const viewport = tg.viewportHeight || 0;
  
  // Heuristic based on viewport height
  if (viewport < 400) return 'compact';
  if (viewport < 600) return 'expanded';
  return 'fullscreen';
};

// CSS-in-JS constraint helpers
export const getConstraintStyles = (platform: string, mode?: string) => {
  switch (platform) {
    case 'telegram':
      const telegramMode = mode || detectTelegramMode() || 'expanded';
      const constraints = TELEGRAM_CONSTRAINTS[telegramMode as keyof typeof TELEGRAM_CONSTRAINTS];
      return {
        maxWidth: `${constraints.maxWidth}px`,
        minHeight: `${constraints.minHeight}px`,
        padding: `${constraints.padding.top}px ${constraints.padding.right}px ${constraints.padding.bottom}px ${constraints.padding.left}px`,
        margin: '0 auto',
      };
      
    case 'web':
      return {
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '0 clamp(16px, 5vw, 48px)',
      };
      
    default:
      return {
        width: '100%',
        padding: '16px',
      };
  }
};
