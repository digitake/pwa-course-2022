import {useState} from "react";
import Tabbar from './components/Tabbar';
import './css/Profile.css'
import { Link } from 'react-router-dom';
import Avatarprofile from './components/Avatarprofile';
import { useAuthStateContext } from './context/FirebaseAuthContextProvider';
import { useChatStateContext } from './context/FirebaseChatContextProvider';

function Profile(){
  const { userList } = useChatStateContext();
  const { authState, updateDisplayName, signOut } = useAuthStateContext();
  const [name, setName] = useState(authState.user.displayName);

  function save() {
    updateDisplayName(name).then(_=>{
      authState.user.reload()
    })
  }

  return(
    <div className='profileboard'>
      <div className='ptop'>Profile</div>
      <div className='your'>
        <div className='yourpicture'>
          <Avatarprofile name={name}/>
        </div>
        <div className="yourname">
        <label className="label1" htmlFor="displayname"/>
        <input 
          id="displayname"
          type="text" 
          className="text" 
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input type="button" value="Save" onClick={save}/>
        </div>
      </div>
      <div className='friends'>Friends</div>
      <div className='list'>
      {
        userList.map((item) => {
          return (
            <Link to={`/chat/${item.key}`} key={item.key}>
              <div className="friendsflex">
                <div className={`friendspicture ${item.position}`}>
                  <Avatarprofile name={item.displayName}/>
                </div>
                <div className="friendsname">{item.displayName}</div>
              </div>
            </Link>
          )
        })
      }
      </div>
      <Tabbar/>
    </div>
  );
}

export default Profile