import React from 'react';
import { useNavigation } from './NavigationProvider';
import { TelegramNavigation } from './TelegramNavigation';
import { WebNavigation } from './WebNavigation';

interface AdaptiveNavigationProps {
  children: React.ReactNode;
}

export function AdaptiveNavigation({ children }: AdaptiveNavigationProps) {
  const { platform } = useNavigation();

  if (platform === 'telegram') {
    return (
      <>
        <TelegramNavigation />
        <div style={{ paddingBottom: '80px' }}>
          {children}
        </div>
      </>
    );
  }

  return (
    <WebNavigation>
      {children}
    </WebNavigation>
  );
}