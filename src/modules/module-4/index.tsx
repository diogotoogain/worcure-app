import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import ModuleExercises from './exercises'

const ModuleContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
`

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`

const Subtitle = styled.p`
  color: ${props => props.theme.colors.text.dark};
  font-size: 1.1rem;
`

const ContentSection = styled.div`
  background: ${props => props.theme.colors.secondary};
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.text.light};
  line-height: 1.8;

  h2 {
    color: ${props => props.theme.colors.primary};
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  h3, h4 {
    color: ${props => props.theme.colors.text.light};
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
  }

  ul, ol {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1rem;
  }

  strong {
    color: ${props => props.theme.colors.primary};
  }
`

export default function Module4() {
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch('/modules/module-4/content.md')
      .then(res => res.text())
      .then(text => setContent(text))
      .catch(() => {
        // Fallback content if fetch fails
        setContent('# Módulo 4: Planejamento Estratégico\n\nConteúdo em desenvolvimento...')
      })
  }, [])

  return (
    <ModuleContainer>
      <Header>
        <Title>Módulo 4</Title>
        <Subtitle>Planejamento Estratégico</Subtitle>
      </Header>

      <ContentSection>
        <ReactMarkdown>{content}</ReactMarkdown>
      </ContentSection>

      <ModuleExercises />
    </ModuleContainer>
  )
}
