import App from './components/App.js';
import {useState} from "react";
import './Profile.css';
import Avatar from './components/Avatar.js';
import Tabbar from './components/Tabbar.js';
import FriendList from './FriendList.js';

function Profile() {
  const [name, setName] = useState("Unknown");


  return (
    <App>
      <FriendList/>
      <div className="Profile">
        <Avatar name={name}/>
        <label className="label1" htmlFor="displayname"/>
        <input 
          id="displayname"
          type="text" 
          className="text" 
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <Tabbar/>
    </App>
  );
}

export default Profile;