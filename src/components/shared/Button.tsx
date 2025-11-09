import React from 'react';
import styled from 'styled-components';

const ButtonElement = styled.button<{ variant?: 'primary' | 'secondary' }>`
  background-color: ${props => 
    props.variant === 'secondary' 
      ? props.theme.colors.secondary 
      : props.theme.colors.primary};
  color: ${props => props.theme.colors.text.light};
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.1s;
  
  &:hover {
    opacity: 0.9;
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  disabled = false,
  type = 'button',
  className,
  style
}) => {
  return (
    <ButtonElement 
      variant={variant} 
      onClick={onClick} 
      disabled={disabled}
      type={type}
      className={className}
      style={style}
    >
      {children}
    </ButtonElement>
  );
};

export default Button;
