
import Chat from './Chat.js';
import ProfileApp from './ProfileApp.js';
import SearchFriends from './SearchFriends.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Chat />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/profileapp" element={<ProfileApp/>} />
                <Route path="/search-friends" element={<SearchFriends/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;