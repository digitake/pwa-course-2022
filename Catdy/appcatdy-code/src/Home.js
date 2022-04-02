import './Home.css';
import {useState} from "react";
import { Link } from 'react-router-dom';
import App from './components/App.js';

function Home(){
    const [name, setName] = useState("Unknown");

    return(
         <App>
            <div  className= "dog" >รูปของน้องสัตว์เลี้ยง </div>
            <img src ="https://www.peniaphobia.com/wp-content/uploads/2021/08/%E0%B8%AB%E0%B8%A1%E0%B8%B2-%E0%B8%AA%E0%B8%B8%E0%B8%99%E0%B8%B1%E0%B8%82.jpg" height="300" width="500" ></img>
            <div className= "box"> "น้องปอมปอม" เป็นน้องน้องหมาดูแลง่ายไม่ดื้อ น้องขี้เล่น น้องจะทานอาหาร 3 เวลาต้องการที่จะหาคนรับฝากน้องเป็นเวลา 5 วัน </div>
            <input type="button" value = "Chat" onClick moveTo={"chat"}/> <input type="button" value = "Confirm" onClick/>
            <div  className= "dog" >รูปของน้องสัตว์เลี้ยง </div>
            <img src ="http://www.felinepkd.com/wp-content/uploads/2018/09/1384861700-0003-o.jpg" height="300" width="500" ></img>
            <div className= "box"> "น้อง Lucky" เป็นน้องแมวพันธ์ุ เปอร์เซียดูแลง่าย  น้องมีความซนและขี้เล่น น้องจะทานอาหาร 3 เวลาต้องการที่จะหาคนรับฝากเลี้ยงน้องเป็นเวลา 3 วัน สอบถามเพิ่มเติมทางช่องข้อความเลยนะครับ </div>
            <input type="button" value = "Chat" Link to="/chat" className="tabbutton" Chat /> <input type="button" value = "Confirm" onClick/>
            <Link to="/chat" className="tabbutton"> Chat </Link>
            
        </App>
    )
}

export default Home;