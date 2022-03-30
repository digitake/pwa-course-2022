import App from './components/App.js';
import {useState} from "react";
import './Profile.css';
import Avatar from './components/Avatar.js';
<<<<<<< HEAD
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
=======

function Profile() {
  const [name, setName] = useState("Unknown");


  return (
    <App>      
      <div className="userbox"/>
>>>>>>> eb394efbc6782808612de935bf05a22154bf08f8
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
<<<<<<< HEAD
        <input type="button" value="Save" onClick={save}/>
        <input type="button" onClick={() => signOut()} value="Sign-out"/>
=======
>>>>>>> eb394efbc6782808612de935bf05a22154bf08f8
      </div>
    </App>
  );
}

export default Profile;