import { useState } from "react";

function AccountInput (props) {
  const [value, setValue] = useState(props.value||"");

  return (
    <div className="AccountInput">
      <label className="label1" htmlFor="inputmsg">
        {props.label}
      </label>
      <input
        type="text"
        className="text"
        value={value}
        onChange={e => {
          setValue(e.target.value);
          props.onChange && props.onChange(e.target.value);
        }}
      />  
    </div>
  )
}

export default AccountInput;