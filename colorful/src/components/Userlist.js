import { useState } from 'react';
import '../css/Userlist.css';

function Userlist () {
  const [trayStatus, setTrayStatus] = useState("open");

  function onButtonClicked() {
    // ex01 filling logic here
  }

  return (
    <div className={"userlist "+trayStatus}>
      <div className="close-button" onClick={onButtonClicked}>x</div>
    </div>
  )
}

export default Userlist;