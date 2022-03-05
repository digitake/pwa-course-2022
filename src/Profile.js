import App from './components/App.js';
import {useState} from "react";
import './Profile.css';
import Avatar from './components/Avatar.js';
import Tabprofile from './components/Tabprofile';

function Profile() {
  const [name, setName] = useState("Unknown");


  return (
    <App>
      <Tabprofile/>
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
    </App>
  );
}

export default Profile;