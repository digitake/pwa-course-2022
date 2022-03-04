import {useState} from "react";
import './css/Profile.css';
import { Avatar } from './components/Avatar.js';
import App from './components/App.js';

function Profile() {
  const [name, setName] = useState("Unknown");


  return (
    <App>
      <div className="Profile">
        <Avatar name={name}/>
        <label className="label1" for="displayname"/>
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