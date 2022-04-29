import { useState } from "react";
{/*import { useState } from "react";

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
        value="Send" 
        onClick={() => props.onClick(value)} 
        className="button"
      />    
    </div>
  )
}
export default Inputbox;*/}



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