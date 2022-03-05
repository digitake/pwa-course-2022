import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Chat from "./Chat";
import Profile from "./Profile";
import FriendList from "./FriendList";
import Home from "./Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chat" element={<Chat />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/" element={<Chat />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
