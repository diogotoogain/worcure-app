import React from 'react';
import styled from 'styled-components';

interface ProgressBarProps {
  progress: number; // 0-100
  label?: string;
  showPercentage?: boolean;
  color?: string;
}

const ProgressContainer = styled.div`
  width: 100%;
  margin: 8px 0;
`;

const ProgressLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  color: ${props => props.theme.colors.text.dark};
  font-size: 14px;
`;

const ProgressTrack = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressFill = styled.div<{ progress: number; color?: string }>`
  height: 100%;
  width: ${props => props.progress}%;
  background: ${props => props.color || props.theme.colors.primary};
  border-radius: 4px;
  transition: width 0.3s ease;
`;

export const ProgressBar: React.FC<ProgressBarProps> = ({ 
  progress, 
  label, 
  showPercentage = true,
  color 
}) => {
  const normalizedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <ProgressContainer>
      {(label || showPercentage) && (
        <ProgressLabel>
          <span>{label}</span>
          {showPercentage && <span>{normalizedProgress}%</span>}
        </ProgressLabel>
      )}
      <ProgressTrack>
        <ProgressFill progress={normalizedProgress} color={color} />
      </ProgressTrack>
    </ProgressContainer>
  );
};
