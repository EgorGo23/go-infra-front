import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { UserListPage, CreateUserPage, NotFoundPage, UserPage } from './pages';

import './styles/global.css';
import { MainLayout } from '@components';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<div>Root</div>} />
        <Route path="/users" element={<UserListPage />} />
        <Route path="/users/:id" element={<UserPage />} />
        <Route path="/users/create" element={<CreateUserPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MainLayout>
  );
}
export default App;
