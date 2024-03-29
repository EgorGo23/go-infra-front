import React from 'react';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import './Button.styles.scss';

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button = ({ children, ...rest }: ButtonProps): JSX.Element => {
  return (
    <button className="button" {...rest}>
      {children}
    </button>
  );
};
