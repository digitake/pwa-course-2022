import App from './App.js';
import Profile from './Profile.js';
import Minigame from './Minigame.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Steamchat from './Steamchat.js';

//index.js --> Router.js --> App.js

function Router(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={ <App /> } />
            <Route path="/profile" element={ <Profile /> } />
            <Route path="/minigame" element={ <Minigame /> } />
            <Route path="/steamchat" element={ <Steamchat /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;