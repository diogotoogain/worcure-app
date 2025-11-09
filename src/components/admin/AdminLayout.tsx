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

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-size: 28px;
  margin: 0;
`

interface AdminLayoutProps {
  children: ReactNode
  title?: string
}

export default function AdminLayout({ children, title = 'Admin Dashboard' }: AdminLayoutProps) {
  return (
    <LayoutContainer>
      <Sidebar>
        <Navigation role="admin" />
      </Sidebar>
      <MainContent>
        <Header>
          <Title>{title}</Title>
        </Header>
        {children}
      </MainContent>
    </LayoutContainer>
  )
}
