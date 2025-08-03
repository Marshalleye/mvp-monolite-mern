import React, { ReactNode, useEffect, useState } from 'react';
import { Container, ContainerProps } from '@mantine/core';
import { detectPlatform, detectTelegramMode, getConstraintStyles } from './constraints';

interface ResponsiveContainerProps extends Omit<ContainerProps, 'size'> {
  children: ReactNode;
  platform?: 'auto' | 'telegram' | 'web' | 'mobile';
  telegramMode?: 'compact' | 'expanded' | 'fullscreen' | 'auto';
  fluid?: boolean;
}

export function ResponsiveContainer({ 
  children, 
  platform = 'auto',
  telegramMode = 'auto',
  fluid = false,
  style,
  ...props 
}: ResponsiveContainerProps) {
  const [detectedPlatform, setDetectedPlatform] = useState<string>('web');
  const [detectedMode, setDetectedMode] = useState<string>('expanded');

  useEffect(() => {
    if (platform === 'auto') {
      setDetectedPlatform(detectPlatform());
    } else {
      setDetectedPlatform(platform);
    }

    if (telegramMode === 'auto' && detectedPlatform === 'telegram') {
      setDetectedMode(detectTelegramMode() || 'expanded');
    } else {
      setDetectedMode(telegramMode);
    }
  }, [platform, telegramMode, detectedPlatform]);

  const constraintStyles = getConstraintStyles(detectedPlatform, detectedMode);

  return (
    <Container
      fluid={fluid}
      style={{
        ...constraintStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </Container>
  );
}