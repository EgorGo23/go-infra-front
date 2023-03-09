import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '@types';
import './UserList.styles.scss';
import { Button } from '../Button/Button';

type UserListProps = {
  users: Array<User>;
  onRemoveUser: () => Promise<void>;
};

export const UserList = ({ users, onRemoveUser }: UserListProps): JSX.Element => {
  const navigate = useNavigate();

  const goToUserPage = (id: number) => {
    navigate(`/users/${id}`);
  };

  const handleRemoveUser = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    await onRemoveUser();
  };

  return (
    <ul className="user-list">
      {users.map((user) => {
        return (
          <li key={user.id} className="user-item">
            <div className="user-item__name user-item-name" onClick={() => goToUserPage(user.id)}>
              <span className="user-item-name__name">{user.name}</span>
              <span className="user-item-name__email subtitle">{user.email}</span>
            </div>

            <Button onClick={handleRemoveUser}>Remove</Button>
          </li>
        );
      })}
    </ul>
  );
};
