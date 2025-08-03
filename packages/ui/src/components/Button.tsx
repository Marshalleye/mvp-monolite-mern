import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  style = {},
  ...props 
}) => {
  const baseStyles: React.CSSProperties = {
    padding: '8px 16px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
    transition: 'all 0.2s ease',
    outline: 'none',
    ...style,
  };

  const variantStyles = {
    primary: {
      backgroundColor: '#007AFF',
      color: '#FFFFFF',
    },
    secondary: {
      backgroundColor: '#5856D6',
      color: '#FFFFFF',
    },
    glass: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: '#000000',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(0, 0, 0, 0.1)',
    },
  };

  return (
    <button
      className={`btn btn--${variant} ${className}`}
      style={{ ...baseStyles, ...variantStyles[variant] }}
      {...props}
    >
      {children}
    </button>
  );
};