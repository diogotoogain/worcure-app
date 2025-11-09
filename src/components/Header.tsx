import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.secondary};
  padding: 16px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  font-size: 24px;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  gap: 24px;
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.text.light};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link href="/" passHref legacyBehavior>
          <Logo>WORCURE MEMBERS</Logo>
        </Link>
        <Nav>
          <Link href="/" passHref legacyBehavior>
            <NavLink>Home</NavLink>
          </Link>
          <Link href="/modules" passHref legacyBehavior>
            <NavLink>Modules</NavLink>
          </Link>
          <Link href="/flix" passHref legacyBehavior>
            <NavLink>FLIX</NavLink>
          </Link>
          <Link href="/dashboard" passHref legacyBehavior>
            <NavLink>Dashboard</NavLink>
          </Link>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
