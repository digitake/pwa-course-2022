import { useState } from 'react';
import './FriendList.css';
import App from './components/App';
import Avatar from './components/Avatar';
import Userlist from './components/Userlist';


function FriendList(){
  const [friends, setFriends] = useState([
    {user: "user1", displayName: "ไอ้ปื้ด"},
    {user: "user2", displayName: "นางสาวสุดา"},
    {user: "user3", displayName: "พลทหารหนึ่ง"},
    {user: "user4", displayName: "ศาตราจารย์นายกรัฐมนตรีดอกเตอร์เขียว"},
  ]);

  const [favorite, setFavorite] = useState([
    {user: "user1", displayName: "ไอ้ปื้ด"},
    {user: "user2", displayName: "นางสาวสุดา"},
    {user: "user3", displayName: "พลทหารหนึ่ง"},
    
  ]);

  return(
    <App>
      <div className="friend-list">
      <div className="friend-icon">Favorite</div>
      <div className="favorite">
      {
        favorite.map( x=>
        <div className="favorite-friend">
          <Avatar name={x.user}/>{x.displayName}
        </div>)
      }
      </div>
       <div className="friend-icon">Friends</div>
       {
         friends.map( x=> 

            <div className="friend-list-item"> 
            <Avatar name={x.user}/>{x.displayName}
            </div>
          )
       
      }
      </div>
    </App>
  )
}

export default FriendList;