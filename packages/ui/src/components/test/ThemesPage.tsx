import React from 'react';
import { 
  Stack, 
  Card, 
  Text, 
  Button, 
  Group,
  Title,
  SimpleGrid,
  Paper,
  Badge,
} from '@mantine/core';
import { ResponsiveContainer } from '../../layout';
import { useTheme, useThemeSwitcher } from '../../theme';

interface ThemePreviewProps {
  name: string;
  description: string;
  isActive: boolean;
  onSelect: () => void;
  previewColor: string;
}

function ThemePreview({ name, description, isActive, onSelect, previewColor }: ThemePreviewProps) {
  return (
    <Card 
      shadow="lg" 
      radius="lg" 
      withBorder 
      p="lg"
      style={{
        cursor: 'pointer',
        transform: isActive ? 'scale(1.02)' : 'scale(1)',
        transition: 'all 0.2s ease',
      }}
      onClick={onSelect}
    >
      <Stack gap="md">
        <Group justify="space-between">
          <Title order={4}>{name}</Title>
          {isActive && <Badge color="blue">Active</Badge>}
        </Group>
        
        <Paper 
          h={60} 
          radius="md"
          style={{ backgroundColor: previewColor }}
        />
        
        <Text size="sm" c="dimmed">{description}</Text>
        
        <Button 
          variant={isActive ? 'filled' : 'light'}
          size="sm"
          radius="lg"
          disabled={isActive}
        >
          {isActive ? 'Current Theme' : 'Apply Theme'}
        </Button>
      </Stack>
    </Card>
  );
}

export function ThemesPage() {
  const { variant, colorScheme } = useTheme();
  const { 
    switchToGlassmorphism, 
    switchToCorporate, 
    switchToDark, 
    switchToNeon,
    toggleColorScheme 
  } = useThemeSwitcher();

  const themes = [
    {
      name: 'Glassmorphism',
      description: 'Modern frosted glass effects with transparency and blur',
      isActive: variant === 'glassmorphism',
      onSelect: switchToGlassmorphism,
      previewColor: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
    },
    {
      name: 'Corporate',
      description: 'Clean, professional design for business applications',
      isActive: variant === 'corporate',
      onSelect: switchToCorporate,
      previewColor: '#f8fafc',
    },
    {
      name: 'Dark Mode',
      description: 'High contrast dark theme for better focus',
      isActive: variant === 'dark',
      onSelect: switchToDark,
      previewColor: '#1a1b23',
    },
    {
      name: 'Neon Cyber',
      description: 'Cyberpunk-inspired with glowing effects',
      isActive: variant === 'neon',
      onSelect: switchToNeon,
      previewColor: 'linear-gradient(135deg, #0a0a0a, #1a0a1a)',
    },
  ];

  return (
    <ResponsiveContainer>
      <Stack gap="xl" py="lg">
        <Card shadow="xl" radius="xl" withBorder p="xl">
          <Group justify="space-between">
            <div>
              <Title order={2} mb="xs">🎨 Theme Customization</Title>
              <Text c="dimmed" size="lg">
                Transform your app's visual experience
              </Text>
            </div>
            <Group gap="xs">
              <Badge variant="light" color="blue">{variant}</Badge>
              <Badge variant="light" color="orange">{colorScheme}</Badge>
            </Group>
          </Group>
        </Card>

        <Card shadow="lg" radius="lg" withBorder p="lg">
          <Group justify="space-between" mb="lg">
            <Title order={3}>Color Scheme</Title>
            <Button 
              variant="gradient"
              gradient={{ from: 'blue', to: 'purple' }}
              onClick={toggleColorScheme}
              size="lg"
              radius="lg"
            >
              Switch to {colorScheme === 'light' ? 'Dark' : 'Light'} Mode
            </Button>
          </Group>
        </Card>

        <Title order={3}>Available Themes</Title>
        
        <SimpleGrid 
          cols={{ base: 1, sm: 2, lg: 3, xl: 4 }}
          spacing="lg"
        >
          {themes.map((theme) => (
            <ThemePreview key={theme.name} {...theme} />
          ))}
        </SimpleGrid>

        <Card shadow="lg" radius="lg" withBorder p="lg">
          <Title order={4} mb="md">Theme Features</Title>
          <Text c="dimmed">
            Each theme includes complete component styling, responsive design, 
            and platform-specific optimizations. Themes work seamlessly across 
            Telegram Mini Apps, web applications, and mobile platforms.
          </Text>
        </Card>
      </Stack>
    </ResponsiveContainer>
  );
}