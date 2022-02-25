import {useState} from "react";
import './Profile.css';
import { Avatar } from './components/Avatar.js';

function Profile() {
  const [name, setName] = useState("Unknown");


  return (
    <div className="Profile">
      <div className='Profile-Top'> Home  </div>
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
  );
}

export default Profile;