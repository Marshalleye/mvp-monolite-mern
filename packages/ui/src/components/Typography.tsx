import React from 'react';
import { JSX } from 'react';

export interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption';
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Typography: React.FC<TypographyProps> = ({ 
  variant = 'body', 
  children, 
  className = '',
  style = {},
  ...props 
}) => {
  const variantStyles = {
    h1: { fontSize: '32px', fontWeight: '700', lineHeight: '1.2' },
    h2: { fontSize: '24px', fontWeight: '600', lineHeight: '1.3' },
    h3: { fontSize: '20px', fontWeight: '600', lineHeight: '1.4' },
    h4: { fontSize: '16px', fontWeight: '600', lineHeight: '1.4' },
    body: { fontSize: '14px', fontWeight: '400', lineHeight: '1.5' },
    caption: { fontSize: '12px', fontWeight: '400', lineHeight: '1.4' },
  };

  const Element = variant.startsWith('h') ? variant as keyof JSX.IntrinsicElements : 'p';

  return React.createElement(
    Element,
    {
      className: `typography typography--${variant} ${className}`,
      style: { 
        margin: 0,
        color: '#333333',
        ...variantStyles[variant], 
        ...style 
      },
      ...props
    },
    children
  );
};