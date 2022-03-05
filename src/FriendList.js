import { useState } from 'react';
import './FriendList.css';
import App from './components/App';
import Avatar from './components/Avatar';
import Tabprofile from './components/Tabprofile';

function FriendList(){
  const [friends, setFriends] = useState([
    {user: "user1", displayName: "คุณหนู02"},
    {user: "user2", displayName: "หมาล่าZz"},
    {user: "user3", displayName: "อ้วนไม่จิง"},
    {user: "user4", displayName: "คุณแม่"},
  ]);

  return(
    <App>
      <div className="friend-list">
      <Tabprofile/>
        {
          friends.map
          (x=>
            <div className='friend-list-item'>
            <Avatar data={friends}/>
            {x.displayName}
            </div>
          )
        }
      </div>
    </App>
  )
}

export default FriendList;