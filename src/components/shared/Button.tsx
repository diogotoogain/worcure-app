import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

const StyledButton = styled.button<{ variant: string; fullWidth: boolean }>`
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  width: ${props => props.fullWidth ? '100%' : 'auto'};

  ${props => {
    switch (props.variant) {
      case 'primary':
        return `
          background: ${props.theme.colors.primary};
          color: ${props.theme.colors.text.light};
          &:hover:not(:disabled) {
            opacity: 0.9;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(26, 159, 139, 0.3);
          }
        `;
      case 'secondary':
        return `
          background: ${props.theme.colors.secondary};
          color: ${props.theme.colors.text.light};
          &:hover:not(:disabled) {
            opacity: 0.9;
          }
        `;
      case 'outline':
        return `
          background: transparent;
          border: 2px solid ${props.theme.colors.primary};
          color: ${props.theme.colors.primary};
          &:hover:not(:disabled) {
            background: ${props.theme.colors.primary};
            color: ${props.theme.colors.text.light};
          }
        `;
      default:
        return '';
    }
  }}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  disabled = false,
  type = 'button',
  fullWidth = false
}) => {
  return (
    <StyledButton 
      onClick={onClick} 
      variant={variant} 
      disabled={disabled}
      type={type}
      fullWidth={fullWidth}
    >
      {children}
    </StyledButton>
  );
};
