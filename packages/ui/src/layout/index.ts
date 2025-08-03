export * from './constraints';
export * from './ResponsiveContainer';
export * from './TelegramSafeArea'; 
export * from './ResponsiveGrid';

// Utility hook for responsive behavior
export { useMediaQuery } from '@mantine/hooks';

// CSS utilities
export const responsiveCSS = {
  // Hide on Telegram compact mode
  hiddenInCompact: {
    '@media (max-height: 400px)': {
      display: 'none',
    },
  },
  
  // Show only in fullscreen
  fullscreenOnly: {
    '@media (max-height: 600px)': {
      display: 'none',
    },
  },
  
  // Telegram-specific spacing
  telegramSpacing: {
    padding: 'clamp(8px, 2vh, 16px)',
  },
  
  // Universal responsive text
  responsiveText: {
    fontSize: 'clamp(14px, 4vw, 18px)',
    lineHeight: 1.5,
  },
};