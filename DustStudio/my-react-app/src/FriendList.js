import './FriendList.css';
import { useChatStateContext } from './context/FirebaseChatContextProvider';
import { Link } from 'react-router-dom';
import {Avatar, Stack} from '@mui/material';
import React from "react";


function FriendList(){
  const { userList } = useChatStateContext();

  return(
       <div className="friend-list">
      {
        userList.map((item) => {
          return (
            <Link to={`/privatechat/${item.key}`} key={item.key}>
              <a className='Block'></a>
              <Stack direction="row" spacing={3} alignItems = "center">
              <a className='Block'></a>
              <Avatar>{item.displayName}</Avatar>
              <div className={`friend-list-item ${item.position}`}>
                <div>{item.displayName}</div>
              </div>
              </Stack>
            </Link>
          )
        })
      }
      </div>
    
  )
}

export default FriendList;