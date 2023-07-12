// react
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// page
import LoginPage from '../loginPage/loginPage';
import SignupPage from '../signupPage/signupPage';
import AdminLoginPage from '../adminLoginPage/adminLoginPage';
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
          {/* <Route path='*' element={<HomePage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Home;
