import React from 'react';
import { 
  Group, 
  ActionIcon, 
  Text, 
  Paper,
  UnstyledButton,
  Stack,
} from '@mantine/core';
import { 
  IconHome, 
  IconCreditCard, 
  IconSettings, 
  IconUser,
  IconArrowLeft,
} from '@tabler/icons-react';
import { useNavigation } from './NavigationProvider';

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', icon: IconHome },
  { id: 'payments', label: 'Payments', icon: IconCreditCard },
  { id: 'profile', label: 'Profile', icon: IconUser },
  { id: 'settings', label: 'Settings', icon: IconSettings },
];

export function TelegramNavigation() {
  const { currentRoute, navigate, canGoBack, goBack } = useNavigation();

  return (
    <Stack gap={0}>
      {/* Header with back button */}
      {canGoBack && (
        <Paper p="sm" radius={0} withBorder>
          <Group>
            <ActionIcon 
              variant="subtle" 
              onClick={goBack}
              size="lg"
            >
              <IconArrowLeft size={20} />
            </ActionIcon>
            <Text fw={600} size="lg">
              {NAV_ITEMS.find(item => item.id === currentRoute)?.label || 'Page'}
            </Text>
          </Group>
        </Paper>
      )}

      {/* Bottom navigation tabs */}
      <Paper 
        radius={0} 
        withBorder 
        style={{ 
          position: 'fixed', 
          bottom: 0, 
          left: 0, 
          right: 0, 
          zIndex: 100 
        }}
      >
        <Group justify="space-around" p="xs">
          {NAV_ITEMS.map((item) => (
            <UnstyledButton
              key={item.id}
              onClick={() => navigate(item.id)}
              style={{
                padding: '8px 12px',
                borderRadius: '8px',
                backgroundColor: currentRoute === item.id ? 'var(--mantine-color-blue-light)' : 'transparent',
                transition: 'all 0.2s ease',
              }}
            >
              <Stack align="center" gap={4}>
                <item.icon 
                  size={20} 
                  color={currentRoute === item.id ? 'var(--mantine-color-blue-6)' : 'var(--mantine-color-gray-6)'}
                />
                <Text 
                  size="xs" 
                  fw={500}
                  c={currentRoute === item.id ? 'blue.6' : 'dimmed'}
                >
                  {item.label}
                </Text>
              </Stack>
            </UnstyledButton>
          ))}
        </Group>
      </Paper>
    </Stack>
  );
}