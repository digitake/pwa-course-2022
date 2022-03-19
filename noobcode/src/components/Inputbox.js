import { useState } from "react";
import "../css/Inputbox.css"


function Inputbox (props) {
  const [value, setValue] = useState(props.value||"");

  return (
    <div className="inputbox">
      <label className="label1" htmlFor="inputmsg">
        {props.label}
      </label>
      <i class="button fa fa-picture-o fa-3x  btn btn-secondary" aria-hidden="true">
        </i>
      <i  type="button" class="fa fa-paperclip fa-3x btn btn-secondary " aria-hidden="true"></i>

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
        onClick={() => props.onClick(value)} 
        className="button" class="btn btn-secondary"
      />    
    </div>
  )
}

export default Inputbox;