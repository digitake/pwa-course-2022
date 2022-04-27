import './FriendList.css';
import App from './components/App';
import Tabbar from './components/Tabbar';
import TabbarTop from './components/TabbarTop';
import Avatar from './components/Avatar';
import { useChatStateContext } from './context/FirebaseChatContextProvider';
import { Link } from 'react-router-dom';

function FriendList(){
  const { userList, imageDict } = useChatStateContext();

  return(
    <div className="friend-list">
      <Tabbar/>
      <TabbarTop value={"Friends"}/>
      <div className="list">
      
      {
        userList.map((item) => {
          return (
            <Link to={`/privatechat/${item.key}`} key={item.key}>
              <div className={`friend-list-item ${item.position}`}>
                <Avatar name={item.displayName} base64Image={imageDict[item.key]} />
                <div className="urlColor">{item.displayName}</div>
              </div>
            </Link>
          )
        })
      }
      </div>
    </div>
  )
}

export default FriendList;