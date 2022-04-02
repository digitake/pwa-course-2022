import { useState } from "react";
import "../css/Inputbox.css"


function Inputbox (props) {
  const [value, setValue] = useState(props.value||"");

  return (
    <div className="inputbox">
      <label className="label1" htmlFor="inputmsg">
        {props.label}
      </label>
      <div class="btn-group dropdown">
        <button type="button" class="btn btn-sm btn-secondary " data-bs-toggle="dropdown" aria-expanded="false">
        <i class="fa fa-2x fa-plus-circle" aria-hidden="true"></i>
        </button>
        <ul class="dropdown-menu">
          <button type="button" class="fa fa-paperclip fa-3x btn btn-lg btn-secondary "  aria-hidden="true">
              
            </button>
          <button type="button" class="fa fa fa-picture-o fa-3x btn btn-lg btn-secondary  " aria-hidden="true">
            
            </button>
          <button type="button" class="fa fa-location-arrow fa-3x btn btn-lg btn-secondary  " aria-hidden="true">
            
            </button>
          
        </ul>
      </div>


      <input class="form-control" id="inputmsg" type="text" placeholder="Text me." aria-label="default input example" value={value} 
          onChange={e => {
          setValue(e.target.value);
          props.onChange && props.onChange(e.target.value);
        }}></input>
      
      
       <button class="fa fa-paper-plane btn btn-lg btn-secondary" aria-hidden="true" >
           {() => props.onClick(value)} 
         
         </button>

        
    </div>
  )
}

export default Inputbox;