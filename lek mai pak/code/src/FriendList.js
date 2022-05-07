import './FriendList.css';
import App from './components/App';
import Avatar from './components/Avatar';
import { useChatStateContext } from './context/FirebaseChatContextProvider';
import { Link } from 'react-router-dom';

function FriendList(){
  const { userList, imageDict } = useChatStateContext();

  return(
    <App>
      <div className="friend-list">
      {
        userList.map((item) => {
          let img = imageDict[item.key];

          return (
            <Link to={`/privatechat/${item.key}`} key={item.key}>
              <div className={`friend-list-item ${item.position}`}>
                <Avatar name={item.displayName} base64Image={img}/>
                <div>{item.displayName}</div>
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