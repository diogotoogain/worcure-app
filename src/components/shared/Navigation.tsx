import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #333;
`

const NavItem = styled.a<{ active?: boolean }>`
  padding: 12px 15px;
  color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.text.dark};
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  background-color: ${props => props.active ? 'rgba(26, 159, 139, 0.1)' : 'transparent'};

  &:hover {
    background-color: rgba(26, 159, 139, 0.1);
    color: ${props => props.theme.colors.primary};
  }
`

const NavSection = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #333;
`

const NavSectionTitle = styled.div`
  font-size: 12px;
  color: ${props => props.theme.colors.text.dark};
  text-transform: uppercase;
  margin-bottom: 10px;
  padding-left: 15px;
`

interface NavigationProps {
  role: 'admin' | 'student'
}

export default function Navigation({ role }: NavigationProps) {
  const router = useRouter()
  const currentPath = router.pathname

  const adminLinks = [
    { href: '/admin/dashboard', label: 'Dashboard' },
    { href: '/admin/settings', label: 'Configurações' },
    { href: '/admin/users', label: 'Usuários' },
    { href: '/admin/courses', label: 'Cursos' },
  ]

  const studentLinks = [
    { href: '/app/dashboard', label: 'Dashboard' },
    { href: '/app/courses', label: 'Meus Cursos' },
    { href: '/app/progress', label: 'Meu Progresso' },
    { href: '/app/diary', label: 'Diário de Bordo' },
  ]

  const links = role === 'admin' ? adminLinks : studentLinks

  return (
    <Nav>
      <Logo>WORCURE</Logo>
      
      {links.map(link => (
        <NavItem
          key={link.href}
          href={link.href}
          active={currentPath === link.href}
          onClick={(e) => {
            e.preventDefault()
            router.push(link.href)
          }}
        >
          {link.label}
        </NavItem>
      ))}

      <NavSection>
        <NavSectionTitle>Configurações</NavSectionTitle>
        <NavItem href="/profile" onClick={(e) => {
          e.preventDefault()
          router.push('/profile')
        }}>
          Perfil
        </NavItem>
        <NavItem href="/logout" onClick={(e) => {
          e.preventDefault()
          // TODO: Implement logout
          router.push('/')
        }}>
          Sair
        </NavItem>
      </NavSection>
    </Nav>
  )
}
