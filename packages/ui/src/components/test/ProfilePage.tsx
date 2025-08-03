import React from 'react';
import { 
  Stack, 
  Card, 
  Text, 
  Button, 
  Group,
  Title,
  Avatar,
  Badge,
  SimpleGrid,
  Progress,
  Divider,
} from '@mantine/core';
import { 
  IconUser, 
  IconShield, 
  IconWallet,
  IconBell,
  IconEdit,
} from '@tabler/icons-react';
import { ResponsiveContainer } from '../../layout';

export function ProfilePage() {
  return (
    <ResponsiveContainer>
      <Stack gap="xl" py="lg">
        {/* Profile Header */}
        <Card shadow="xl" radius="xl" withBorder p="xl">
          <Group>
            <Avatar 
              size={80} 
              radius="xl"
              style={{ 
                background: 'linear-gradient(45deg, var(--mantine-color-blue-5), var(--mantine-color-grape-5))' 
              }}
            >
              <IconUser size={40} />
            </Avatar>
            <div style={{ flex: 1 }}>
              <Title order={2}>John Doe</Title>
              <Text c="dimmed" size="lg">john.doe@example.com</Text>
              <Group gap="xs" mt="xs">
                <Badge variant="light" color="green">Verified</Badge>
                <Badge variant="light" color="blue">Premium</Badge>
              </Group>
            </div>
            <Button leftSection={<IconEdit size={16} />} variant="light">
              Edit
            </Button>
          </Group>
        </Card>

        {/* Account Stats */}
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
          <Card shadow="lg" radius="lg" withBorder p="lg">
            <Group justify="space-between" mb="md">
              <Text fw={600}>Account Security</Text>
              <IconShield size={24} color="var(--mantine-color-green-6)" />
            </Group>
            <Progress value={85} color="green" size="lg" radius="xl" mb="sm" />
            <Text size="sm" c="dimmed">85% Complete</Text>
          </Card>

          <Card shadow="lg" radius="lg" withBorder p="lg">
            <Group justify="space-between" mb="md">
              <Text fw={600}>Wallet Balance</Text>
              <IconWallet size={24} color="var(--mantine-color-blue-6)" />
            </Group>
            <Text size="xl" fw={700}>$12,345.67</Text>
            <Text size="sm" c="dimmed">+12.5% this month</Text>
          </Card>
        </SimpleGrid>

        {/* Settings & Preferences */}
        <Card shadow="lg" radius="lg" withBorder p="lg">
          <Title order={3} mb="lg">Settings & Preferences</Title>
          
          <Stack gap="md">
            <Group justify="space-between" p="md" style={{ borderRadius: '8px', backgroundColor: 'var(--mantine-color-gray-0)' }}>
              <Group>
                <IconBell size={20} />
                <div>
                  <Text fw={500}>Notifications</Text>
                  <Text size="sm" c="dimmed">Push notifications and alerts</Text>
                </div>
              </Group>
              <Button variant="light" size="sm">Configure</Button>
            </Group>

            <Group justify="space-between" p="md" style={{ borderRadius: '8px', backgroundColor: 'var(--mantine-color-gray-0)' }}>
              <Group>
                <IconShield size={20} />
                <div>
                  <Text fw={500}>Security</Text>
                  <Text size="sm" c="dimmed">Two-factor authentication</Text>
                </div>
              </Group>
              <Button variant="light" size="sm">Manage</Button>
            </Group>

            <Group justify="space-between" p="md" style={{ borderRadius: '8px', backgroundColor: 'var(--mantine-color-gray-0)' }}>
              <Group>
                <IconWallet size={20} />
                <div>
                  <Text fw={500}>Connected Wallets</Text>
                  <Text size="sm" c="dimmed">Manage your crypto wallets</Text>
                </div>
              </Group>
              <Button variant="light" size="sm">View</Button>
            </Group>
          </Stack>
        </Card>

        {/* Activity Summary */}
        <Card shadow="lg" radius="lg" withBorder p="lg">
          <Title order={3} mb="md">Recent Activity</Title>
          <Text c="dimmed" mb="lg">Your account activity over the last 30 days</Text>
          
          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
            <div style={{ textAlign: 'center' }}>
              <Text size="xl" fw={700} c="orange">35</Text>
              <Text size="sm" c="dimmed">Payments Received</Text>
            </div>
          </SimpleGrid>
        </Card>
      </Stack>
    </ResponsiveContainer>
  );
}