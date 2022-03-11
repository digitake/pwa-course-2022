import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Chat from "./Chat";
import Profile from "./Profile";
import FriendList from "./FriendList";
import AddNew from "./components/AddNew";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chat" element={<Chat />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/friend-list" element={<FriendList />}/>
        <Route path="add-new" element={<AddNew/>}/>
        <Route path="/" element={<FriendList />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
