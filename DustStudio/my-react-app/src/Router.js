import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home.js'
import App from './App'
import Profile from './Profile';
import Friend from './Friend';
import Group from './Group.js';

function Router()
{
    return(
       <BrowserRouter>
       <Routes>
           <Route path="/" element = {<Home/>}/>
           <Route path="/app" element = {<App/>}/>
           <Route path="/profile" element = {<Profile/>}/>
           <Route path="/friend" element = {<Friend/>}/>
           <Route path="/group" element = {<Group/>}/>
           <Route path="/sign_in"/>
       </Routes>
       </BrowserRouter>
    )
}

export default Router;