import { useState } from 'react';
import '../css/Userlist.css';

function Userlist () {
  const [trayStatus, setTrayStatus] = useState("open");

  function onButtonClicked() {
    if (trayStatus === "closed")
    {
      setTrayStatus("open")
    }else if (trayStatus === "open")
    {
      setTrayStatus("closed")
    }
  }

  return (
    <div className={"userlist "+trayStatus}>
      <div className="close-button" onClick={onButtonClicked}>-</div>
    </div>
  )
}

export default Userlist;