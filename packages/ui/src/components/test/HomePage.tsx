import React from 'react';
import { 
  Stack, 
  Card, 
  Text, 
  Button, 
  Group, 
  Badge,
  Grid,
  Title,
  Progress,
} from '@mantine/core';
import { 
  IconWallet, 
  IconCreditCard, 
  IconTrendingUp, 
  IconUsers 
} from '@tabler/icons-react';
import { ResponsiveContainer, ResponsiveGrid } from '../../layout';
import { useNavigation } from '../../navigation/NavigationProvider';
import { useTheme } from '../../theme';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  trend?: string;
  color?: string;
}

function StatCard({ title, value, icon: Icon, trend, color = 'blue' }: StatCardProps) {
  return (
    <Card shadow="lg" radius="lg" withBorder p="lg">
      <Group justify="space-between" mb="md">
        <div>
          <Text size="sm" c="dimmed" fw={500}>{title}</Text>
          <Text size="xl" fw={700}>{value}</Text>
        </div>
        <div style={{ color: `var(--mantine-color-${color}-6)` }}>
          <Icon size={32} />
        </div>
      </Group>
      
      {trend && (
        <Group gap="xs">
          <Badge variant="light" color={color} size="sm">
            {trend}
          </Badge>
          <Text size="xs" c="dimmed">vs last month</Text>
        </Group>
      )}
    </Card>
  );
}

export function HomePage() {
  const { navigate } = useNavigation();
  const { variant, colorScheme } = useTheme();

  return (
    <ResponsiveContainer>
      <Stack gap="xl" py="lg">
        {/* Welcome Section */}
        <Card shadow="xl" radius="xl" withBorder p="xl">
          <Group justify="space-between" align="flex-start">
            <div>
              <Title order={2} mb="xs">Welcome Back! 👋</Title>
              <Text c="dimmed" size="lg">
                Your crypto payment platform is ready
              </Text>
            </div>
            <Group gap="xs">
              <Badge variant="light" color="blue">{variant}</Badge>
              <Badge variant="light" color="orange">{colorScheme}</Badge>
            </Group>
          </Group>
        </Card>

        {/* Quick Stats */}
        <ResponsiveGrid telegramCols={1} mobileCols={2} tabletCols={2} desktopCols={4}>
          <StatCard
            title="Total Balance"
            value="$12,345"
            icon={IconWallet}
            trend="+12.5%"
            color="green"
          />
          <StatCard
            title="Transactions"
            value="147"
            icon={IconCreditCard}
            trend="+8.2%"
            color="blue"
          />
          <StatCard
            title="Growth"
            value="+23%"
            icon={IconTrendingUp}
            trend="+5.1%"
            color="grape"
          />
          <StatCard
            title="Users"
            value="2,431"
            icon={IconUsers}
            trend="+15.3%"
            color="yellow"
          />
        </ResponsiveGrid>

        {/* Quick Actions */}
        <Card shadow="lg" radius="lg" withBorder p="lg">
          <Title order={3} mb="md">Quick Actions</Title>
          <ResponsiveGrid telegramCols={1} mobileCols={2} desktopCols={3}>
            <Button 
              size="lg" 
              radius="lg"
              variant="light"
              leftSection={<IconCreditCard size={20} />}
              onClick={() => navigate('payments')}
            >
              Send Payment
            </Button>
            <Button 
              size="lg" 
              radius="lg"
              variant="light"
              leftSection={<IconWallet size={20} />}
              onClick={() => navigate('profile')}
            >
              View Wallet
            </Button>
            <Button 
              size="lg" 
              radius="lg"
              variant="light"
              leftSection={<IconTrendingUp size={20} />}
            >
              Analytics
            </Button>
          </ResponsiveGrid>
        </Card>

        {/* Activity Feed */}
        <Card shadow="lg" radius="lg" withBorder p="lg">
          <Title order={3} mb="md">Recent Activity</Title>
          <Stack gap="md">
            {[
              { action: 'Payment received', amount: '+$500', time: '2 min ago' },
              { action: 'Crypto converted', amount: '0.05 BTC', time: '1 hour ago' },
              { action: 'Payment sent', amount: '-$250', time: '3 hours ago' },
            ].map((activity, index) => (
              <Group key={index} justify="space-between" p="sm" style={{ borderRadius: '8px', backgroundColor: 'var(--mantine-color-gray-0)' }}>
                <div>
                  <Text fw={500}>{activity.action}</Text>
                  <Text size="sm" c="dimmed">{activity.time}</Text>
                </div>
                <Text fw={600} size="lg">{activity.amount}</Text>
              </Group>
            ))}
          </Stack>
        </Card>
      </Stack>
    </ResponsiveContainer>
  );
}