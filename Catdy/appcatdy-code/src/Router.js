import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.js'
import Profile from './Profile.js'
import Chat from './Chat.js';
import Friendlist from './Friendlist.js';

function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <App/>} />
                <Route path="/profile" element={ <Profile/> } />
                <Route path="/chat" element={ <Chat/> } />
                <Route path="/friend" element={ <Friendlist/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;