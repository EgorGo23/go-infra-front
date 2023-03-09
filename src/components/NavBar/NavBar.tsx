import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.styles.scss';
import { Button } from '../Button/Button';

export const NavBar = () => {
  return (
    <nav>
      <ul className="navbar__list d-inline-flex">
        <li className="navbar__item navbar-item">
          <Link to="/users">
            <Button>User list</Button>
          </Link>
        </li>
        <li className="navbar__item navbar-item">
          <Link to="/users/create">
            <Button>Create user</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
