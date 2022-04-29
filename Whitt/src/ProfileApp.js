import App from './components/App.js';
import {useState} from "react";
import './ProfileApp.css';
import Avatar from './components/Avatar.js';
import { useAuthStateContext } from './context/FirebaseAuthContextProvider';

function ProfileApp() {
  const [name, setName] = useState("Unknown");
  const [photocount, setPhotocount] = useState(2);
  const [photos, setPhotos] = useState([
    {key: 1},{key: 2}
  ]);
  const addphoto = () => {
    setPhotocount(count => count+1)
    photos.push({key: photocount+1})
  }
  return (
    <App>
      <div className="ProfileApp">
        {/*<Avatar name={name}/>*/}
        <div className="bigavatar">
      <img src={`https://avatars.dicebear.com/api/human/Unknown.svg`} />
    </div>
        <div className='ProfileContainer'> 
        <h1>Olarn Sakharirak</h1>
        <textarea className='Description'></textarea>
        </div>
        
        {/*<input 
          id="displayname"
          type="text" 
          className="text" 
          value={name}
          onChange={e => setName(e.target.value)}
         />*/}

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