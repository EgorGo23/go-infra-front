import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.styles.css';

export const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list d-inline-flex">
        <li className="navbar__item navbar-item">
          <Link to="/users">Users</Link>
        </li>
        <li className="navbar__item navbar-item">
          <Link to="/users/create">Create user</Link>
        </li>
      </ul>
    </nav>
  );
};
