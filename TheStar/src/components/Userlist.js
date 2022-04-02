import { useState } from 'react';
import TabbarUp from './TabbarUp.js';
import '../css/Userlist.css';
import FriendList from '../FriendList.js';
import App2 from './App2.js';
function Userlist () {
  const [trayStatus, setTrayStatus] = useState("open");

  function onButtonClicked() {
    setTrayStatus(oldStatus => oldStatus === "open" ? "closed" : "open");
  }

  return (
    <div className={"userlist "+trayStatus}>
      <FriendList>
      <div className="close-button" onClick={onButtonClicked}>x</div>
      </FriendList>
    </div>
  )
}

export default Userlist;