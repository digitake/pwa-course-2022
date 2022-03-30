import './Friend-List.css';
import { useChatStateContext } from './firebase/FirebaseChatContextProvider';
import { Link } from 'react-router-dom';

function FriendList(){
  const { userList } = useChatStateContext();

  return(
      <div className="friend-list">
      {
        userList.map((item) => {
          return (
            <Link to={`/privatechat/${item.key}`} key={item.key}>
              <div className={`friend-list-item ${item.position}`}>
                <div>{item.displayName}</div>
              </div>
            </Link>
          )
        })
      }
      </div>
  )
}

export default FriendList;