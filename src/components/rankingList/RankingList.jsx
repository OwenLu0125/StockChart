import starIcon from '../../assets/star-hollow.svg';
import userImg from '../../assets/user.jpg';
import './RankingList.scss';

const RankingList = () => {
  return (
    <div className='rankingList'>
      <div className='title bold-16'>交易排行列表</div>
      <div className='rankingMain'>
        <div className='userItem'>
          <img className='star' src={starIcon} alt='star-icon' />
          <div className='userWidget'>
            <img className='userImg' src={userImg} alt='user-img' />
            <span className='userInfo'>
              <p className='bold-14'>Tylor Filan</p>
              <p className='regular-14'>@tylor</p>
            </span>
          </div>
          <span className='rate bold-18'>14%</span>
          <p className='winning medium-12'>勝率</p>
        </div>
        <div className='userItem'>
          <img className='star' src={starIcon} alt='star-icon' />
          <div className='userWidget'>
            <img className='userImg' src={userImg} alt='user-img' />
            <span className='userInfo'>
              <p className='bold-14'>Tylor Filan</p>
              <p className='regular-14'>@tylor</p>
            </span>
          </div>
          <span className='rate bold-18'>14%</span>
          <p className='winning medium-12'>勝率</p>
        </div>
        <div className='userItem'>
          <img className='star' src={starIcon} alt='star-icon' />
          <div className='userWidget'>
            <img className='userImg' src={userImg} alt='user-img' />
            <span className='userInfo'>
              <p className='bold-14'>Tylor Filan</p>
              <p className='regular-14'>@tylor</p>
            </span>
          </div>
          <span className='rate bold-18'>14%</span>
          <p className='winning medium-12'>勝率</p>
        </div>
        <div className='userItem'>
          <img className='star' src={starIcon} alt='star-icon' />
          <div className='userWidget'>
            <img className='userImg' src={userImg} alt='user-img' />
            <span className='userInfo'>
              <p className='bold-14'>Tylor Filan</p>
              <p className='regular-14'>@tylor</p>
            </span>
          </div>
          <span className='rate bold-18'>14%</span>
          <p className='winning medium-12'>勝率</p>
        </div>
        <div className='userItem'>
          <img className='star' src={starIcon} alt='star-icon' />
          <div className='userWidget'>
            <img className='userImg' src={userImg} alt='user-img' />
            <span className='userInfo'>
              <p className='bold-14'>Tylor Filan</p>
              <p className='regular-14'>@tylor</p>
            </span>
          </div>
          <span className='rate bold-18'>14%</span>
          <p className='winning medium-12'>勝率</p>
        </div>
        <div className='userItem'>
          <img className='star' src={starIcon} alt='star-icon' />
          <div className='userWidget'>
            <img className='userImg' src={userImg} alt='user-img' />
            <span className='userInfo'>
              <p className='bold-14'>Tylor Filan</p>
              <p className='regular-14'>@tylor</p>
            </span>
          </div>
          <span className='rate bold-18'>14%</span>
          <p className='winning medium-12'>勝率</p>
        </div>
        <div className='userItem'>
          <img className='star' src={starIcon} alt='star-icon' />
          <div className='userWidget'>
            <img className='userImg' src={userImg} alt='user-img' />
            <span className='userInfo'>
              <p className='bold-14'>Tylor Filan</p>
              <p className='regular-14'>@tylor</p>
            </span>
          </div>
          <span className='rate bold-18'>14%</span>
          <p className='winning medium-12'>勝率</p>
        </div>
      </div>
    </div>
  );
};

export default RankingList;
