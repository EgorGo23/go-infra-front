import React from 'react';
import { UserForm, TUserForm } from '@components';
import { useNavigate } from 'react-router-dom';

export const CreateUserPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (userForm: TUserForm) => {
    try {
      const response = await fetch(`${process.env.API_URL}/users`, {
        method: 'POST',
        body: JSON.stringify(userForm),
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      });

      const responseData = await response.json();

      if (!response?.ok) {
        throw new Error(responseData.message);
      }

      navigate(`/users/${responseData.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="m-bottom-24">Создание пользователя</h1>
      <UserForm mode="edit" onSubmit={handleSubmit} />
    </div>
  );
};
