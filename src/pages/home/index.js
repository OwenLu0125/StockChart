// react
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
// pages
import HomePage from '../homepage/HomePage';
import LoginPage from '../loginPage/LoginPage';
import SignupPage from '../signupPage/SignupPage';
import MainPage from '../mainPage/MainPage';
import DiaryPage from '../diaryPage/DiaryPage';
import HistoryPage from '../historyPage/HistoryPage';
import DashboardPage from '../dashboardPage/DashboardPage';
import SettingPage from '../settingPage/SettingPage';
import ReplyPage from '../replyPage/ReplyPage';
import DailyHistoryPage from '../dailyHistoryPage/DailyHistoryPage';
// context
import { IdProvider } from '../../contexts/IdContext';
import { AuthProvider } from '../../contexts/AuthContext';
import { DateProvider } from '../../contexts/DateContext';
// style
import './reset.scss';
import './base.scss';

const basename = process.env.PUBLIC_URL;
const queryClient = new QueryClient();

const Home = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter basename={basename}>
          <AuthProvider>
            <IdProvider>
              <DateProvider>
                <Routes>
                  <Route path='*' element={<HomePage />} />
                  <Route path='/login' element={<LoginPage />} />
                  <Route path='/signup' element={<SignupPage />} />
                  <Route path='/main' element={<MainPage />} />
                  <Route path='/diary' element={<DiaryPage />} />
                  <Route path='/history' element={<HistoryPage />} />
                  <Route path='/dashboard' element={<DashboardPage />} />
                  <Route path='/daily-history' element={<DailyHistoryPage />} />
                  <Route path='/reply' element={<ReplyPage />} />
                  <Route path='/setting' element={<SettingPage />} />
                </Routes>
              </DateProvider>
            </IdProvider>
          </AuthProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
};

export default Home;
