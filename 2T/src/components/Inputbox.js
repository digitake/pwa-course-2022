import { useState } from "react";

export function Inputbox (props) {
  const [value, setValue] = useState(props.value||"");

  return (
    <div className="inputbox">
      <label className="label1" for="inputmsg">
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
        value="ส่ง" 
        onClick={() => props.onClick(value)} 
        className="button"
      />    
    </div>
  )
}
