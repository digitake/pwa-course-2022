import Chatbox from './Chatbox.js';
import Profile from './Profile.js';
import Chat from './components/Chat.js';
import Friends from './Friends.js';
import AddFriends from './components/AddFriends.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Chatbox/> } />
                <Route path="/profile" element={ <Profile/> } />
                <Route path="/chat" element={ <Chat/> } />
                <Route path="/friends" element={ <Friends/> } />
                <Route path="/add-friends" element={ <AddFriends/> } />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;