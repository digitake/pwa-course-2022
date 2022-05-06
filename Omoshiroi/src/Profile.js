import App from './components/App.js';
import { useState, useEffect } from "react";
import './Profile.css';
import Avatar from './components/AvatarProfile.js';
import Userlist from './components/TabbarLeft.js';
import { useAuthStateContext } from './context/FirebaseAuthContextProvider';
import { useChatStateContext } from './context/FirebaseChatContextProvider.js';
import FileBase64 from 'react-file-base64';


function Profile() {
  const { authState, updateDisplayName, signOut } = useAuthStateContext();
  const { setUserImage, getUserImage } = useChatStateContext();
  const [name, setName] = useState(authState.user.displayName);
  const [base64Image, setBase64Image] = useState("");

  useEffect(() =>{
    getUserImage(authState.user.uid).then(imgBase64 => {
      setBase64Image(imgBase64);
    })
  }, []);

  function save() {
    updateDisplayName(name).then(_=>{
      authState.user.reload()
      setUserImage(authState.user.uid, base64Image);
    });
  }

  function onDone(data) {
    setBase64Image(data.base64);
  }

  return (
    <App>
      <Userlist/>
      <div className="Profile">
        <Avatar name={name} base64Image={base64Image}/>     
          <input 
            id="displayname"
            type="text" 
            className="text text-name-profile" 
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <div className='Up-Save'>
          <FileBase64
            multiple={ false }
            onDone={ onDone } 
          />
          <input type="button" className='buttonSave' onClick={save}/>
          <div className='Save-Text'>SAVE</div>
          </div>
          <input type="button" className='buttonSignout' onClick={() => signOut()}/>
          <div className='Signout-Text'>Sign-out</div> 
      </div>
    </App>
  );
}

export default Profile;