import {BrowserRouter, Routes, Route} from "react-router-dom";
import Chat from "./Chat";
import Profile from "./Profile";
import FriendList from "./FriendList";
import Tittle from "./Tittle";
import Live from "./Live";



function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chat" element={<Chat />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/friend-list" element={<FriendList />}/>
        <Route path="/Live" element={<Live/>}/>
        <Route path="/" element={<Tittle/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
