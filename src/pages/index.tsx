import React from 'react';
import styled from 'styled-components';
import { Layout } from '@/components/shared';
import Link from 'next/link';

const Hero = styled.div`
  text-align: center;
  padding: 80px 20px;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  border-radius: 16px;
  margin-bottom: 60px;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 800;
  color: ${props => props.theme.colors.text.light};
  margin: 0 0 20px 0;
`;

const HeroSubtitle = styled.p`
  font-size: 20px;
  color: ${props => props.theme.colors.text.dark};
  margin: 0 0 40px 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled.a`
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &.primary {
    background: ${props => props.theme.colors.text.light};
    color: ${props => props.theme.colors.primary};
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
  }
  
  &.secondary {
    background: transparent;
    border: 2px solid ${props => props.theme.colors.text.light};
    color: ${props => props.theme.colors.text.light};
    
    &:hover {
      background: ${props => props.theme.colors.text.light};
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
`;

const Feature = styled.div`
  text-align: center;
`;

const FeatureIcon = styled.div`
  font-size: 64px;
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.theme.colors.text.light};
  margin: 0 0 12px 0;
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  color: ${props => props.theme.colors.text.dark};
  line-height: 1.6;
`;

export default function Home() {
  return (
    <Layout>
      <Hero>
        <HeroTitle>Bem-vindo ao WORCURE</HeroTitle>
        <HeroSubtitle>
          Transforme sua vida pessoal e profissional com nosso programa completo de desenvolvimento
        </HeroSubtitle>
        <ButtonGroup>
          <Link href="/student/dashboard" passHref legacyBehavior>
            <Button className="primary">Começar Agora</Button>
          </Link>
          <Link href="/auth/login" passHref legacyBehavior>
            <Button className="secondary">Fazer Login</Button>
          </Link>
        </ButtonGroup>
      </Hero>

      <Features>
        <Feature>
          <FeatureIcon>📚</FeatureIcon>
          <FeatureTitle>13 Módulos Principais</FeatureTitle>
          <FeatureDescription>
            Programa estruturado cobrindo todos os aspectos do desenvolvimento pessoal e profissional
          </FeatureDescription>
        </Feature>

        <Feature>
          <FeatureIcon>⚡</FeatureIcon>
          <FeatureTitle>720 Módulos FLIX</FeatureTitle>
          <FeatureDescription>
            Conteúdo rápido e prático em 6 categorias essenciais para seu crescimento contínuo
          </FeatureDescription>
        </Feature>

        <Feature>
          <FeatureIcon>📊</FeatureIcon>
          <FeatureTitle>Métricas de Progresso</FeatureTitle>
          <FeatureDescription>
            Acompanhe seu desenvolvimento com métricas detalhadas e insights personalizados
          </FeatureDescription>
        </Feature>
      </Features>
    </Layout>
  );
}
