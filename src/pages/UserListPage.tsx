import React, { useEffect, useState } from 'react';
import { User } from '@types';
import { UserList } from '@components';

export const UserListPage = () => {
  const [users, setUsers] = useState<Array<User>>([]);

  const handleRemoveUser = async (userId: number) => {
    try {
      const response = await fetch(`${process.env.API_URL}/users/${userId}`, {
        method: 'DELETE',
      });

      if (!response?.ok) {
        const error = await response.json();

        throw new Error(error.message);
      }

      setUsers((prevState) => prevState.filter(({ id }) => id !== userId));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${process.env.API_URL}/users`);
        const responseData = await response.json();

        if (!response?.ok) {
          throw new Error(responseData.message);
        }

        setUsers(responseData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1 className="m-bottom-24">Список пользователей</h1>
      <UserList users={users} onRemoveUser={handleRemoveUser} />
    </div>
  );
};
