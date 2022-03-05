import { useState } from 'react';
import './FriendList.css';
import App from './components/App';
import Avatar from './components/Avatar';
import Userlist from './components/Userlist';
import Chatbox from './components/Chatbox';

function FriendList(){
  let [friends, setFriends] = useState([
    {user: "user1", displayName: "SoundBaht", },
    {user: "user2", displayName: "MINIMALIZT"},
    {user: "user3", displayName: "Synny"},
    {user: "user4", displayName: "aJARN"},
  ]);

  return(
    <App>
      <div className='friend-list'>
        {
          friends.map ( x=>
            <div className='friend-list-item friend-list-text-align'>
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