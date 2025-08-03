import React, { useState } from 'react';
import { 
  Stack, 
  Card, 
  Text, 
  Button, 
  TextInput,
  Select,
  Group,
  Title,
  Badge,
  Tabs,
  NumberInput,
} from '@mantine/core';
import { 
  IconCreditCard, 
  IconCurrencyBitcoin, 
  IconSend,
  IconDownload,
} from '@tabler/icons-react';
import { ResponsiveContainer } from '../../layout';

export function PaymentsPage() {
  const [activeTab, setActiveTab] = useState<string | null>('send');
  const [paymentMethod, setPaymentMethod] = useState<string | null>('card');

  return (
    <ResponsiveContainer>
      <Stack gap="xl" py="lg">
        <Card shadow="xl" radius="xl" withBorder p="xl">
          <Title order={2} mb="md">💸 Payments</Title>
          <Text c="dimmed" size="lg">
            Send and receive payments with ease
          </Text>
        </Card>

        <Tabs value={activeTab} onChange={setActiveTab}>
          <Tabs.List grow>
            <Tabs.Tab value="send" leftSection={<IconSend size={16} />}>
              Send Money
            </Tabs.Tab>
            <Tabs.Tab value="receive" leftSection={<IconDownload size={16} />}>
              Receive
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="send" pt="xl">
            <Card shadow="lg" radius="lg" withBorder p="lg">
              <Stack gap="lg">
                <Group grow>
                  <Button
                    variant={paymentMethod === 'card' ? 'filled' : 'light'}
                    leftSection={<IconCreditCard size={20} />}
                    onClick={() => setPaymentMethod('card')}
                    size="lg"
                    radius="lg"
                  >
                    Credit Card
                  </Button>
                  <Button
                    variant={paymentMethod === 'crypto' ? 'filled' : 'light'}
                    leftSection={<IconCurrencyBitcoin size={20} />}
                    onClick={() => setPaymentMethod('crypto')}
                    size="lg"
                    radius="lg"
                  >
                    Cryptocurrency
                  </Button>
                </Group>

                <NumberInput
                  label="Amount"
                  placeholder="0.00"
                  size="lg"
                  leftSection="$"
                  min={0}
                  decimalScale={2}
                />

                <TextInput
                  label="Recipient"
                  placeholder={paymentMethod === 'crypto' ? 'Wallet address or ENS' : 'Email or phone'}
                  size="lg"
                />

                <Select
                  label="Currency"
                  placeholder="Select currency"
                  size="lg"
                  data={
                    paymentMethod === 'crypto' 
                      ? ['BTC', 'ETH', 'USDC', 'USDT']
                      : ['USD', 'EUR', 'GBP', 'JPY']
                  }
                />

                <TextInput
                  label="Message (Optional)"
                  placeholder="What's this for?"
                  size="lg"
                />

                <Button size="xl" radius="lg" fullWidth>
                  Send Payment
                </Button>
              </Stack>
            </Card>
          </Tabs.Panel>

          <Tabs.Panel value="receive" pt="xl">
            <Card shadow="lg" radius="lg" withBorder p="lg">
              <Stack gap="lg" align="center">
                <div style={{ 
                  width: '200px', 
                  height: '200px', 
                  backgroundColor: 'var(--mantine-color-gray-1)', 
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px dashed var(--mantine-color-gray-4)'
                }}>
                  <Text size="sm" c="dimmed" ta="center">
                    QR Code<br />Will Appear Here
                  </Text>
                </div>

                <Stack gap="sm" align="center">
                  <Badge size="lg" variant="light">
                    Your Payment Address
                  </Badge>
                  <Text size="sm" c="dimmed" ta="center" maw={300}>
                    0x1234...5678
                  </Text>
                </Stack>

                <Group>
                  <Button variant="light" size="lg">
                    Copy Address
                  </Button>
                  <Button variant="light" size="lg">
                    Share QR
                  </Button>
                </Group>
              </Stack>
            </Card>
          </Tabs.Panel>
        </Tabs>
      </Stack>
    </ResponsiveContainer>
  );
}