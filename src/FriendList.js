import { useState } from 'react';
import './FriendList.css';
import App from './components/App';

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
    </div>
    </App>
  )
}

export default FriendList;