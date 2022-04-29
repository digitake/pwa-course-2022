import App from './components/App.js';
import { useState, useEffect } from "react";
import './ProfileApp.css';
import Avatar from './components/Avatar.js';
import { useAuthStateContext } from './context/FirebaseAuthContextProvider';
import { useChatStateContext } from './context/FirebaseChatContextProvider.js';
import FileBase64 from 'react-file-base64';

function ProfileApp() {
  const { authState, updateDisplayName, signOut } = useAuthStateContext();
  const { setUserImage, getUserImage } = useChatStateContext();
  const [name, setName] = useState(authState.user.displayName);
  const [base64Image, setBase64Image] = useState("");
  const [photocount, setPhotocount] = useState(2);
  const [photos, setPhotos] = useState([
    {key: 1},{key: 2}
  ]);
  const addphoto = () => {
    setPhotocount(count => count+1)
    photos.push({key: photocount+1})
  }

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
      <div className="ProfileApp">
      <Avatar name={name} base64Image={base64Image}/>
        <label className="label1" htmlFor="displayname"/>
        <input 
          id="displayname"
          type="text" 
          className="text" 
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <FileBase64
          multiple={ false }
          onDone={ onDone } 
        />
        <input type="button" value="Save" onClick={save}/>
        <input type="button" onClick={() => signOut()} value="Sign-out"/>

        <div> 
            <textarea className='Description'></textarea>
        </div>
        
      </div>
      <div className='Photos'>
        <div className='Photolist'>
        
          {photos.map(photo => <div className='Photo'>{photo.key}</div>)}</div>
        <div onClick = {addphoto}className='addphoto'>+</div>
      </div>
    </App>
  );
}

export default ProfileApp;