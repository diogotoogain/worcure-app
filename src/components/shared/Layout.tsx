import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text.light};
`;

const Header = styled.header`
  background-color: ${props => props.theme.colors.secondary};
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled.a`
  color: ${props => props.theme.colors.text.light};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Main = styled.main`
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const Footer = styled.footer`
  background-color: ${props => props.theme.colors.secondary};
  padding: 1rem 2rem;
  text-align: center;
  color: ${props => props.theme.colors.text.dark};
`;

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header>
        <Nav>
          <Link href="/" passHref legacyBehavior>
            <NavLink>Home</NavLink>
          </Link>
          <Link href="/student/dashboard" passHref legacyBehavior>
            <NavLink>Dashboard</NavLink>
          </Link>
          <Link href="/student/flix" passHref legacyBehavior>
            <NavLink>FLIX</NavLink>
          </Link>
          <Link href="/student/profile" passHref legacyBehavior>
            <NavLink>Profile</NavLink>
          </Link>
        </Nav>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <p>© 2025 WORCURE App. All rights reserved.</p>
      </Footer>
    </LayoutContainer>
  );
};

export default Layout;
