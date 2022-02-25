import App from './App.js';
import Profile from './Profile.js';
import Chat from './Chat.js';
import Friends from './Friends';
import AddFriends from './AddFriends';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <App /> } />
                <Route path="/profile" element={ <Profile/> } />
                <Route path="/chat" element={ <Chat /> } />
                <Route path="/friends" element={ <Friends /> } />
                <Route path="/add-friends" element={ <AddFriends /> } />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;