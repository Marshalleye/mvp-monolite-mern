import React from 'react';
import { 
  AppShell, 
  Group, 
  Text, 
  NavLink,
  ScrollArea,
  ActionIcon,
  Burger,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { 
  IconHome, 
  IconCreditCard, 
  IconSettings, 
  IconUser,
  IconPalette,
} from '@tabler/icons-react';
import { useNavigation } from './NavigationProvider';
import { useThemeSwitcher } from '../theme';

const NAV_ITEMS = [
  { id: 'home', label: 'Dashboard', icon: IconHome },
  { id: 'payments', label: 'Payments', icon: IconCreditCard },
  { id: 'profile', label: 'Profile', icon: IconUser },
  { id: 'themes', label: 'Themes', icon: IconPalette },
  { id: 'settings', label: 'Settings', icon: IconSettings },
];

interface WebNavigationProps {
  children: React.ReactNode;
}

export function WebNavigation({ children }: WebNavigationProps) {
  const [opened, { toggle }] = useDisclosure();
  const { currentRoute, navigate } = useNavigation();
  const { toggleColorScheme } = useThemeSwitcher();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Text fw={700} size="xl">MVP Platform</Text>
          </Group>
          
          <ActionIcon 
            variant="subtle" 
            onClick={toggleColorScheme}
            size="lg"
          >
            🌙
          </ActionIcon>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <ScrollArea>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.id}
              label={item.label}
              leftSection={<item.icon size={20} />}
              active={currentRoute === item.id}
              onClick={() => navigate(item.id)}
              mb="xs"
            />
          ))}
        </ScrollArea>
      </AppShell.Navbar>

      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}