// packages/ui/src/theme/index.tsx
export * from './colors';
export * from './variants';
export * from './ThemeProvider';

// Re-export theme-related Mantine utilities
export {
  useMantineColorScheme,
  useMantineTheme,
  getThemeColor,
  parseThemeColor,
  rem,
  em,
  px,
} from '@mantine/core';

// Export Mantine hooks for convenience
export {
  useToggle,
  useDisclosure,
  useLocalStorage,
  useSessionStorage,
  useHover,
  useClickOutside,
  useViewportSize,
  useMediaQuery,
  useDebouncedValue,
  useInterval,
  useTimeout,
  useResizeObserver,
  useElementSize,
  useWindowEvent,
} from '@mantine/hooks';

// Export form utilities
export {
  useForm,
  isEmail,
  isNotEmpty,
  hasLength,
  matches,
  isInRange,
} from '@mantine/form';

// Export notifications
export { notifications } from '@mantine/notifications';

// Export modals
export { modals } from '@mantine/modals';