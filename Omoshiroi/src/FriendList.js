import './FriendList.css';
import App from './components/App';
import Avatar from './components/Avatar';
import { useChatStateContext } from './context/FirebaseChatContextProvider';
import { Link } from 'react-router-dom';
import Titlebar from './components/Titlebar.js';

function FriendList(){
  const { userList } = useChatStateContext();

  return(
    <App>
      <div className="friend-list">
        <Titlebar value="Friend-List"/>    
      {
        userList.map((item) => {
          return (
            <Link to={`/privatechat/${item.key}`} key={item.key}>
              <div className={`friend-list-item ${item.position}`}>
                <Avatar/>
                <a className='friendName'>{item.displayName}</a>
              </div>
            </Link>
          )
        })
      }
      </div>
    </App>
  )
}

export default FriendList;