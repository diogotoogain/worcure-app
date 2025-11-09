import React from 'react'
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

  h3 {
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

const moduleContent = `# Módulo 1: Introdução ao Método WORCURE

## Bem-vindo ao WORCURE MEMBERS

O Método WORCURE é um sistema completo de desenvolvimento pessoal e profissional que combina autoconhecimento, planejamento estratégico e ação consistente para transformar sua vida.

### O que é o Método WORCURE?

WORCURE significa **Work + Cure** (Trabalho + Cura), representando a jornada de transformação através do trabalho consciente em todas as áreas da sua vida.

### Os 7 Pilares do WORCURE

1. **Autoconhecimento**: Entender quem você é e o que realmente importa para você
2. **Visão Clara**: Definir objetivos significativos e alcançáveis
3. **Planejamento Estratégico**: Criar um roadmap para seu sucesso
4. **Ação Consistente**: Implementar rotinas e hábitos produtivos
5. **Gestão de Energia**: Otimizar sua energia física, mental e emocional
6. **Relacionamentos**: Construir conexões significativas e networking estratégico
7. **Crescimento Contínuo**: Comprometer-se com a evolução constante

### Como funciona este programa?

Este programa é dividido em 13 módulos progressivos, cada um focando em um aspecto crucial do seu desenvolvimento:

- **Módulos 1-3**: Fundação (Autoconhecimento e Direção)
- **Módulos 4-7**: Execução (Planejamento e Produtividade)
- **Módulos 8-10**: Expansão (Relacionamentos e Recursos)
- **Módulos 11-13**: Legado (Crescimento e Impacto)

### O que você vai alcançar?

Ao completar este programa, você será capaz de:

- ✅ Ter clareza sobre seus valores, propósito e objetivos
- ✅ Criar e executar planos estratégicos eficazes
- ✅ Desenvolver hábitos e rotinas de alta performance
- ✅ Gerenciar sua energia e produtividade de forma otimizada
- ✅ Construir relacionamentos profissionais significativos
- ✅ Alcançar equilíbrio entre todas as áreas da vida
- ✅ Desenvolver liderança e capacidade de influência
- ✅ Criar um legado duradouro e impacto positivo

### Próximos Passos

Cada módulo inclui:
- **Conteúdo teórico**: Conceitos e frameworks práticos
- **Exercícios práticos**: Atividades para aplicar o conhecimento
- **Ferramentas**: Templates e recursos para seu desenvolvimento

Prepare-se para uma jornada transformadora! 🚀
`

export default function Module1() {
  return (
    <ModuleContainer>
      <Header>
        <Title>Módulo 1</Title>
        <Subtitle>Introdução ao Método WORCURE</Subtitle>
      </Header>

      <ContentSection>
        <ReactMarkdown>{moduleContent}</ReactMarkdown>
      </ContentSection>

      <ModuleExercises />
    </ModuleContainer>
  )
}
