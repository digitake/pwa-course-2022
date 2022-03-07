import { useState } from 'react';
import './FriendList.css';
import App from './components/App';
import Avatar from './components/Avatar';
import { useChatStateContext } from './context/FirebaseChatContextProvider';

function FriendList(){
  const { userList } = useChatStateContext();

  return(
    <App>
      <div className="friend-list">
      {
        userList.map((item) => {
          return (<div key={item.key} className={`friend-list-item ${item.position}`}>
            <Avatar name={item.key}/>
            <div>{item.displayName}</div>
          </div>)
        })
      }
      </div>
    </App>
  )
}

export default FriendList;