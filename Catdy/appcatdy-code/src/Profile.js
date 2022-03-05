import App from './components/App.js';
import {useState} from "react";
import './Profile.css';
import Avatar from './components/Avatar.js';

function Profile() {
  const [name, setName] = useState("Unknown");


  return (
    <App>
      <div className="Profile">
        <div className="pro"> ข้อมูลของผู้ใช้งาน </div>
      </div>
    </App>
  );
}

export default Profile;