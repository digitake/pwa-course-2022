import { useState } from "react";
import { Button, TextField} from '@mui/material';

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
      <TextField
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
      <Button
        onClick={() => {
          props.onEnter(value);
          setValue("");
        }}
        className="button"
        color="warning"
      >Send</Button>    
    </div>
  )
}

export default Inputbox;