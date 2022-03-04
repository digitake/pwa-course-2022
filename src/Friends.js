import './css/Friends.css';
import { useState } from 'react';
import App from './components/App.js';
import Avatar from './components/Avatar.js';

function Friends () {
    const [friendsList, setFriends] = useState([
        {user: "user1", displayName: "ไอ้ปื้ด"},
        {user: "user2", displayName: "นางสาวส้ม"},
        {user: "user3", displayName: "พลทหารแดง"},
        {user: "user4", displayName: "ศาตราจารย์นายกรัฐมนตรีดอกเตอร์เขียว"},
    ]);

    return (
        <App>
            <div className="friend-list">
            {
                friendsList.map (x=> 
                <div className='friend-list-item'>
                <Avatar name={x.user}/>
                {Avatar.user}{x.displayName}
                </div>)
            }
            <div className='body-friends'>
            <div className="title-friends">Friends</div>
            <div className="list-friends"></div>
            <div className="icon-friends"></div>
            </div>
            </div>
        </App>
    )
}
export default Friends;
