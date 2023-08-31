// react
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// components
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import RankingList from '../../components/rankingList/RankingList';
import TabSwitcher from '../../components/tabSwitcher/TabSwitcher';
import AllPosts from '../../components/allPosts/AllPosts';
// contexts
import { useAuth } from '../../contexts/AuthContext';
// css
import './MainPage.scss';

export const MainPage = () => {
  const [currentTab, setCurrentTab] = useState('all');
  const [posts, setPosts] = useState(<AllPosts currentTab={currentTab} />);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate, isAuthenticated]);

  return (
    <>
      <div className='homePage'>
        <Navbar />
        <div className='homeBody'>
          <Header />
          <div className='homeMain'>
            <div className='Switcher'>
              <TabSwitcher
                activeTab={currentTab}
                setTab={setCurrentTab}
                setPosts={setPosts}
              />
              <div className='space'></div>
            </div>
            <div className='tweetsAndRanking'>
              <div className='tweets'>{posts}</div>
              <RankingList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
