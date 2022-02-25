import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Userlist from "./Userlist";
import Title from "./Title";

function Router(){
return (
    <BrowserRouter>
     <Routes>
       <Route path="/Chat" element={ <App/>} />
       <Route path="/" element={ <Title/>} />
       <Route path="/Userlist" element={ <Userlist/> } />
     </Routes>
    </BrowserRouter>
 )
}

export default Router;