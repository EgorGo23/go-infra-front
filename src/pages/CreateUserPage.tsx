import React from 'react';
import { UserForm } from '@components';

export const CreateUserPage = () => {
  return (
    <div>
      <h1 className="m-bottom-24">Создание пользователя</h1>
      <UserForm mode="edit" />
    </div>
  );
};
