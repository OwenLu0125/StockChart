// style
import './TabSwitcher.scss';

const TabSwitcher = ({ setTab, activeTab }) => {
  return (
    <ul className='tabSwitcher'>
      <li className='bold-16'>
        <p
          className={activeTab === 'all' && 'active'}
          onClick={() => setTab('all')}
        >
          所有公開
        </p>
      </li>
      <li
        className={
          activeTab === 'all' || activeTab === 'user'
            ? 'purpleLine'
            : 'verticalLine'
        }
      ></li>
      <li className='bold-16'>
        <p
          className={activeTab === 'user' && 'active'}
          onClick={() => setTab('user')}
        >
          個人
        </p>
      </li>
      <li
        className={
          activeTab === 'like' || activeTab === 'user'
            ? 'purpleLine'
            : 'verticalLine'
        }
      ></li>
      <li className='bold-16'>
        <p
          className={activeTab === 'like' && 'active'}
          onClick={() => setTab('like')}
        >
          喜歡
        </p>
      </li>
    </ul>
  );
};

export default TabSwitcher;
