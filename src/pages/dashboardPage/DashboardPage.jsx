// react
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// component
import DashBoard from '../../components/dashboard/DashBoard';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
// context
import { useAuth } from '../../contexts/AuthContext';
// api
import { getTotalHistory } from '../../api/history';
// style
import './DashboardPage.scss';

const DashboardPage = () => {
  const [data, setData] = useState();
  const [transactions, setTransactions] = useState([]);
  const [winRate, setWinRate] = useState('');
  const [totalWinPoints, setTotalWinPoints] = useState('');
  const [totalLossPoints, setTotalLossPoints] = useState('');
  const [winCount, setWinCount] = useState('');
  const [lossCount, setLossCount] = useState('');
  const [pAndL, setPAndL] = useState('');
  const [roundTrip, setRoundTrip] = useState('');
  const [netPAndL, setNetPAndL] = useState('');
  const [averageLossPoints, setAverageLossPoints] = useState('');
  const [averageWinPoints, setAverageWinPoints] = useState('');
  const [riskRatio, setRiskRatio] = useState('');

  const navigate = useNavigate();

  const { isAuthenticated, currentMember } = useAuth();
  const id = currentMember?.id;

  useEffect(() => {
    const transactionData = async () => {
      try {
        const res = await getTotalHistory({
          id: id,
        });
        console.log(res); // 觀察資料用
        setData(res);
        setTransactions(res.dailyTransactions);
        setWinRate(res.historyData.winRate);
        setTotalWinPoints(res.historyData.totalWinPoints);
        setTotalLossPoints(res.historyData.totalLossPoints);
        setPAndL(res.historyData.pAndL);
        setRoundTrip(res.historyData.roundTrip);
        setNetPAndL(res.historyData.netPAndL);
        setAverageLossPoints(res.historyData.averageLossPoints);
        setAverageWinPoints(res.historyData.averageWinPoints);
        setRiskRatio(res.historyData.riskRatio);
        setWinCount(res.historyData.winCount);
        setLossCount(res.historyData.lossCount);
      } catch (error) {
        console.error(error);
      }
    };
    transactionData();
  }, []);

  // 觀察資料用
  useEffect(() => {
    console.log(data);
    console.log(transactions);
  }, [data]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate, isAuthenticated]);

  return (
    <div className='dashboardPage'>
      <Navbar />
      <div className='dashboardBody'>
        <Header />
        <div className='dashboardMain'>
          <DashBoard
            transactions={transactions}
            winRate={winRate}
            totalWinPoints={totalWinPoints}
            totalLossPoints={totalLossPoints}
            winCount={winCount}
            lossCount={lossCount}
            pAndL={pAndL}
            roundTrip={roundTrip}
            netPAndL={netPAndL}
            averageLossPoints={averageLossPoints}
            averageWinPoints={averageWinPoints}
            riskRatio={riskRatio}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
