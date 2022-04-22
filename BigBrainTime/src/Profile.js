import App from './components/App.js';
import {useState} from "react";
import './Profile.css';
import Avatar from './components/Avatar.js';

function Profile() {
  const [name, setName] = useState("มะม่วงหวาน");
  let ID = "Magnosteen";
  let BirthDay = "29/02/2000";


  return (
    <App>
      <div>
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
        <div className="Info">
          Name
          <div className='List'>{name}</div>
          ID
          <div className='List'>{ID}</div>
          BirthDay
          <div className='List'>{BirthDay}</div>
        
        </div>
      </div>
    </App>
  );
}

export default Profile;