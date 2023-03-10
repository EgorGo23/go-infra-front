import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserForm } from '@components';
import { User } from '@types';

export const UserPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${process.env.API_URL}/users/${id}`);
        const responseData = await response.json();

        if (!response?.ok) {
          throw new Error(responseData.message);
        }

        setUser(responseData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1 className="m-bottom-24">Профиль пользователя</h1>
      <UserForm initialValues={user} />
    </div>
  );
};
