import { useState } from 'react';
import './FriendList.css';
import Avatar from './components/Avatar';
import { useChatStateContext } from './context/FirebaseChatContextProvider';
import { Link } from 'react-router-dom';
import Nav from './components/Nav';
import Titlebar from './components/Titlebar';

function FriendList(){
  const { userList, imageDict } = useChatStateContext();

  return(
    <div className="friend-list">
    <Titlebar value="Friend List"/>  
    {
      userList.map((item) => {
        let img = imageDict[item.key];
        return (
          <Link to={`/privatechat/${item.key}`} key={item.key}>
            <div className={`friend-list-item ${item.position}`}>
              <Avatar className="friend-avatar" name={item.displayName} base64Image={img}/>
              <div className="friend-display">{item.displayName}</div>
            </div>
          </Link>
        )
      })
    }
    <Nav/>
    </div>
  )
}

export default FriendList;