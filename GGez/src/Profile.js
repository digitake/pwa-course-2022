import App from './components/App.js';
import {useState} from "react";
import './Profile.css';
import Avatar from './components/Avatar.js';
import { useAuthStateContext } from './context/FirebaseAuthContextProvider';
import { Link } from 'react-router-dom';

function Profile() {
  const { authState, updateDisplayName, signOut } = useAuthStateContext();
  const [name, setName] = useState(authState.user.displayName);
  var Emt;

  console.log(typeof(name));
  function save() {
    updateDisplayName(name).then(_=>{
      authState.user.reload()
    })
  }

  if(name == "") {
     Emt = true
  }else{
     Emt = false
  }
  
  return (
    <App>
      {Emt ? (<div className="myProfile">
        <div class="profileBox">
          <Avatar name={name}/>
          <div className='formgroup'>
          <label className="label1" htmlFor="displayname"/>
          <input 
          id="displayname"
          type="text" 
          className="inputText" 
          value={name}
          onChange={e => setName(e.target.value)}
          />
          </div>
          <div class="btncover">
            <input type="button" class="smbform mgr8" value="Save" onClick={save}/>
            <input type="button" class="smbform mgl8" onClick={() => signOut()} value="Sign-out"/>
          </div>
          </div>
      </div>) 

      : (<div class="myProfile">
          <div class="profileBox">
          <Avatar name={name}/>
          <div class="dpNm">{name}</div>
          <div class="btncover">
              <Link to={`/friend-list`} class="ibtn">
              <i class="fa fa-users"></i><span>Friend</span>
              </Link>
              <a href="javascript:void(0);" class="ibtn" onClick={() => signOut()} value="Sign-out"><i class="fa fa-sign-out"></i><span>SignOut</span></a>
          </div>
          </div>
       </div>) }

    </App>
  );
}

export default Profile;