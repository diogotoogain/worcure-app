import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout } from '@/components/shared';
import { useRouter } from 'next/router';
import { authService } from '@/utils/auth';
import Link from 'next/link';

const LoginContainer = styled.div`
  max-width: 400px;
  margin: 60px auto;
`;

const Card = styled.div`
  background: ${props => props.theme.colors.secondary};
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.text.light};
  text-align: center;
  margin: 0 0 32px 0;
  font-size: 32px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  color: ${props => props.theme.colors.text.dark};
  font-size: 14px;
  font-weight: 600;
`;

const Input = styled.input`
  padding: 12px 16px;
  border-radius: 8px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: ${props => props.theme.colors.text.light};
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const Button = styled.button`
  padding: 14px;
  border-radius: 8px;
  border: none;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text.light};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 14px;
  text-align: center;
  padding: 12px;
  background: rgba(231, 76, 60, 0.1);
  border-radius: 8px;
`;

const Links = styled.div`
  text-align: center;
  margin-top: 20px;
  
  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    font-size: 14px;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await authService.login(email, password);
      
      if (result.error) {
        setError(result.error);
      } else if (result.user) {
        // Redirect based on role
        if (result.user.role === 'admin') {
          router.push('/admin/dashboard');
        } else {
          router.push('/student/dashboard');
        }
      }
    } catch (err) {
      setError('Erro ao fazer login. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <LoginContainer>
        <Card>
          <Title>Login</Title>
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
                placeholder="••••••••"
                required
              />
            </FormGroup>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <Button type="submit" disabled={loading}>
              {loading ? 'Entrando...' : 'Entrar'}
            </Button>
          </Form>

          <Links>
            <Link href="/auth/register">Não tem conta? Registre-se</Link>
          </Links>
        </Card>
      </LoginContainer>
    </Layout>
  );
}
