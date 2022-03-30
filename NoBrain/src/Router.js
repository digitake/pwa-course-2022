import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Chat from "./Chat";
<<<<<<< HEAD
import PrivateChat from "./PrivateChat";
import Profile from "./Profile";
import FriendList from "./FriendList";
import FriendProfile from "./FriendProfile";
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
              <Route path="/friend-list" element={<FriendList />}/>
              <Route path="/friend/:uid" element={<FriendProfile />}/>
              <Route path="/" element={<Profile />}/>
            </Routes>
          </BrowserRouter>
        </ChatStateProvider>
      );
  } else {
    return <LoginComponent />;
  }
=======
import Profile from "./Profile";
import FriendList from "./FriendList";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chat" element={<Chat />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/friend-list" element={<FriendList />}/>
        <Route path="/" element={<FriendList />}/>
      </Routes>
    </BrowserRouter>
  );
>>>>>>> eb394efbc6782808612de935bf05a22154bf08f8
}

export default Router;
