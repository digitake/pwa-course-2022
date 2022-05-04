import { useState } from "react";
import '../css/Option.css';

function Inputbox (props) {
  const [value, setValue] = useState(props.value||"");

  const [trayStatus, setTrayStatus] = useState("closed");
 
  function handleKeyPress(event) {
    if(event.key === 'Enter' && value !== ""){
      props.onEnter(value);
      setValue("");
    }
  }

  function onButtonClicked() {
    setTrayStatus(oldStatus => oldStatus === "open" ? "closed" : "open");
  }

  return (
    <div className="inputbox">

    <div >
      <input type="image" className="icon" onClick={onButtonClicked}  src="/icon-image/plus2-01.png" />
            <div className={"option "+trayStatus}>
              <img src="/icon-image/pic-01.png" className={"icon "+trayStatus }/>
              <img src="/icon-image/VDO-01.png" className={"icon "+trayStatus} />
            </div>
    </div>

      <><label className="label1" htmlFor="inputmsg">
          {props.label}
        </label>
          <input
            id="inputmsg"
            type="text"
            className="text"
            value={value}
            autoComplete="off"
            onChange={e => {
              setValue(e.target.value);
              props.onChange && props.onChange(e.target.value);
            } }
            onKeyPress={handleKeyPress} />
            <input
            type="button"
            value="Send"
            onClick={() => {
              props.onEnter(value);
              setValue("");
            } }
            className="button" /></>    
    </div>
  )
}

export default Inputbox;