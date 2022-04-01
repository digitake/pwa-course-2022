import App from './components/App.js';
import {useState} from "react";
import './Profile.css';
import Avatar from './components/Avatar.js';
import { useAuthStateContext } from './context/FirebaseAuthContextProvider';
import FriendList from './FriendList.js';
import Tabbar from './components/Tabbar.js';

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
      <FriendList/>
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
      <Tabbar/>
    </App>
  );
}

export default Profile;

// import App from './components/App.js';
// import {useState, useEffect} from "react";
// import './Profile.css';
// import Avatar from './components/Avatar.js';
// import { useAuthStateContext } from './context/FirebaseAuthContextProvider';
// import { useChatStateContext } from './context/FirebaseChatContextProvider.js';
// import FileBase64 from 'react-file-base64';
// import FriendList from './FriendList.js';
// import Tabbar from './components/Tabbar.js';


// function Profile() {
//   const { authState, updateDisplayName, signOut } = useAuthStateContext();
//   const { setUserImage, getUserImage } = useChatStateContext();
//   const [name, setName] = useState(authState.user.displayName);
//   const [base64Image, setBase64Image] = useState("");

//   useEffect(() =>{
//     getUserImage(authState.user.uid).then(imgBase64 => {
//       setBase64Image(imgBase64);
//     })
//   }, []);
  
//   function save() {
//     updateDisplayName(name).then(_=>{
//       authState.user.reload()
//       setUserImage(authState.user.uid, base64Image);
//     })
//   }

//   function onDone(data) {
//     setBase64Image(data.base64);
//   }

//   return (
//     <App>
//       <FriendList/>
//       <div className="Profile">
//         <Avatar name={name} base64Image={base64Image}/>
//         <label className="label1" htmlFor="displayname"/>
//         <input 
//           id="displayname"
//           type="text" 
//           className="text" 
//           value={name}
//           onChange={e => setName(e.target.value)}
//         />
//         <FileBase64
//           multiple={ false }
//           onDone={ onDone } 
//         />
//         <input type="button" value="Save" onClick={save}/>
//         <input type="button" onClick={() => signOut()} value="Sign-out"/>
//       </div>
//       <Tabbar/>
//     </App>
//   );
// }

// export default Profile;