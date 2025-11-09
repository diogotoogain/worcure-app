import React, { ReactNode } from 'react'
import styled from 'styled-components'

const LayoutContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text.light};
`

const Header = styled.header`
  background-color: ${props => props.theme.colors.secondary};
  padding: 20px 30px;
  border-bottom: 1px solid #333;
`

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
`

const Content = styled.main`
  padding: 30px;
  max-width: 1200px;
  margin: 0 auto;
`

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <LayoutContainer>
      <Header>
        <Logo>WORCURE MEMBERS</Logo>
      </Header>
      <Content>
        {children}
      </Content>
    </LayoutContainer>
  )
}
