import { useState } from 'react';
import './FriendList.css';
import App from './components/App';
import Avatar from './components/Avatar';

function FriendList(){
  const [friends, setFriends] = useState([
    {user: "user1", displayName: "John"},
    {user: "user2", displayName: "White"},
    {user: "user3", displayName: "Black"},
    {user: "user4", displayName: "ข้าวสาร"},
  ]);

  return(
    <App>
      <div className="friend-list">
       {
       friends.map (x=>
        <div className= 'friend-list-item' >
          <Avatar name = {x.user}/>
          {x.displayName}
          </div>
         )
         }
      </div>
    </App>
  )
}

export default FriendList;