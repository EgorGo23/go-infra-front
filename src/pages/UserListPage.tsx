import React, { useEffect, useState } from 'react';
import { User } from '@types';
import { UserList } from '@components';

const USERS: Array<User> = [
  { id: 1, name: 'Lax', email: 'abc@mail.ru' },
  { id: 2, name: 'Rom', email: 'def@mail.ru' },
  { id: 3, name: 'Ita', email: 'gls@mail.ru' },
];

export const UserListPage = () => {
  const [users, setUsers] = useState<Array<User>>([]);

  const handleRemoveUser = async () => {};

  useEffect(() => {
    setUsers(USERS);
  }, []);

  return (
    <div>
      <h1 className="m-bottom-24">Список пользователей</h1>
      <UserList users={users} onRemoveUser={handleRemoveUser} />
    </div>
  );
};
