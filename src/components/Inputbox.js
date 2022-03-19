import { useState } from "react";

function Inputbox (props) {
  const [value, setValue] = useState(props.value||"");

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
        onChange={e => {
          setValue(e.target.value);
          props.onChange && props.onChange(e.target.value);
        }}
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