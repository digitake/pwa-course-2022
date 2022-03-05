import App from './components/App.js';
import {useState} from "react";
import './Profile.css';
import Avatar from './components/Avatar.js';
import MyProfile from './components/MyProfile.js';

function Profile() {
  const [name, setName] = useState("Unknown");

  return (
    <App>
      <div className="chat">
        <MyProfile/>
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
      </div>
    </App>
  );
}

export default Profile;