import { useState } from 'react';
import '../css/Option.css';

function Option(){
    const [trayStatus, setTrayStatus] = useState("open");

    function onButtonClicked() {
      setTrayStatus(oldStatus => oldStatus === "open" ? "closed" : "open");
    }

      return (
        <div className={"option "+trayStatus}>
          <div className="close-button" onClick={onButtonClicked}>x</div>
          <img src="/icon-image/pic-01.png" className="icon" />
          <img src="/icon-image/VDO-01.png" className="icon" />
        </div>
      )
}
export default Option;