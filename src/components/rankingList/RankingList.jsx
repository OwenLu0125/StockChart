import { useState, useEffect } from 'react';
//api
import { getRanking } from '../../api/main';
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
      <div className='title bold-16'>交易勝率排行</div>
      <div className='rankingMain'>
        {rankingList?.map?.((item) => {
          return (
            <div key={`top-` + item.user_id} className='userItem'>
              <div className='userWidget'>
                <img className='userImg' src={item.avatar} alt='user-img' />
                <span className='userInfo'>
                  <p className='bold-14'>{`${
                    item.username.slice(0, 1).toUpperCase() +
                    item.username.slice(1)
                  }`}</p>
                  <p className='regular-14'>
                    @
                    {item.account.length > 9
                      ? item.account.slice(0, 6).padEnd(9, '*')
                      : item.account}
                  </p>
                </span>
              </div>
              <span className='rate bold-18'>
                {(item.win_rate * 100).toFixed(0)}%
              </span>
              <p className='winning medium-12'>勝率</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RankingList;
