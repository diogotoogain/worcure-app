import React, { ReactNode } from 'react'
import styled from 'styled-components'
import Navigation from '../shared/Navigation'

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};
`

const Sidebar = styled.aside`
  width: 250px;
  background-color: ${props => props.theme.colors.secondary};
  padding: 20px;
  border-right: 1px solid #333;
`

const MainContent = styled.main`
  flex: 1;
  padding: 30px;
  color: ${props => props.theme.colors.text.light};
`

const Header = styled.header`
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #333;
`

const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-size: 28px;
  margin: 0;
`

const ProgressBar = styled.div`
  margin-top: 15px;
  background-color: ${props => props.theme.colors.secondary};
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
`

const ProgressFill = styled.div<{ progress: number }>`
  height: 100%;
  width: ${props => props.progress}%;
  background-color: ${props => props.theme.colors.primary};
  transition: width 0.3s ease;
`

const ProgressText = styled.div`
  color: ${props => props.theme.colors.text.dark};
  font-size: 13px;
  margin-top: 5px;
`

interface StudentLayoutProps {
  children: ReactNode
  title?: string
  progress?: number
}

export default function StudentLayout({ children, title = 'Meus Cursos', progress = 0 }: StudentLayoutProps) {
  return (
    <LayoutContainer>
      <Sidebar>
        <Navigation role="student" />
      </Sidebar>
      <MainContent>
        <Header>
          <TitleSection>
            <Title>{title}</Title>
          </TitleSection>
          {progress > 0 && (
            <>
              <ProgressBar>
                <ProgressFill progress={progress} />
              </ProgressBar>
              <ProgressText>{progress}% concluído</ProgressText>
            </>
          )}
        </Header>
        {children}
      </MainContent>
    </LayoutContainer>
  )
}
