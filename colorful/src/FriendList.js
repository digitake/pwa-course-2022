import { useState } from 'react';
import './FriendList.css';
import App from './App';

function FriendList(){
  const [friends, setFriends] = useState([
    {user: "user1", displayName: "A"},
    {user: "user2", displayName: "B"},
    {user: "user3", displayName: "C"},
  ]);

  return(
    <App>
      <div className="friend-list">
       {friends.map(x => 
       <div className='friend-list-item'>
            <div>{friends.user}</div>
        {x.displayName}
         </div>
       )
       }
      </div>
    </App>
  )
}

export default FriendList;