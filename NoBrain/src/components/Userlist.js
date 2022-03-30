import { useState } from 'react';
import '../css/Userlist.css';
import '../css/Tabbar.css';
import { Link } from 'react-router-dom';

function Userlist () {
  const [tryStatus, setTrayStatus] = useState("close");

  function onButtonClicked() {
    if (tryStatus === 'close'){
        setTrayStatus('open')
    }if(tryStatus === 'open')
    {
      setTrayStatus('close')
    }
  }

  return (
    <div>
      <div className={"userlist "+tryStatus}> <div className="close-button" value ="x" onClick={onButtonClicked}>X</div><div className="tabbar">
      <Link to="/friend-list" className="tabbutton1">
      <ion-icon name="people-outline"></ion-icon>
      </Link>
      <Link to="/chat" className="tabbutton1">
      <ion-icon name="chatbubble-outline"></ion-icon>
      </Link>
      <Link to="/profile" className="tabbutton1">
      <ion-icon name="person-outline"></ion-icon>
      </Link>
      </div>
      </div>
    </div>
  )
}

export default Userlist;