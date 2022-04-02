import {useState} from "react";
import './TestState.css';

function TestState(){
    const [size, setSize] = useState("small");

    function changeSize() {
        switch (size){
            case "small":
                setSize("medium");
                break;
            case "medium":
                setSize("large");
                break;
            case "large":
                setSize("small");
                break;
        }
    }

    return ( //Render
        <div>
            <input type={"button"} value={"Click me"} onClick={changeSize}/>
            <div className={"circle "+size}/>

        </div>
    )
}

export default TestState;