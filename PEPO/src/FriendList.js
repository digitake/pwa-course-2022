import { useState } from 'react';
import './FriendList.css';
import App from './components/App';
import Avatar from './components/Avatar';

function FriendList(){
  let [friends, setFriends] = useState([
    {user: "user1", displayName: "Book"},
    {user: "user2", displayName: "Kla"},
    {user: "user3", displayName: "the boy"},
    {user: "user4", displayName: "Sorn"},
  ]);

  return(
    <App>
      <div className="friend-list">
      {friends.map (x=>
        <div className="friend-list-item">
          <Avatar name = {x.user}/> 
          {x.displayName}
        </div>
      )}
      </div>
    </App>
  );
}

export default FriendList;