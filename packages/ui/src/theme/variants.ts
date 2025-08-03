// packages/ui/src/theme/variants.ts - COLOR SCHEME AWARE VERSION
import { createTheme } from '@mantine/core';
import { allColors, blue, grape, gray, green, red, yellow, brand } from './colors';

// Base configuration
const baseConfig = {
  fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  fontFamilyMonospace: 'JetBrains Mono, Fira Code, Monaco, Consolas, monospace',
  
  headings: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontWeight: '600',
    sizes: {
      h1: { fontSize: '2rem', lineHeight: '1.2' },
      h2: { fontSize: '1.75rem', lineHeight: '1.25' },
      h3: { fontSize: '1.5rem', lineHeight: '1.3' },
      h4: { fontSize: '1.25rem', lineHeight: '1.35' },
      h5: { fontSize: '1.125rem', lineHeight: '1.4' },
      h6: { fontSize: '1rem', lineHeight: '1.45' },
    },
  },

  radius: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem'
  },
  defaultRadius: 'md' as const,

  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
  },

  breakpoints: {
    xs: '36em',
    sm: '48em',
    md: '62em',
    lg: '75em',
    xl: '87.5em'
  },
};

// GLASSMORPHISM THEME with light/dark support
export const glassmorphismTheme = createTheme({
  ...baseConfig,
  primaryColor: 'blue',
  primaryShade: { light: 5, dark: 6 },
  colors: allColors,

  shadows: {
    xs: '0 2px 8px rgba(0, 0, 0, 0.15)',
    sm: '0 4px 12px rgba(0, 0, 0, 0.15)',
    md: '0 8px 24px rgba(0, 0, 0, 0.15)',
    lg: '0 12px 32px rgba(0, 0, 0, 0.2)',
    xl: '0 16px 48px rgba(0, 0, 0, 0.25)',
  },

  components: {
    Card: {
      defaultProps: {
        shadow: 'xl',
        radius: 'xl',
        withBorder: true,
      },
      styles: (theme: any) => ({
        root: {
          backdropFilter: 'blur(20px) saturate(180%)',
          backgroundColor: theme.colorScheme === 'dark' 
            ? 'rgba(0, 0, 0, 0.3)' 
            : 'rgba(255, 255, 255, 0.15)',
          border: theme.colorScheme === 'dark'
            ? '1px solid rgba(255, 255, 255, 0.1)'
            : '1px solid rgba(255, 255, 255, 0.3)',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: theme.colorScheme === 'dark'
              ? 'rgba(0, 0, 0, 0.4)'
              : 'rgba(255, 255, 255, 0.25)',
            transform: 'translateY(-2px)',
          },
        },
      }),
    },

    Paper: {
      defaultProps: {
        shadow: 'lg',
        radius: 'lg',
      },
      styles: (theme: any) => ({
        root: {
          backdropFilter: 'blur(15px) saturate(180%)',
          backgroundColor: theme.colorScheme === 'dark'
            ? 'rgba(0, 0, 0, 0.2)'
            : 'rgba(255, 255, 255, 0.1)',
          border: theme.colorScheme === 'dark'
            ? '1px solid rgba(255, 255, 255, 0.1)'
            : '1px solid rgba(255, 255, 255, 0.2)',
        },
      }),
    },

    Button: {
      defaultProps: {
        size: 'md',
        radius: 'lg',
      },
      styles: {
        root: {
          backdropFilter: 'blur(10px)',
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
          },
        },
      },
    },

    TextInput: {
      defaultProps: {
        size: 'md',
        radius: 'lg',
      },
      styles: (theme : any) => ({
        input: {
          backdropFilter: 'blur(10px)',
          backgroundColor: theme.colorScheme === 'dark'
            ? 'rgba(0, 0, 0, 0.2)'
            : 'rgba(255, 255, 255, 0.1)',
          border: theme.colorScheme === 'dark'
            ? '1px solid rgba(255, 255, 255, 0.2)'
            : '1px solid rgba(255, 255, 255, 0.3)',
          color: theme.colorScheme === 'dark' ? '#ffffff' : 'inherit',
          '&:focus': {
            backgroundColor: theme.colorScheme === 'dark'
              ? 'rgba(0, 0, 0, 0.3)'
              : 'rgba(255, 255, 255, 0.2)',
            borderColor: 'var(--mantine-color-blue-5)',
            boxShadow: '0 0 0 3px rgba(34, 139, 230, 0.2)',
          },
        },
      }),
    },
  },
});

// CORPORATE THEME with light/dark support
export const corporateTheme = createTheme({
  ...baseConfig,
  primaryColor: 'gray',
  primaryShade: { light: 8, dark: 3 },
  colors: allColors,

  shadows: {
    xs: '0 1px 3px rgba(0, 0, 0, 0.1)',
    sm: '0 2px 6px rgba(0, 0, 0, 0.1)',
    md: '0 4px 12px rgba(0, 0, 0, 0.1)',
    lg: '0 8px 24px rgba(0, 0, 0, 0.1)',
    xl: '0 12px 32px rgba(0, 0, 0, 0.1)',
  },

  components: {
    Card: {
      defaultProps: {
        shadow: 'sm',
        radius: 'md',
        withBorder: true,
      },
      styles: (theme: any) => ({
        root: {
          backgroundColor: theme.colorScheme === 'dark' ? '#1a1b23' : '#ffffff',
          border: theme.colorScheme === 'dark' 
            ? '1px solid #373a40' 
            : '1px solid #e5e7eb',
          transition: 'all 0.2s ease',
          '&:hover': {
            borderColor: theme.colorScheme === 'dark' ? '#4a4d55' : '#d1d5db',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          },
        },
      }),
    },

    Paper: {
      styles: (theme: any) => ({
        root: {
          backgroundColor: theme.colorScheme === 'dark' ? '#25262b' : '#f9fafb',
          border: theme.colorScheme === 'dark' 
            ? '1px solid #373a40' 
            : '1px solid #e5e7eb',
        },
      }),
    },

    Button: {
      defaultProps: {
        size: 'md',
        radius: 'sm',
      },
      styles: {
        root: {
          fontWeight: 500,
        },
      },
    },

    TextInput: {
      defaultProps: {
        size: 'md',
        radius: 'sm',
      },
      styles: (theme: any) => ({
        input: {
          backgroundColor: theme.colorScheme === 'dark' ? '#25262b' : '#ffffff',
          border: theme.colorScheme === 'dark' 
            ? '1px solid #373a40' 
            : '1px solid #d1d5db',
          color: theme.colorScheme === 'dark' ? '#ffffff' : 'inherit',
          '&:focus': {
            borderColor: theme.colorScheme === 'dark' 
              ? '#4a4d55' 
              : '#6b7280',
            boxShadow: theme.colorScheme === 'dark'
              ? '0 0 0 2px rgba(255, 255, 255, 0.1)'
              : '0 0 0 2px rgba(107, 114, 128, 0.1)',
          },
        },
      }),
    },
  },
});

// DARK THEME (always dark)
export const darkTheme = createTheme({
  ...baseConfig,
  primaryColor: 'blue',
  primaryShade: 6,
  colors: allColors,

  components: {
    Card: {
      defaultProps: {
        shadow: 'lg',
        radius: 'lg',
      },
      styles: {
        root: {
          backgroundColor: '#25262b',
          border: '1px solid #373a40',
          color: '#ffffff',
        },
      },
    },

    Paper: {
      styles: {
        root: {
          backgroundColor: '#1a1b23',
          border: '1px solid #373a40',
          color: '#ffffff',
        },
      },
    },

    TextInput: {
      styles: {
        input: {
          backgroundColor: '#25262b',
          border: '1px solid #373a40',
          color: '#ffffff',
          '&::placeholder': {
            color: '#909296',
          },
          '&:focus': {
            borderColor: 'var(--mantine-color-blue-6)',
            backgroundColor: '#2c2e33',
          },
        },
        label: {
          color: '#c1c2c5',
        },
      },
    },
  },
});

// NEON THEME with light/dark support
export const neonTheme = createTheme({
  ...baseConfig,
  primaryColor: 'grape',
  primaryShade: { light: 5, dark: 4 },
  colors: allColors,

  shadows: {
    xs: '0 0 10px rgba(204, 93, 232, 0.3)',
    sm: '0 0 20px rgba(204, 93, 232, 0.3)',
    md: '0 0 30px rgba(204, 93, 232, 0.4)',
    lg: '0 0 40px rgba(204, 93, 232, 0.5)',
    xl: '0 0 50px rgba(204, 93, 232, 0.6)',
  },

  components: {
    Card: {
      defaultProps: {
        shadow: 'lg',
        radius: 'xl',
        withBorder: true,
      },
      styles: (theme  : any) => ({
        root: {
          backgroundColor: theme.colorScheme === 'dark' ? '#0a0a0a' : '#1a1a1a',
          border: '2px solid #cc5de8',
          boxShadow: '0 0 30px rgba(204, 93, 232, 0.4), inset 0 0 30px rgba(204, 93, 232, 0.1)',
          color: '#ffffff',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 0 40px rgba(204, 93, 232, 0.6), inset 0 0 40px rgba(204, 93, 232, 0.2)',
            transform: 'scale(1.02)',
          },
        },
      }),
    },

    Button: {
      defaultProps: {
        radius: 'xl',
      },
      styles: {
        root: {
          backgroundColor: 'transparent',
          border: '2px solid #cc5de8',
          color: '#cc5de8',
          boxShadow: '0 0 20px rgba(204, 93, 232, 0.3)',
          '&:hover': {
            backgroundColor: '#cc5de8',
            color: '#000000',
            boxShadow: '0 0 30px rgba(204, 93, 232, 0.8)',
          },
        },
      },
    },

    TextInput: {
      styles: {
        input: {
          backgroundColor: '#1a1a1a',
          border: '2px solid #cc5de8',
          color: '#ffffff',
          boxShadow: '0 0 15px rgba(204, 93, 232, 0.2)',
          '&:focus': {
            boxShadow: '0 0 25px rgba(204, 93, 232, 0.5)',
          },
        },
      },
    },
  },
});

// Theme variants
export const themeVariants = {
  glassmorphism: glassmorphismTheme,
  corporate: corporateTheme,
  dark: darkTheme,
  neon: neonTheme,
} as const;

export type ThemeVariant = keyof typeof themeVariants;
export const defaultTheme = glassmorphismTheme;