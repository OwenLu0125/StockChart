// react
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// pages
import LoginPage from '../loginPage/LoginPage';
import SignupPage from '../signupPage/SignupPage';
import AdminLoginPage from '../adminLoginPage/AdminLoginPage';
import MainPage from '../mainPage/MainPage';
import DiaryPage from '../diaryPage/DiaryPage';
import HistoryPage from '../historyPage/HistoryPage';
import SettingPage from '../settingPage/SettingPage';
import ReplyPage from '../replyPage/ReplyPage';
// context
import { IdProvider } from '../../contexts/IdContext';
// style
import './reset.scss';
import './base.scss';

const Home = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <AuthProvider> */}
        <IdProvider>
          <Routes>
            <Route path='*' element={<LoginPage />} />
            <Route path='signup' element={<SignupPage />} />
            <Route path='admin' element={<AdminLoginPage />} />
            <Route path='main' element={<MainPage />} />
            <Route path='diary' element={<DiaryPage />} />
            <Route path='history' element={<HistoryPage />} />
            <Route path='reply' element={<ReplyPage />} />
            <Route path='setting' element={<SettingPage />} />
          </Routes>
        </IdProvider>
        {/* </AuthProvider> */}
      </BrowserRouter>
    </div>
  );
};

export default Home;
