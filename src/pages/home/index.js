import React from 'react';
import LoginPage from '../loginPage/loginPage';
import SignupPage from '../signupPage/signupPage';
import './reset.scss'
import './base.scss'

const Home = () => {
  return (
    <div>
      <LoginPage />
      {/* <SignupPage /> */}
    </div>
  );
};

export default Home;
