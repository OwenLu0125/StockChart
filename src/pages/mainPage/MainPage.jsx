import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Navbar from '../../components/navbar/Navbar';

export const MainPage = () => {
  const navigate = useNavigate();

  const { isAuthenticated } = useAuth();

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     navigate('/login');
  //   }
  // }, [navigate, isAuthenticated]);

  return (
    <>
      {/* <h1>MainPage</h1> */}
      <Navbar></Navbar>
    </>
  );
};

export default MainPage;
