import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Layout from '@/components/shared/Layout'

const Container = styled.div`
  max-width: 400px;
  margin: 50px auto;
`

const LoginCard = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
`

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-size: 28px;
  margin-bottom: 10px;
  text-align: center;
`

const Subtitle = styled.p`
  color: ${props => props.theme.colors.text.dark};
  text-align: center;
  margin-bottom: 30px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Label = styled.label`
  color: ${props => props.theme.colors.text.dark};
  font-size: 14px;
`

const Input = styled.input`
  padding: 12px;
  background-color: ${props => props.theme.colors.background};
  border: 1px solid #333;
  border-radius: 4px;
  color: ${props => props.theme.colors.text.light};
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`

const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const ErrorMessage = styled.div`
  background-color: #7e1e1e;
  color: white;
  padding: 12px;
  border-radius: 4px;
  font-size: 14px;
  text-align: center;
`

export default function Home() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError('Credenciais inválidas. Tente novamente.')
      } else {
        // Redirect based on user role (simplified for now)
        // In production, check user role from session
        router.push('/app/dashboard')
      }
    } catch (error) {
      setError('Erro ao fazer login. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout>
      <Container>
        <LoginCard>
          <Title>WORCURE MEMBERS</Title>
          <Subtitle>Faça login para acessar sua conta</Subtitle>
          
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                required
              />
            </FormGroup>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <Button type="submit" disabled={loading}>
              {loading ? 'Entrando...' : 'Entrar'}
            </Button>
          </Form>
        </LoginCard>
      </Container>
    </Layout>
  )
}
