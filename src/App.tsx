import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { NavBar } from './components';
import { UserListPage, CreateUserPage } from './pages';

import './styles/global.css';

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<div>Root</div>} />
        <Route path="/users" element={<UserListPage />} />
        <Route path="/users/create" element={<CreateUserPage />} />
        <Route path="*" element={<div>Страницы не существует</div>} />
      </Routes>
    </>
  );
}
export default App;
