import React from 'react';
import styled from 'styled-components';

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
`;

const Header = styled.header`
  background: ${props => props.theme.colors.secondary};
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: ${props => props.theme.colors.primary};
  margin: 0;
  font-size: 28px;
  font-weight: 800;
`;

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header>
        <HeaderContent>
          <Logo>WORCURE</Logo>
        </HeaderContent>
      </Header>
      <Main>{children}</Main>
    </LayoutContainer>
  );
};
