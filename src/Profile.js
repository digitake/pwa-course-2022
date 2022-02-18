import {useState} from "react";
import './Profile.css';
import { Avatar } from './components/Avatar.js';
import { Inputbox } from './components/Inputbox.js';

function Profile() {
  const [name, setName] = useState("Unknown");


  return (
    <div className="Profile">
      <Avatar name={name}/>
      <Inputbox label="Name:" onChange={setName}/>
    </div>
  );
}

export default Profile;