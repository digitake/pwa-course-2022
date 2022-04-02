import App from './components/App.js';
import {useState} from "react";
import './Profile.css';
import Avatar from './components/Avatar.js';

function Profile() {
  const [name, setName] = useState("Unknown");


  return (
    <App>
      <div className="Profile">
        <div className="pro"> Mr.Chitsanupong Sri-kaew </div>
        <div className="Ero"> User : filmkb_53@hotmail.com </div>
      </div>
    </App>
  );
}

export default Profile;