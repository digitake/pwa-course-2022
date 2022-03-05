import {useState} from "react";
import './css/Profile.css';
import { Avatar } from './components/Avatar.js';
import App from './components/App.js';

function Profile() {
  const [name, setName] = useState("Unknown");


  return (
    <App>
      <div className="Profile">
        <div className="title-profiles">
                <div className="left">
                    <img src="logo192.png" className="icon"/>
                </div>
                <div className="center">Friends</div>
                <div className="right">Right</div>
        </div>

        <Avatar name={name}/>
        <label className="label1" for="displayname"/>
        <input 
          id="displayname"
          type="text" 
          className="text" 
          value={name}
          onChange={e => setName(e.target.value)}
        />
      <div className="empty-div"></div>
      </div>
      
    </App>
  );
}

export default Profile;