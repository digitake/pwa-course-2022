import './Home.css';
import {useState} from "react";
import App from './components/App.js';

function Home(){
    const [name, setName] = useState("Unknown");

    return(
         <App>
            <div  className= "dog" >รูปของน้องสัตว์เลี้ยง </div>
            <img src ="https://www.peniaphobia.com/wp-content/uploads/2021/08/%E0%B8%AB%E0%B8%A1%E0%B8%B2-%E0%B8%AA%E0%B8%B8%E0%B8%99%E0%B8%B1%E0%B8%82.jpg" height="350" width="550" ></img>
            <div className= " box"> ข้อมูลของน้องสัตว์เลี้ยง </div>
            <div className='total'> "น้องปอมปอม" </div>

        </App>
    )
}

export default Home;