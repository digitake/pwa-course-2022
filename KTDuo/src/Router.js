import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Chat from "./Chat";
import Profile from "./Profile";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chat" element={<Chat />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/" element={<Chat />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
