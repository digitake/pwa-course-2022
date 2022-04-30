import App from './components/App.js';
import {useState} from "react";
import './Profile.css';
import AvatarProfile from './components/AvatarProfile.js';
import { useAuthStateContext } from './context/FirebaseAuthContextProvider';

function Profile() {
  const { authState, updateDisplayName, updateDisplayStatus, signOut } = useAuthStateContext();
  const [name, setName] = useState(authState.user.displayName);
  const [status, setStatus] = useState(authState.user.displayStatus);

function save() {
    updateDisplayName(name).then(_=>{
      authState.user.reload()
    })
    updateDisplayStatus(status).then (_=> {
      authState.status.reload()
    })
  }

  return (
    <App>
      <div className="Profile">
        <AvatarProfile name={name}/>
        <div className='username-style'>ชื่อผู้ใช้</div> 
        <label className="inputname" htmlFor="displayname"/>

        <input 
          id="displayname"
          type="text" 
          className="input-textboxt-align" 
          value={name}
          placeholder="ใส่ชื่อของคุณ"
          onChange={e => setName(e.target.value)}
        />

        <div className='status-style'>ตั้งสถานะ</div> 

        <input 
          id="displaystatus"
          type="text" 
          className="input-textboxt-align" 
          value={status}
          placeholder="คุณกำลังรู้สึกอย่างไร..."
          onChange={e => setStatus(e.target.value)}
        />

        
        <button className='profile-align' onClick={save}>บันทึก</button>
        <button className='profile-align' onClick={() => signOut()}>ลงชื่อออก</button>
      </div>
    </App>
  );
}

export default Profile;