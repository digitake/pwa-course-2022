import App from './components/App.js';
import {useState} from "react";
import './ProfileApp.css';
import Avatar from './components/Avatar.js';

function ProfileApp() {
  const [name, setName] = useState("Unknown");


  return (
    <App>
      <div className="ProfileApp">
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

export default ProfileApp;