import { useState } from "react";
import Option from '../components/Option'

function Inputbox (props) {
  const [value, setValue] = useState(props.value||"");
  const [trayStatus, setTrayStatus] = useState("open");

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
      <div className={Option +trayStatus}>
        <img src="/icon-image/plus2-01.png" className="icon" onClick={onButtonClicked} />
        </div>
      <label className="label1" htmlFor="inputmsg">
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
        }}
        onKeyPress={handleKeyPress}
      />
      <input 
        type="button" 
        value="Send" 
        onClick={() => {
          props.onEnter(value);
          setValue("");
        }}
        className="button"
      />    
    </div>
  )
}

export default Inputbox;