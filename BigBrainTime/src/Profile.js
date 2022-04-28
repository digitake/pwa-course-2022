import App from './components/App.js';
import {useState, useEffect} from "react";
import './Profile.css';
import Avatar from './components/Avatar.js';
import { useAuthStateContext } from './context/FirebaseAuthContextProvider';
import { useChatStateContext } from './context/FirebaseChatContextProvider';
import FileBase64 from 'react-file-base64';

function Profile() {
  const { authState, updateDisplayName, signOut, updateBday } = useAuthStateContext();
  const { setUserImage, getUserImage } = useChatStateContext();
  const [name, setName] = useState(authState.user.displayName);
  const [base64Image, setBase64Image] = useState("");
  
  //const[Bday,setDate] = useState(authState.user.displayBday);

  let ID = authState.user.uid;
  let Birthday = "29/02/2002";

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
    /*updateBday(Bday).then(_=>{
      authState.user.reload()
      setDate(authState.user.Bday,Bday);

    });*/
  }

  function onDone(data) {
    setBase64Image(data.base64);
  }

  return (
    <App>
      <div>
      <div className="Profile">
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

        </div>

        <div className="Info">
          Name
          <div className='List'>{name}</div>
          ID
          <div className='List'>{ID}</div>
          BirthDay
          <div className='List'>{Birthday}
          <label className="label2" htmlFor="displayBday"/>
          </div>
        </div>

        <div className="Button">
          <input type="button" value="Save" onClick={save}/>
          
          <input type="button" onClick={() => signOut()} value="Sign-out"/>
        </div>
      </div>
    </App>
  );
}

export default Profile;