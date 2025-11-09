import React from 'react';
import styled from 'styled-components';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  onClick?: () => void;
  className?: string;
}

const StyledCard = styled.div<{ clickable: boolean }>`
  background: ${props => props.theme.colors.secondary};
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: ${props => props.clickable ? 'pointer' : 'default'};

  ${props => props.clickable && `
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
  `}
`;

const CardTitle = styled.h3`
  color: ${props => props.theme.colors.text.light};
  margin: 0 0 8px 0;
  font-size: 24px;
  font-weight: 700;
`;

const CardSubtitle = styled.p`
  color: ${props => props.theme.colors.text.dark};
  margin: 0 0 16px 0;
  font-size: 14px;
`;

const CardContent = styled.div`
  color: ${props => props.theme.colors.text.dark};
`;

export const Card: React.FC<CardProps> = ({ children, title, subtitle, onClick, className }) => {
  return (
    <StyledCard clickable={!!onClick} onClick={onClick} className={className}>
      {title && <CardTitle>{title}</CardTitle>}
      {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
      <CardContent>{children}</CardContent>
    </StyledCard>
  );
};
