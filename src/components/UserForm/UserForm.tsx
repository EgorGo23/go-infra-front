import React, { FormEvent, useState, ChangeEvent, useEffect, useRef } from 'react';
import { User } from '@types';
import './UserForm.styles.scss';
import { Button } from '../Button/Button';

const INITIAL_USER_FORM = { name: '', email: '' };

export type TUserForm = Omit<User, 'id'>;

type UserFormProps = {
  mode?: 'read' | 'edit';
  onSubmit?: (userForm: TUserForm) => Promise<void>;
  initialValues?: TUserForm;
};

export const UserForm = ({
  mode = 'read',
  onSubmit,
  initialValues,
}: UserFormProps): JSX.Element => {
  const [userForm, setUserForm] = useState<TUserForm>(initialValues ?? INITIAL_USER_FORM);
  const nameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (onSubmit) {
      await onSubmit(userForm);

      setUserForm(INITIAL_USER_FORM);
    }
  };

  const handleChangeUserForm = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    setUserForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const isSubmitDisabled = !userForm.email || !userForm.name;

  useEffect(() => {
    nameRef.current?.focus();
  }, [mode]);

  useEffect(() => {
    setUserForm(initialValues ?? INITIAL_USER_FORM);
  }, [mode]);

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <div className="f-column m-bottom-16">
        <label htmlFor="name" className="user-form-item__label">
          Name:{' '}
        </label>
        {mode === 'read' ? (
          initialValues?.name
        ) : (
          <input
            className="user-form-item__input"
            type="text"
            id="name"
            name="name"
            placeholder="Enter name"
            value={userForm.name}
            ref={nameRef}
            onChange={handleChangeUserForm}
          />
        )}
      </div>

      <div className={`f-column ${mode === 'edit' ? 'm-bottom-24' : ''}`}>
        <label htmlFor="email" className="user-form-item__label">
          Email:{' '}
        </label>
        {mode === 'read' ? (
          initialValues?.email
        ) : (
          <input
            className="user-form-item__input"
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            value={userForm.email}
            onChange={handleChangeUserForm}
          />
        )}
      </div>

      {mode === 'edit' && (
        <Button type="submit" disabled={isSubmitDisabled}>
          Send
        </Button>
      )}
    </form>
  );
};
