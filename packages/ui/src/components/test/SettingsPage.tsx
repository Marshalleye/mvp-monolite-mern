import React, { useState } from 'react';
import { 
  Stack, 
  Card, 
  Text, 
  Button, 
  Switch,
  Select,
  Group,
  Title,
  Divider,
  ActionIcon,
  Alert,
} from '@mantine/core';
import { 
  IconSettings, 
  IconBell, 
  IconShield,
  IconPalette,
  IconLanguage,
  IconDownload,
  IconTrash,
  IconInfoCircle,
} from '@tabler/icons-react';
import { ResponsiveContainer } from '../../layout';
import { useThemeSwitcher } from '../../theme';

export function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [biometrics, setBiometrics] = useState(false);
  const [language, setLanguage] = useState('en');
  const { toggleColorScheme } = useThemeSwitcher();

  return (
    <ResponsiveContainer>
      <Stack gap="xl" py="lg">
        <Card shadow="xl" radius="xl" withBorder p="xl">
          <Group>
            <IconSettings size={32} color="var(--mantine-color-blue-6)" />
            <div>
              <Title order={2}>⚙️ Settings</Title>
              <Text c="dimmed" size="lg">
                Customize your app experience
              </Text>
            </div>
          </Group>
        </Card>

        {/* Notifications Settings */}
        <Card shadow="lg" radius="lg" withBorder p="lg">
          <Group justify="space-between" mb="lg">
            <Group>
              <IconBell size={24} />
              <Title order={3}>Notifications</Title>
            </Group>
          </Group>

          <Stack gap="md">
            <Group justify="space-between">
              <div>
                <Text fw={500}>Push Notifications</Text>
                <Text size="sm" c="dimmed">Receive notifications for important updates</Text>
              </div>
              <Switch
                checked={notifications}
                onChange={(event) => setNotifications(event.currentTarget.checked)}
                size="lg"
              />
            </Group>

            <Group justify="space-between">
              <div>
                <Text fw={500}>Payment Alerts</Text>
                <Text size="sm" c="dimmed">Get notified when payments are received</Text>
              </div>
              <Switch defaultChecked size="lg" />
            </Group>

            <Group justify="space-between">
              <div>
                <Text fw={500}>Security Alerts</Text>
                <Text size="sm" c="dimmed">Important security notifications</Text>
              </div>
              <Switch defaultChecked size="lg" />
            </Group>
          </Stack>
        </Card>

        {/* Security Settings */}
        <Card shadow="lg" radius="lg" withBorder p="lg">
          <Group justify="space-between" mb="lg">
            <Group>
              <IconShield size={24} />
              <Title order={3}>Security</Title>
            </Group>
          </Group>

          <Stack gap="md">
            <Group justify="space-between">
              <div>
                <Text fw={500}>Biometric Authentication</Text>
                <Text size="sm" c="dimmed">Use fingerprint or face ID to unlock</Text>
              </div>
              <Switch
                checked={biometrics}
                onChange={(event) => setBiometrics(event.currentTarget.checked)}
                size="lg"
              />
            </Group>

            <Group justify="space-between">
              <div>
                <Text fw={500}>Two-Factor Authentication</Text>
                <Text size="sm" c="dimmed">Add an extra layer of security</Text>
              </div>
              <Button variant="light" size="sm">Setup</Button>
            </Group>

            <Group justify="space-between">
              <div>
                <Text fw={500}>Auto-Lock</Text>
                <Text size="sm" c="dimmed">Lock app after inactivity</Text>
              </div>
              <Select
                size="sm"
                w={120}
                data={['1 min', '5 min', '15 min', '1 hour']}
                defaultValue="5 min"
              />
            </Group>
          </Stack>
        </Card>

        {/* Appearance Settings */}
        <Card shadow="lg" radius="lg" withBorder p="lg">
          <Group justify="space-between" mb="lg">
            <Group>
              <IconPalette size={24} />
              <Title order={3}>Appearance</Title>
            </Group>
          </Group>

          <Stack gap="md">
            <Group justify="space-between">
              <div>
                <Text fw={500}>Dark Mode</Text>
                <Text size="sm" c="dimmed">Switch between light and dark themes</Text>
              </div>
              <Button variant="light" size="sm" onClick={toggleColorScheme}>
                Toggle
              </Button>
            </Group>

            <Group justify="space-between">
              <div>
                <Text fw={500}>Language</Text>
                <Text size="sm" c="dimmed">Choose your preferred language</Text>
              </div>
              <Select
                size="sm"
                w={120}
                value={language}
                onChange={(value) => setLanguage(value || 'en')}
                data={[
                  { value: 'en', label: 'English' },
                  { value: 'es', label: 'Español' },
                  { value: 'fr', label: 'Français' },
                  { value: 'de', label: 'Deutsch' },
                ]}
              />
            </Group>
          </Stack>
        </Card>

        {/* Data & Privacy */}
        <Card shadow="lg" radius="lg" withBorder p="lg">
          <Title order={3} mb="lg">Data & Privacy</Title>

          <Stack gap="md">
            <Group justify="space-between">
              <Group>
                <IconDownload size={20} />
                <div>
                  <Text fw={500}>Export Data</Text>
                  <Text size="sm" c="dimmed">Download all your account data</Text>
                </div>
              </Group>
              <Button variant="light" size="sm">Export</Button>
            </Group>

            <Divider />

            <Alert icon={<IconInfoCircle size={16} />} color="blue" variant="light">
              <Text size="sm">
                Your data is encrypted and secure. We never share your personal information with third parties.
              </Text>
            </Alert>

            <Group justify="space-between">
              <Group>
                <IconTrash size={20} color="var(--mantine-color-red-6)" />
                <div>
                  <Text fw={500} c="red">Delete Account</Text>
                  <Text size="sm" c="dimmed">Permanently delete your account and data</Text>
                </div>
              </Group>
              <Button variant="light" color="red" size="sm">Delete</Button>
            </Group>
          </Stack>
        </Card>
      </Stack>
    </ResponsiveContainer>
  );
}