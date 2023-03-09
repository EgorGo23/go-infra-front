import React from 'react';

type UserFormProps = {
  mode: 'read' | 'edit';
};

export const UserForm = ({ mode }: UserFormProps): JSX.Element => {
  return (
    <form>
      <input />
    </form>
  );
};
