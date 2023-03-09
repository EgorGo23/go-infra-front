import React from 'react';
import { UserForm } from '@components';

export const CreateUserPage = () => {
  return (
    <div>
      <h1>Создание пользователя</h1>
      <UserForm mode="edit" />
    </div>
  );
};
