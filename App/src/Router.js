import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Profile from './Profile.js';
import Userlist from "./Userlist";

function Router(){
return (
    <BrowserRouter>
     <Routes>
       <Route path="/" element={ <App/>} />
       <Route path="/Profile" element={ <Profile/> } />
       <Route path="/Userlist" element={ <Userlist/> } />
     </Routes>
    </BrowserRouter>
 )
}

export default Router;