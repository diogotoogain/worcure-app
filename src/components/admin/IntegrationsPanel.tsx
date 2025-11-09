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

const IntegrationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
`

const IntegrationCard = styled.div<{ active: boolean }>`
  background-color: ${props => props.theme.colors.background};
  padding: 20px;
  border-radius: 4px;
  border: 2px solid ${props => props.active ? props.theme.colors.primary : '#333'};
  cursor: pointer;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
  }
`

const IntegrationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

const IntegrationName = styled.h3`
  color: ${props => props.theme.colors.text.light};
  font-size: 16px;
  margin: 0;
`

const StatusBadge = styled.span<{ active: boolean }>`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
  background-color: ${props => props.active ? '#1e7e34' : '#7e1e1e'};
  color: white;
`

const IntegrationDescription = styled.p`
  color: ${props => props.theme.colors.text.dark};
  font-size: 13px;
  margin: 0;
  line-height: 1.5;
`

interface Integration {
  id: string
  name: string
  description: string
  active: boolean
}

export default function IntegrationsPanel() {
  const [integrations, setIntegrations] = useState<Integration[]>([
    {
      id: 'openai',
      name: 'OpenAI',
      description: 'AI-powered content generation and analysis',
      active: false
    },
    {
      id: 'gemini',
      name: 'Google Gemini',
      description: 'Advanced AI model for multimodal tasks',
      active: false
    },
    {
      id: 'vimeo',
      name: 'Vimeo',
      description: 'Video hosting and streaming platform',
      active: false
    },
    {
      id: 'stripe',
      name: 'Stripe',
      description: 'Payment processing integration',
      active: false
    },
    {
      id: 'sendgrid',
      name: 'SendGrid',
      description: 'Email delivery service',
      active: false
    },
    {
      id: 'analytics',
      name: 'Analytics',
      description: 'Track user behavior and engagement',
      active: false
    }
  ])

  const toggleIntegration = (id: string) => {
    setIntegrations(prev =>
      prev.map(integration =>
        integration.id === id
          ? { ...integration, active: !integration.active }
          : integration
      )
    )
  }

  return (
    <Container>
      <SectionTitle>Integrations</SectionTitle>
      
      <IntegrationGrid>
        {integrations.map(integration => (
          <IntegrationCard
            key={integration.id}
            active={integration.active}
            onClick={() => toggleIntegration(integration.id)}
          >
            <IntegrationHeader>
              <IntegrationName>{integration.name}</IntegrationName>
              <StatusBadge active={integration.active}>
                {integration.active ? 'Active' : 'Inactive'}
              </StatusBadge>
            </IntegrationHeader>
            <IntegrationDescription>{integration.description}</IntegrationDescription>
          </IntegrationCard>
        ))}
      </IntegrationGrid>
    </Container>
  )
}
