import React from 'react';
import { NavigationProvider, AdaptiveNavigation, useNavigation } from '../../navigation';
import { HomePage } from './HomePage';
import { PaymentsPage } from './PaymentsPage';
import { ProfilePage } from './ProfilePage';
import { ThemesPage } from './ThemesPage';
import { SettingsPage } from './SettingsPage';
import { TelegramSafeArea } from '../../layout';

function AppContent() {
  const { currentRoute } = useNavigation();

  const renderPage = () => {
    switch (currentRoute) {
      case 'home':
        return <HomePage />;
      case 'payments':
        return <PaymentsPage />;
      case 'profile':
        return <ProfilePage />;
      case 'themes':
        return <ThemesPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <TelegramSafeArea>
      <AdaptiveNavigation>
        {renderPage()}
      </AdaptiveNavigation>
    </TelegramSafeArea>
  );
}

export function AppRouter() {
  return (
    <NavigationProvider initialRoute="home">
      <AppContent />
    </NavigationProvider>
  );
}