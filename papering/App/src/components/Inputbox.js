import { useState } from "react";

function Inputbox (props) {
  const [value, setValue] = useState(props.value||"");

  function handleKeyPress(event) {
    if(event.key === 'Enter' && value !== ""){
      props.onEnter(value);
      setValue("");
    }
  }

  return (
    <div className="inputbox">
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