import { useState } from 'react';
import './FriendList.css';
import App from './components/App';
import Avatar from './components/Avatar';

function FriendList(){
  let [friends, setFriends] = useState([
    {user: "user1", displayName: "ไอ้ปื้ด"},
    {user: "user2", displayName: "นางสาวสุดา"},
    {user: "user3", displayName: "พลทหารหนึ่ง"},
    {user: "user4", displayName: "ศาตราจารย์นายกรัฐมนตรีดอกเตอร์เขียว"},
  ]);

  return(
    <App>
      <div className="friend-list">
      {
        friends.map((item) => {
          return (<div className={`friend-list-item ${item.position}`}>
            <Avatar name={item.user}/>
            <div>{item.displayName}</div>
          </div>)
        })
      }
      </div>
    </App>
  )
}

export default FriendList;