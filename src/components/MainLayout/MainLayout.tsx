import React from 'react';
import './MainLayout.styles.scss';
import { NavBar } from '../NavBar/NavBar';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  return (
    <>
      <header className="main-layout__header">
        <NavBar />
      </header>
      <main className="main-layout__main">{children}</main>
    </>
  );
};
