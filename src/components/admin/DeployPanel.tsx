import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  padding: 25px;
  border-radius: 8px;
  margin-bottom: 20px;
`

const SectionTitle = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-size: 20px;
  margin-bottom: 20px;
`

const DeployInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 25px;
`

const InfoCard = styled.div`
  background-color: ${props => props.theme.colors.background};
  padding: 15px;
  border-radius: 4px;
  border: 1px solid #333;
`

const InfoLabel = styled.div`
  color: ${props => props.theme.colors.text.dark};
  font-size: 12px;
  margin-bottom: 5px;
`

const InfoValue = styled.div`
  color: ${props => props.theme.colors.text.light};
  font-size: 16px;
  font-weight: 500;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  background-color: ${props => 
    props.variant === 'secondary' ? props.theme.colors.secondary : props.theme.colors.primary};
  color: white;
  padding: 10px 20px;
  border: ${props => props.variant === 'secondary' ? '1px solid #333' : 'none'};
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const LogContainer = styled.div`
  background-color: ${props => props.theme.colors.background};
  padding: 15px;
  border-radius: 4px;
  border: 1px solid #333;
  max-height: 300px;
  overflow-y: auto;
  font-family: monospace;
  font-size: 12px;
  color: ${props => props.theme.colors.text.dark};
`

const LogEntry = styled.div<{ type?: 'info' | 'success' | 'error' }>`
  margin-bottom: 5px;
  color: ${props => {
    if (props.type === 'success') return '#4caf50';
    if (props.type === 'error') return '#f44336';
    return props.theme.colors.text.dark;
  }};
`

export default function DeployPanel() {
  const [loading, setLoading] = useState(false)
  const [logs, setLogs] = useState<Array<{ message: string; type: 'info' | 'success' | 'error'; timestamp: Date }>>([
    { message: 'System ready for deployment', type: 'info', timestamp: new Date() }
  ])

  const addLog = (message: string, type: 'info' | 'success' | 'error' = 'info') => {
    setLogs(prev => [...prev, { message, type, timestamp: new Date() }])
  }

  const handleDeploy = async () => {
    setLoading(true)
    addLog('Starting deployment...', 'info')

    try {
      // TODO: Implement actual deployment logic
      await new Promise(resolve => setTimeout(resolve, 2000))
      addLog('Build successful', 'success')
      await new Promise(resolve => setTimeout(resolve, 1000))
      addLog('Deployment completed', 'success')
    } catch (error) {
      addLog('Deployment failed', 'error')
    } finally {
      setLoading(false)
    }
  }

  const handleRollback = async () => {
    setLoading(true)
    addLog('Starting rollback...', 'info')

    try {
      // TODO: Implement actual rollback logic
      await new Promise(resolve => setTimeout(resolve, 1500))
      addLog('Rollback completed', 'success')
    } catch (error) {
      addLog('Rollback failed', 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <SectionTitle>Deployment Panel</SectionTitle>
      
      <DeployInfo>
        <InfoCard>
          <InfoLabel>Current Version</InfoLabel>
          <InfoValue>v1.0.0</InfoValue>
        </InfoCard>
        <InfoCard>
          <InfoLabel>Last Deploy</InfoLabel>
          <InfoValue>Never</InfoValue>
        </InfoCard>
        <InfoCard>
          <InfoLabel>Status</InfoLabel>
          <InfoValue>Ready</InfoValue>
        </InfoCard>
        <InfoCard>
          <InfoLabel>Environment</InfoLabel>
          <InfoValue>Production</InfoValue>
        </InfoCard>
      </DeployInfo>

      <ButtonGroup>
        <Button onClick={handleDeploy} disabled={loading}>
          {loading ? 'Deploying...' : 'Deploy to Production'}
        </Button>
        <Button variant="secondary" onClick={handleRollback} disabled={loading}>
          Rollback
        </Button>
      </ButtonGroup>

      <SectionTitle style={{ fontSize: '16px', marginTop: '30px' }}>Deployment Logs</SectionTitle>
      <LogContainer>
        {logs.map((log, index) => (
          <LogEntry key={index} type={log.type}>
            [{log.timestamp.toLocaleTimeString()}] {log.message}
          </LogEntry>
        ))}
      </LogContainer>
    </Container>
  )
}
