import { useState } from "react";
import "./Chat2.css";

function Chat2() {

    const [size,setSize] = useState("small");

    function changeSize() {
        if (size === "small"){
            setSize("middle");
        } else if (size === "middle")
        {
            setSize("large");
        }
        else if (size === "large")
        {
            setSize("small");
        }
    }
 

    return (
        <div>
           <input type="button" value="Size" onClick={changeSize}/>
           <div className={"circle " + size}/>
        </div>
    )
}

export default Chat2;