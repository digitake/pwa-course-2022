import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home.js'
import App from './App'
import Profile from './Profile';
import Friend from './Friend-List';
import Group from './Group.js';
import SignIn from './SignIn.js';
import { auth } from "./firebase/firebase";
import { useState } from "react";


function Router()
{   
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
    
    if(isAuth){
        return(
            <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Home/>}/>
                <Route path="/app" element = {<App/>}/>
                <Route path="/profile" element = {<Profile/>}/>
                <Route path="/friend-list" element = {<Friend/>}/>
                <Route path="/group" element = {<Group/>}/>
                <Route path="/chat"/>
                <Route path="/privatechat/:uid"/>
                <Route path="/friend/:uid"/>
            </Routes>
            </BrowserRouter>
         )
    } else {
        return(
            <BrowserRouter>
            <Routes>
                <Route path="/" element = {<SignIn setIsAuth={setIsAuth}/>}/>
            </Routes>
        </BrowserRouter>
        );       
    }

}
        

export default Router;