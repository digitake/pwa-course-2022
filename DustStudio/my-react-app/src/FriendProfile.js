import App from './components/App.js';
import { useState, useEffect} from "react";
import './Profile.css';
import Avatar from './components/Avatar.js';
import { useChatStateContext } from './context/FirebaseChatContextProvider';
import { useParams } from "react-router-dom";

function FriendProfile() {
  const { uid } = useParams();

  const { getUserProfile } = useChatStateContext();
  const [ name, setName ] = useState("");

  useEffect(() => {
    getUserProfile(uid)
    .then(user => {
      setName(user.displayName);
    })

    return () => {}
  }, [uid,getUserProfile]);


  return (
    <App>
      <div className="Profile">
        <Avatar name={name}/>
        <span>{name}</span>
      </div>
    </App>
  );
}

export default FriendProfile;