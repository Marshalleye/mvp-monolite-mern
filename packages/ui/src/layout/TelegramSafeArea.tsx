import React, { ReactNode, useEffect, useState } from 'react';
import { Box } from '@mantine/core';

interface SafeAreaInsets {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

interface TelegramSafeAreaProps {
  children: ReactNode;
  respectSafeArea?: boolean;
}

export function TelegramSafeArea({ 
  children, 
  respectSafeArea = true 
}: TelegramSafeAreaProps) {
  const [safeArea, setSafeArea] = useState<SafeAreaInsets>({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  });

  useEffect(() => {
    if (!respectSafeArea || typeof window === 'undefined') return;

    const updateSafeArea = () => {
      if (window.Telegram?.WebApp) {
        const tg = window.Telegram.WebApp;
        
        // Use Telegram's safe area if available
        if (tg.safeAreaInset) {
          setSafeArea({
            top: tg.safeAreaInset.top || 0,
            bottom: tg.safeAreaInset.bottom || 0,
            left: tg.safeAreaInset.left || 0,
            right: tg.safeAreaInset.right || 0,
          });
        } else {
          // Fallback based on viewport height
          const viewport = tg.viewportHeight || window.innerHeight;
          setSafeArea({
            top: viewport < 400 ? 8 : 0,
            bottom: viewport < 400 ? 60 : 20,
            left: 0,
            right: 0,
          });
        }
      }
    };

    updateSafeArea();
    
    // Listen for viewport changes
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.onEvent('safeAreaChanged', updateSafeArea);
      window.Telegram.WebApp.onEvent('viewportChanged', updateSafeArea);
    }

    return () => {
      if (window.Telegram?.WebApp) {
        window.Telegram.WebApp.offEvent('safeAreaChanged', updateSafeArea);
        window.Telegram.WebApp.offEvent('viewportChanged', updateSafeArea);
      }
    };
  }, [respectSafeArea]);

  return (
    <Box
      style={{
        paddingTop: safeArea.top,
        paddingBottom: safeArea.bottom,
        paddingLeft: safeArea.left,
        paddingRight: safeArea.right,
        minHeight: '100vh',
        width: '100%',
      }}
    >
      {children}
    </Box>
  );
}