import { useState } from 'react';
import './FriendList.css';
import App from './components/App';
import Avatar from './components/Avatar';

function FriendList(){
  const [friends, setFriends] = useState([
    {user: "user1", displayName: "Max"},
    {user: "user2", displayName: "Mint"},
    {user: "user3", displayName: "Bank"},
    {user: "user4", displayName: "Kao"},
    {user: "user5", displayName: "Nik"},
  ]);

  return(
    <App>
      <div className="friend-list">
       {
         friends.map( x =>
          <div className='friend-list-item'>
          <Avatar name={x.user}/>
            {x.displayName}
          </div>
          )
       }
      </div>
    </App>
  )
}

export default FriendList;