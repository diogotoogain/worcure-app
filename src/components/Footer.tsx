import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.secondary};
  padding: 40px 0 20px;
  margin-top: 60px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.text.dark};
  margin: 8px 0;
  font-size: 14px;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 20px;
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.text.dark};
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinks>
          <FooterLink href="/about">About</FooterLink>
          <FooterLink href="/privacy">Privacy</FooterLink>
          <FooterLink href="/terms">Terms</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
        </FooterLinks>
        <FooterText>© 2025 WORCURE MEMBERS. All rights reserved.</FooterText>
        <FooterText>Empowering your wellness journey</FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
