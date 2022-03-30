<<<<<<< HEAD
import './FriendList.css';
import App from './components/App';
import Avatar from './components/Avatar';
import { useChatStateContext } from './context/FirebaseChatContextProvider';
import { Link } from 'react-router-dom';

function FriendList(){
  const { userList } = useChatStateContext();

  return(
    <App>
      <div className="friend-list">
      {
        userList.map((item) => {
          return (
            <Link to={`/privatechat/${item.key}`} key={item.key}>
              <div className={`friend-list-item ${item.position}`}>
                <Avatar name={item.key}/>
                <div>{item.displayName}</div>
              </div>
            </Link>
          )
        })
      }
      </div>
=======
import { useState } from 'react';
import './FriendList.css';
import App from './components/App';
import Avatar from './components/Avatar';
import './Chat.css';
import Userlist from './components/Userlist';

function FriendList(){
  const [friends, setFriends] = useState([
    {user: "user1", displayName: "ไอ้ปื้ด"},
    {user: "user2", displayName: "นางสาวส้ม"},
    {user: "user3", displayName: "พลทหารแดง"},
    {user: "user4", displayName: "ศาตราจารย์นายกรัฐมนตรีดอกเตอร์เขียว"},
  ]);

  return(
    
    <App>
      <div className='userbox'/>
      <div className="friend-list">      
        {
          friends.map((item,index) => {
            return (<div key={index} className="friend-list-item">
              <Avatar name={item.user}/>
              <div className='text-user'>{item.displayName}</div>
            </div>)
          })
        }
      </div>

      
>>>>>>> eb394efbc6782808612de935bf05a22154bf08f8
    </App>
  )
}

export default FriendList;