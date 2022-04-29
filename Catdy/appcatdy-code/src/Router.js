import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Chat from "./Chat";
import PrivateChat from "./PrivateChat";
import Profile from "./Profile";
import FriendList from "./FriendList";
import Home from "./Home";
import { useAuthStateContext, LoginComponent } from './context/FirebaseAuthContextProvider';
import ChatStateProvider from "./context/FirebaseChatContextProvider";

function Router() {
  const { authState } = useAuthStateContext();

  if (authState && authState.state === "AUTHENTICATION_LOADING") {
    return <div>Loading...</div>;
  }
  else if (authState && authState.state === "AUTHENTICATED") {
    return (
      <ChatStateProvider self={authState.user}>
    <BrowserRouter>
      <Routes>
        <Route path="/chat" element={<Chat />}/>
        <Route path="/privatechat/:uid" element={<PrivateChat />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/" element={<Chat />}/>
      </Routes>
    </BrowserRouter>
    </ChatStateProvider>
   );
 } else {
  return <LoginComponent />;
 }
}


export default Router;
