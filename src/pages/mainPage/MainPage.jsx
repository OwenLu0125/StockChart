import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import RankingList from '../../components/rankingList/RankingList';
import './MainPage.scss';

export const MainPage = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     navigate('/login');
  //   }
  // }, [navigate, isAuthenticated]);

  return (
    <>
      <div className='homePage'>
        <Navbar />
        <div className='homeBody'>
          <Header />
          <div className='homeMain'>
            <RankingList />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
