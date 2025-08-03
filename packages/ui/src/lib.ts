// packages/ui/src/lib.ts (Main export file)

// Theme system
export * from './theme';

// Layout system
export * from './layout';

// Navigation system
export * from './navigation';

// Test components (for showcase/development)
export * from './components/test';

// Re-export all core Mantine components
export {
  // Layout
  AppShell,
  Container,
  Grid,
  SimpleGrid,
  Flex,
  Group,
  Stack,
  Box,
  Center,
  Space,
  Divider,

  // Inputs
  Button,
  ActionIcon,
  CloseButton,
  CopyButton,
  FileButton,
  FileInput,
  UnstyledButton,
  TextInput,
  PasswordInput,
  Textarea,
  Select,
  MultiSelect,
  Checkbox,
  Radio,
  Switch,
  Slider,
  RangeSlider,

  // Display
  Text,
  Title,
  Anchor,
  Mark,
  Code,
  Kbd,
  Card,
  Paper,
  Image,
  Avatar,
  Badge,
  Pill,
  Indicator,
  ThemeIcon,

  // Navigation
  Tabs,
  Breadcrumbs,
  Pagination,
  NavLink,
  Burger,

  // Feedback
  Loader,
  Progress,
  RingProgress,
  Skeleton,
  Alert,
  Notification,

  // Overlays
  Modal,
  Drawer,
  Popover,
  Tooltip,
  Menu,
  Overlay,

  // Data display
  Table,
  Accordion,
  Timeline,
  Stepper,

  // Miscellaneous
  ScrollArea,
  Portal,
  ColorSchemeScript,
} from '@mantine/core';

// Additional Mantine packages
export {
  DateInput,
  DatePicker,
  DateTimePicker,
  TimeInput,
  MonthPicker,
  YearPicker,
} from '@mantine/dates';

export {
  Dropzone,
} from '@mantine/dropzone';

export {
  Carousel,
} from '@mantine/carousel';

export {
  spotlight,
} from '@mantine/spotlight';