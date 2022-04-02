import { useState } from 'react';
import '../css/Userlist.css';

function Userlist () {
  const [trayStatus, setTrayStatus] = useState("open");
  const [operate, setOperate] = useState("x");

  function onButtonClicked() {
    if(trayStatus === "closed")  setTrayStatus("open");
    else if(trayStatus === "open") setTrayStatus("closed");

    if(operate === "x") setOperate("o");
    else if(operate === "o") setOperate("x");
  }

  return (
    <div className={"userlist "+trayStatus}>
      <div className="close-button" onClick={onButtonClicked}>{operate}</div>
    </div>
  )
}

export default Userlist;