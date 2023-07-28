import { useState, useEffect } from 'react';
//api
import { getRanking } from '../../api/main';
// img
import userImg from '../../assets/user.jpg';
// style
import './RankingList.scss';

const RankingList = () => {
  const [rankingList, setRankingList] = useState([]);

  useEffect(() => {
    const getRankingAsync = async () => {
      try {
        const ranking = await getRanking();
        setRankingList(ranking);
      } catch (error) {
        console.log(error);
      }
    };

    getRankingAsync();
  }, []);

  return (
    <div className='rankingList'>
      <div className='title bold-16'>交易排行列表</div>
      <div className='rankingMain'>
        {rankingList?.map?.((item) => {
          return (
            <div key={`top-` + item.user_id} className='userItem'>
              <div className='userWidget'>
                <img className='userImg' src={userImg} alt='user-img' />
                <span className='userInfo'>
                  <p className='bold-14'>{`${
                    item.username.slice(0, 1).toUpperCase() +
                    item.username.slice(1)
                  }`}</p>
                  <p className='regular-14'>@{item.account}</p>
                </span>
              </div>
              <span className='rate bold-18'>{item.win_rate.slice(2, 4)}%</span>
              <p className='winning medium-12'>勝率</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RankingList;
