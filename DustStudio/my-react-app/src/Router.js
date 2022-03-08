import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home.js'
import App from './App'
import Profile from './Profile';
import Friend from './Friend';

function Router()
{
    return(
       <BrowserRouter>
       <Routes>
           <Route path="/" element = {<Home/>}/>
           <Route path="/app" element = {<App/>}/>
           <Route path="/profile" element = {<Profile/>}/>
           <Route path="/friend" element = {<Friend/>}/>
       </Routes>
       </BrowserRouter>
    )
}

export default Router;