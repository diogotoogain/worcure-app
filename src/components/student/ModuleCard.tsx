import React from 'react';
import styled from 'styled-components';
import { Card, ProgressBar } from '../shared';

interface ModuleCardProps {
  moduleNumber: number;
  title: string;
  description: string;
  progress: number;
  isLocked: boolean;
  onClick?: () => void;
}

const StyledModuleCard = styled(Card)<{ isLocked: boolean }>`
  position: relative;
  opacity: ${props => props.isLocked ? 0.6 : 1};
  
  ${props => props.isLocked && `
    cursor: not-allowed;
    &:hover {
      transform: none;
    }
  `}
`;

const ModuleHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const ModuleNumber = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text.light};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  margin-right: 16px;
`;

const ModuleInfo = styled.div`
  flex: 1;
`;

const ModuleTitle = styled.h4`
  margin: 0 0 4px 0;
  color: ${props => props.theme.colors.text.light};
  font-size: 18px;
`;

const ModuleDescription = styled.p`
  margin: 0;
  color: ${props => props.theme.colors.text.dark};
  font-size: 14px;
  line-height: 1.5;
`;

const LockIcon = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 24px;
  color: ${props => props.theme.colors.text.dark};
`;

export const ModuleCard: React.FC<ModuleCardProps> = ({
  moduleNumber,
  title,
  description,
  progress,
  isLocked,
  onClick
}) => {
  return (
    <StyledModuleCard 
      onClick={!isLocked ? onClick : undefined}
      isLocked={isLocked}
    >
      {isLocked && <LockIcon>🔒</LockIcon>}
      <ModuleHeader>
        <ModuleNumber>{moduleNumber}</ModuleNumber>
        <ModuleInfo>
          <ModuleTitle>{title}</ModuleTitle>
        </ModuleInfo>
      </ModuleHeader>
      <ModuleDescription>{description}</ModuleDescription>
      <ProgressBar progress={progress} label="Progresso" />
    </StyledModuleCard>
  );
};
