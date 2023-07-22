// component
import DashBoard from '../../components/dashboard/DashBoard';
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
        <DashBoard/>
      </div>
    </div>
  );
};

export default DashboardPage;
