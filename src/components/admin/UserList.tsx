import React from 'react';
import styled from 'styled-components';
import { Card } from '../shared';

interface User {
  id: string;
  name: string;
  email: string;
  progress: number;
  lastActive: string;
  subscription: 'free' | 'premium';
}

interface UserListProps {
  users: User[];
  onUserClick?: (user: User) => void;
}

const UserTable = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background: ${props => props.theme.colors.secondary};
`;

const TableRow = styled.tr<{ clickable?: boolean }>`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  cursor: ${props => props.clickable ? 'pointer' : 'default'};
  
  &:hover {
    background: ${props => props.clickable ? 'rgba(26, 159, 139, 0.1)' : 'transparent'};
  }
`;

const TableHead = styled.th`
  padding: 16px;
  text-align: left;
  color: ${props => props.theme.colors.text.light};
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const TableCell = styled.td`
  padding: 16px;
  color: ${props => props.theme.colors.text.dark};
  font-size: 14px;
`;

const SubscriptionBadge = styled.span<{ type: string }>`
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  background: ${props => props.type === 'premium' ? props.theme.colors.primary : 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.theme.colors.text.light};
`;

const ProgressBar = styled.div`
  width: 100px;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
`;

const ProgressFill = styled.div<{ progress: number }>`
  width: ${props => props.progress}%;
  height: 100%;
  background: ${props => props.theme.colors.primary};
  border-radius: 3px;
`;

export const UserList: React.FC<UserListProps> = ({ users, onUserClick }) => {
  return (
    <Card title="Lista de Usuários">
      <UserTable>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Progresso</TableHead>
              <TableHead>Última Atividade</TableHead>
              <TableHead>Assinatura</TableHead>
            </TableRow>
          </TableHeader>
          <tbody>
            {users.map(user => (
              <TableRow 
                key={user.id} 
                clickable={!!onUserClick}
                onClick={() => onUserClick?.(user)}
              >
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <ProgressBar>
                    <ProgressFill progress={user.progress} />
                  </ProgressBar>
                </TableCell>
                <TableCell>{user.lastActive}</TableCell>
                <TableCell>
                  <SubscriptionBadge type={user.subscription}>
                    {user.subscription === 'premium' ? 'Premium' : 'Gratuito'}
                  </SubscriptionBadge>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </UserTable>
    </Card>
  );
};
