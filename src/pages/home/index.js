// react
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// page
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import AdminLoginPage from '../AdminLoginPage/AdminLoginPage';
import MainPage from '../MainPage/MainPage';
// style
import './reset.scss'
import './base.scss'

const Home = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<LoginPage />} />
          <Route path='signup' element={<SignupPage />} />
          <Route path='admin' element={<AdminLoginPage />} />
          <Route path='main' element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Home;
