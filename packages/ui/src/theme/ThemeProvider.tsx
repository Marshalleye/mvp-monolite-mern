// packages/ui/src/theme/ThemeProvider.tsx - FIXED VERSION
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { 
  MantineProvider, 
  ColorSchemeScript,
  MantineColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';
import { themeVariants, ThemeVariant, defaultTheme } from './variants';

// Extended theme context interface
interface ThemeContextType {
  variant: ThemeVariant;
  setVariant: (variant: ThemeVariant) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface MVPThemeProviderProps {
  children: ReactNode;
  initialVariant?: ThemeVariant;
  initialColorScheme?: MantineColorScheme;
}

// Inner component that has access to Mantine's color scheme
function ThemeProviderInner({ children }: { children: ReactNode }) {
  return (
    <>
      <Notifications position="top-right" zIndex={1000} />
      <ModalsProvider>
        {children}
      </ModalsProvider>
    </>
  );
}

export function MVPThemeProvider({ 
  children, 
  initialVariant = 'glassmorphism',
  initialColorScheme = 'light'
}: MVPThemeProviderProps) {
  const [variant, setVariant] = useState<ThemeVariant>(initialVariant);
  
  const theme = themeVariants[variant];

  return (
    <>
      <ColorSchemeScript defaultColorScheme={initialColorScheme} />
      <MantineProvider theme={theme} defaultColorScheme={initialColorScheme}>
        <ThemeContext.Provider 
          value={{ 
            variant, 
            setVariant,
          }}
        >
          <ThemeProviderInner>
            {children}
          </ThemeProviderInner>
        </ThemeContext.Provider>
      </MantineProvider>
    </>
  );
}

// Custom hook to use theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  
  if (!context) {
    throw new Error('useTheme must be used within MVPThemeProvider');
  }
  
  return {
    ...context,
    colorScheme,
    toggleColorScheme,
  };
}

// Theme switcher hook for easy theme changes
export function useThemeSwitcher() {
  const { setVariant } = useTheme();
  const { toggleColorScheme } = useMantineColorScheme();

  const switchToGlassmorphism = () => setVariant('glassmorphism');
  const switchToCorporate = () => setVariant('corporate');
  const switchToDark = () => setVariant('dark');
  const switchToNeon = () => setVariant('neon');

  return {
    switchToGlassmorphism,
    switchToCorporate,
    switchToDark,
    switchToNeon,
    toggleColorScheme,
  };
}