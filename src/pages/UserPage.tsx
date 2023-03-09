import React from 'react';
import { UserForm } from '@components';

export const UserPage = () => {
  return (
    <div>
      <h1>Профиль пользователя</h1>
      <UserForm mode="read" />
    </div>
  );
};
