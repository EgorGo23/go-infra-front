import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, TUserForm, UserForm } from '@components';
import { User } from '@types';

export const UserPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User>();
  const [isEdit, setIsEdit] = useState(false);

  const handleToggleEditMode = () => {
    setIsEdit((prevState) => !prevState);
  };

  const handleCancelEdit = () => {
    setUser(user);

    setIsEdit(false);
  };

  const handleSubmitUpdatedForm = async (userForm: TUserForm) => {
    try {
      const response = await fetch(`${process.env.API_URL}/users/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(userForm),
      });
      const responseData = await response.json();

      if (!response?.ok) {
        throw new Error(responseData.message);
      }

      setUser(responseData);

      setIsEdit(false);
    } catch (error) {
      console.error(error);
    }
  };

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
      <div className="d-flex align-start justify-between">
        <h1 className="m-bottom-24">Профиль пользователя</h1>
        <div>
          {isEdit ? (
            <Button type="button" onClick={handleCancelEdit}>
              Cancel
            </Button>
          ) : (
            <Button type="button" onClick={handleToggleEditMode}>
              Edit
            </Button>
          )}
        </div>
      </div>

      <UserForm
        initialValues={user ? { name: user.name, email: user.email } : undefined}
        mode={isEdit ? 'edit' : 'read'}
        onSubmit={handleSubmitUpdatedForm}
      />
    </div>
  );
};
