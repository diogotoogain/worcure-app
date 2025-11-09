# Documentação Admin - WORCURE

## Visão Geral

Este guia fornece informações para administradores da plataforma WORCURE sobre como gerenciar usuários, conteúdo e métricas.

## Dashboard Administrativo

### Acesso

- URL: `/admin/dashboard`
- Requer: Permissão de administrador
- Login: admin@worcure.com

### Estatísticas Principais

O dashboard admin mostra:

1. **Total de Usuários**
   - Número total de contas registradas
   - Crescimento mensal/anual
   - Segmentação por plano

2. **Usuários Ativos**
   - Usuários com atividade nos últimos 7 dias
   - Taxa de engajamento
   - Tempo médio de sessão

3. **Taxa de Conclusão Média**
   - Porcentagem média de conclusão dos módulos
   - Por módulo específico
   - Por categoria FLIX

4. **Receita Total**
   - Receita de assinaturas premium
   - Crescimento mensal
   - Previsões

## Gestão de Usuários

### Lista de Usuários

A lista exibe:
- Nome do usuário
- Email de contato
- Progresso geral (%)
- Última atividade
- Tipo de assinatura (Gratuito/Premium)

### Ações Disponíveis

1. **Visualizar Perfil**
   - Detalhes completos do usuário
   - Histórico de atividades
   - Módulos completados

2. **Editar Usuário**
   - Alterar informações básicas
   - Modificar tipo de assinatura
   - Resetar senha

3. **Suspender/Ativar**
   - Suspender acesso temporariamente
   - Reativar conta suspensa
   - Enviar notificação ao usuário

4. **Gerar Relatório**
   - Relatório individual de progresso
   - Certificados emitidos
   - Tempo de estudo

### Filtros e Busca

- **Buscar por**: Nome, email, ID
- **Filtrar por**: 
  - Tipo de assinatura
  - Status (ativo/inativo)
  - Progresso (0-25%, 25-50%, 50-75%, 75-100%)
  - Data de registro
  - Última atividade

## Gestão de Conteúdo

### Módulos Principais

#### Visualizar Módulos

- Lista completa dos 13 módulos
- Status de cada módulo
- Estatísticas de conclusão

#### Editar Módulo

Permite modificar:
- Título e descrição
- Objetivos de aprendizagem
- Seções de conteúdo
- Exercícios e quizzes
- Duração estimada

#### Adicionar Conteúdo

- Upload de vídeos
- Adicionar textos/artigos
- Criar exercícios práticos
- Configurar quizzes
- Adicionar recursos extras

### FLIX Modules

#### Gerenciamento em Massa

- Criar múltiplos FLIX
- Importar/Exportar conteúdo
- Atualizar em lote
- Organizar por categoria

#### Categorias

Gerenciar as 6 categorias:
- Mindset
- Produtividade
- Liderança
- Negócios
- Saúde
- Relacionamentos

Para cada categoria:
- Visualizar todos os FLIX
- Adicionar novos FLIX
- Editar existentes
- Definir ordem de exibição
- Configurar níveis (iniciante/intermediário/avançado)

## Analytics e Relatórios

### Métricas de Engajamento

#### Usuários

- Taxa de retenção (dia 1, 7, 30)
- Usuários ativos diários/mensais
- Tempo médio de sessão
- Páginas mais visitadas

#### Conteúdo

- Módulos mais populares
- Taxa de conclusão por módulo
- FLIX mais assistidos
- Tempo médio de conclusão

#### Progresso

- Distribuição de progresso dos usuários
- Taxa de abandono por módulo
- Pontos de dificuldade identificados
- Módulos com melhor/pior performance

### Relatórios Disponíveis

1. **Relatório de Usuários**
   - Lista completa com métricas
   - Exportar CSV/Excel
   - Filtros customizáveis

2. **Relatório de Conteúdo**
   - Performance de módulos
   - Estatísticas de FLIX
   - Identificação de gaps

3. **Relatório Financeiro**
   - Receita por período
   - Conversões gratuito → premium
   - Churn rate
   - LTV (Lifetime Value)

4. **Relatório de Atividade**
   - Padrões de uso
   - Horários de pico
   - Dispositivos utilizados
   - Origem de tráfego

### Dashboards Customizados

Criar visualizações personalizadas:
- Gráficos de linha (tendências)
- Gráficos de barras (comparações)
- Gráficos de pizza (distribuições)
- Mapas de calor (atividade)
- Funis de conversão

## Gestão de Assinaturas

### Tipos de Plano

**Gratuito**
- 3 primeiros módulos
- 50 módulos FLIX
- Estatísticas básicas

**Premium**
- Acesso completo
- 13 módulos principais
- 720 módulos FLIX
- Certificados
- Suporte prioritário

### Ações de Assinatura

1. **Upgrade Manual**
   - Converter usuário para premium
   - Definir período de teste
   - Aplicar desconto

2. **Downgrade**
   - Reverter para plano gratuito
   - Manter histórico de progresso
   - Notificar usuário

3. **Extensão**
   - Adicionar tempo extra
   - Pausar assinatura
   - Reativar assinatura

4. **Cancelamento**
   - Cancelar assinatura
   - Manter acesso até fim do período
   - Feedback de cancelamento

## Configurações da Plataforma

### Configurações Gerais

- Nome da plataforma
- Logo e branding
- Cores do tema
- Informações de contato

### Configurações de Email

- Templates de email
- Notificações automáticas
- Configuração SMTP
- Testes de envio

### Configurações de Conteúdo

- Ordem dos módulos
- Requisitos de desbloqueio
- Nota mínima para aprovação
- Tempo de expiração de sessão

### Configurações de Segurança

- Política de senhas
- Autenticação de dois fatores
- Logs de acesso
- Backup automático

## Sistema de Notificações

### Tipos de Notificação

1. **Email**
   - Boas-vindas
   - Conclusão de módulo
   - Lembretes de estudo
   - Renovação de assinatura

2. **In-App**
   - Novo conteúdo disponível
   - Conquistas desbloqueadas
   - Mensagens do suporte
   - Atualizações da plataforma

3. **Push (futuro)**
   - Lembretes de estudo
   - Sequência em risco
   - Novos FLIX na categoria favorita

### Gerenciar Notificações

- Criar templates
- Agendar envios
- Segmentar destinatários
- Analisar taxa de abertura
- A/B testing

## Suporte ao Usuário

### Sistema de Tickets

- Visualizar tickets abertos
- Responder tickets
- Categorizar por tipo
- Definir prioridade
- Encaminhar para especialista

### Base de Conhecimento

- Artigos de ajuda
- FAQs
- Tutoriais em vídeo
- Guias passo a passo

### Chat ao Vivo

- Responder em tempo real
- Ver histórico de conversas
- Transferir para outro admin
- Salvar respostas rápidas

## Manutenção

### Backup e Recuperação

- Backups automáticos diários
- Backup manual sob demanda
- Restaurar de backup
- Exportar dados

### Monitoramento

- Status do servidor
- Performance da aplicação
- Erros e logs
- Alertas automáticos

### Atualizações

- Verificar atualizações
- Changelog
- Agendar manutenção
- Notificar usuários

## Melhores Práticas

1. **Monitore Regularmente**
   - Verifique métricas diariamente
   - Identifique problemas cedo
   - Aja proativamente

2. **Mantenha Conteúdo Atualizado**
   - Revise módulos periodicamente
   - Atualize informações desatualizadas
   - Adicione novos FLIX regularmente

3. **Engaje com Usuários**
   - Responda feedback rapidamente
   - Implemente sugestões válidas
   - Comunique mudanças claramente

4. **Analise Dados**
   - Use dados para decisões
   - Identifique padrões
   - Otimize continuamente

5. **Mantenha Segurança**
   - Atualize senhas regularmente
   - Revise permissões
   - Monitore acessos suspeitos

## Suporte Técnico

Para questões técnicas:
- Email: tech@worcure.com
- Documentação API: /docs/api
- Status: status.worcure.com

## Recursos Adicionais

- Manual completo: /docs/admin/manual.pdf
- Vídeos tutoriais: /admin/tutorials
- Comunidade de admins: community.worcure.com
- API Documentation: /docs/api/README.md
