import { useState } from 'react';
import './FriendList.css';
import App from './components/App';
import Avatar from './components/Avatar';
import Friendlist from './components/Friendlist.js';

function FriendList(){
  const [friends, setFriends] = useState([
    {user: "user1", displayName: "มนุษย์ 1"},
    {user: "user2", displayName: "มนุษย์ 2"},
    {user: "user3", displayName: "มนุษย์ 3"},
    {user: "user4", displayName: "มนุษย์ 4"},
  ]);

  return(
    <App>
      <div className="chat">
        <Friendlist/>
        <div className="friend-list">
          {
            friends.map( x=>
            <div className='friend-list-item'>
              <Avatar name={x.user}/>
              <div className='friend-list-name'>
                {x.displayName}
              </div>
            </div>
            )
          }
        </div>
      </div>
    </App>
  )
}

export default FriendList;