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
    <div className="chatInput">
      <div className="finput">
      
      <div class="formgroup mgb0">
          <input type="text" className="inputText" value={value}
        autoComplete="off"
        onChange={e => {
          setValue(e.target.value);
          props.onChange && props.onChange(e.target.value);
        }}
        onKeyPress={handleKeyPress}/>
      </div>
      </div>
      <div className="fsubmit"> 
      <button class="smbform" type="button" value="Send" onClick={() => {
          props.onEnter(value);
          setValue("");
        }}><i class="fa fa-send"></i></button>
      </div>
    </div>
  )
}

export default Inputbox;