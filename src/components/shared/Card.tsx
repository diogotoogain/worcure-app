import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
`;

const CardTitle = styled.h3`
  margin: 0 0 1rem 0;
  color: ${props => props.theme.colors.primary};
`;

const CardContent = styled.div`
  color: ${props => props.theme.colors.text.light};
`;

export interface CardProps {
  title?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className }) => {
  return (
    <CardContainer className={className}>
      {title && <CardTitle>{title}</CardTitle>}
      <CardContent>{children}</CardContent>
    </CardContainer>
  );
};

export default Card;
