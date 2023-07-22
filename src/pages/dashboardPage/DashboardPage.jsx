// component
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
// style
import './DashboardPage.scss';

const DashboardPage = () => {
  return (
    <div className='diaryContainer'>
      <div className='navbarSection'>
        <Navbar />
      </div>
      <div className='rightContainer'>
        <Header />
      </div>
    </div>
  );
};

export default DashboardPage;
