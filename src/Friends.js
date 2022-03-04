import './css/Friends.css';
import { useState } from 'react';
import App from './components/App.js';
import Avatar from './components/Avatar.js';

function Friends () {
    const [friendsList, setFriends] = useState([
        {user: "user1", displayName: "_Delphinus"},
        {user: "user2", displayName: "_Howdyz"},
        {user: "user3", displayName: "_KonRao"},
        {user: "user4", displayName: "_Songphon"},
    ]);

    return (
        <App>
            <div className="title-friends">Friends</div>
            <div className="friend-list">
            {
                friendsList.map (x=> 
                <div className='friend-list-item'>
                <Avatar name={x.user}/>
                {Avatar.user}{x.displayName}
                </div>)
            }
            </div>
        </App>
    )
}
export default Friends;
