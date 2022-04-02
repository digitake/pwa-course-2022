import { useState } from 'react';
import './FriendList.css';
import Avatar from './components/Avatar';
import { useChatStateContext } from './context/FirebaseChatContextProvider';
import { Link } from 'react-router-dom';

function FriendList(){
  const { userList } = useChatStateContext();

  return(
    <div className="friend-list">
    <h2>Friends List</h2>
    {
      userList.map((item) => {
        return (
          <Link to={`/privatechat/${item.key}`} key={item.key}>
            <div className={`friend-list-item ${item.position}`}>
              <Avatar className="friend-avatar" name={item.displayName}/>
              <div className="friend-display">{item.displayName}</div>
            </div>
          </Link>
        )
      })
    }
    </div>
  )
}

export default FriendList;