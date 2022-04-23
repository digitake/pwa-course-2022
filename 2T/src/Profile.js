import {useState , useEffect} from "react";
import Tabbar from './components/Tabbar';
import './css/Profile.css'
import { Link } from 'react-router-dom';
import Avatarprofile from './components/Avatarprofile';
import { useAuthStateContext } from './context/FirebaseAuthContextProvider';
import { useChatStateContext } from './context/FirebaseChatContextProvider';
import FileBase64 from 'react-file-base64';

function Profile(){
  const { userList, imageDict} = useChatStateContext();
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

  return(
    <div className='profileboard'>
      <div className='ptop'>Profile</div>
      <div className='your'>
        <div className='yourpicture'>
          <Avatarprofile name={name} base64Image={base64Image}/>
        </div>
        <div className="yourname">
          <label className="label1" htmlFor="displayname"/>
          <div className="userinfo">
            <input 
              id="displayname"
              type="text" 
              className="text" 
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="userinfo">
            <FileBase64
              multiple={ false }
              onDone={ onDone } 
            />
          </div>
          <div className="userinfo"><input type="button" value="Save" onClick={save}/></div>
          <div className="userinfo"><input type="button" onClick={() => signOut()} value="Sign-out"/></div>
        </div>
      </div>
      <div className='friends'>Friends</div>
      <div className='list'>
      {
        userList.map((item,i) => {
          return (
            <Link to={`/chat/${item.key}`} key={item.key}>
              <div className="friendsflex">
                <div className={`friendspicture ${item.position}`}>
                <Avatarprofile name={item.displayName} base64Image={imageDict[item.key]}/>
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

export default Profile;