// react
import { useState, useEffect } from 'react';
// component
import DashBoard from '../../components/dashboard/DashBoard';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
// api
import { getTransactions } from '../../api/diary';
// style
import './DashboardPage.scss';

const DashboardPage = () => {
  const [transactions, setTransactions] = useState('');
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

  useEffect(() => {
    const transactionData = async () => {
      const dateString = new Date().toLocaleDateString();
      const res = await getTransactions({
        startDate: '2023-06-01',
        endDate: dateString,
      });
      console.log(res); // 觀察資料用
      setTransactions(res);
      setWinRate(res.data.result.winRate);
      setTotalWinPoints(res.data.result.totalWinPoints);
      setTotalLossPoints(res.data.result.totalLossPoints);
      setPAndL(res.data.result.pAndL);
      setRoundTrip(res.data.result.roundTrip);
      setNetPAndL(res.data.result.netPAndL);
      setAverageLossPoints(res.data.result.averageLossPoints);
      setAverageWinPoints(res.data.result.averageWinPoints);
      setRiskRatio(res.data.result.riskRatio);
      setWinCount(res.data.result.winCount);
      setLossCount(res.data.result.lossCount);
    };
    transactionData();
  }, []);

  // 觀察資料用
  useEffect(() => {
    console.log(transactions);
    console.log(averageLossPoints);
    console.log(averageWinPoints);
    console.log(winRate);
    console.log(totalWinPoints);
    console.log(totalLossPoints);
    console.log(pAndL);
    console.log(roundTrip);
    console.log(netPAndL);
    console.log(riskRatio);
  }, [
    transactions,
    averageLossPoints,
    averageWinPoints,
    winRate,
    totalWinPoints,
    totalLossPoints,
    pAndL,
    roundTrip,
    netPAndL,
    riskRatio,
  ]);

  return (
    <div className='DashboarContainer'>
      <div className='navbarSection'>
        <Navbar />
      </div>
      <div className='rightContainer'>
        <Header />
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
  );
};

export default DashboardPage;
