import App from './components/App.js';
import {useState} from "react";
import './Profile.css';
import Avatar from './components/Avatar.js';
import { useAuthStateContext } from './context/FirebaseAuthContextProvider';

function Profile() {
  const { authState, updateDisplayName, signOut } = useAuthStateContext();
  const [name, setName] = useState(authState.user.displayName);

  function save() {
    updateDisplayName(name).then(_=>{
      authState.user.reload()
    })
  }

  return (
    <App>
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
        <input type="button" value="Save" onClick={save}/>
        <input type="button" onClick={() => signOut()} value="Sign-out"/>
      </div>
    </App>
  );
}

export default Profile;