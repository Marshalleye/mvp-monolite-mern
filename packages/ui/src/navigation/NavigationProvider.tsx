import React, { createContext, useContext, useState, ReactNode } from 'react';
import { detectPlatform } from '../layout/constraints';

interface NavigationContextType {
  currentRoute: string;
  navigate: (route: string) => void;
  canGoBack: boolean;
  goBack: () => void;
  platform: string;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

interface NavigationProviderProps {
  children: ReactNode;
  initialRoute?: string;
}

export function NavigationProvider({ 
  children, 
  initialRoute = 'home' 
}: NavigationProviderProps) {
  const [currentRoute, setCurrentRoute] = useState(initialRoute);
  const [history, setHistory] = useState<string[]>([initialRoute]);
  const platform = detectPlatform();

  const navigate = (route: string) => {
    setHistory(prev => [...prev, route]);
    setCurrentRoute(route);
  };

  const goBack = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      setHistory(newHistory);
      setCurrentRoute(newHistory[newHistory.length - 1]);
    }
  };

  return (
    <NavigationContext.Provider 
      value={{
        currentRoute,
        navigate,
        canGoBack: history.length > 1,
        goBack,
        platform,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
}