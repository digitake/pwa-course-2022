import { useState } from 'react';
import '../css/Userlist.css';
import Avatarbot from './Avatarbot';
import '../css/Avatar.css';

function Userlist () {
  const [friends] = useState([
    {user: "user1", displayName: "ไอ้ปื้ด"},
    {user: "user2", displayName: "นางสาวส้ม"},
    {user: "user3", displayName: "พลทหารแดง"},
    {user: "user4", displayName: "ศาตราจารย์นายกรัฐมนตรีดอกเตอร์เขียว"},
  ]);

  return(
    
      <div className="friend-list">
     {
       friends.map( x =>
        <div className='friend-list-item'>
          <Avatarbot name={friends}/>
          { x.displayName }
        </div>
        )
     }
      </div>
    
  )
}


export default Userlist;