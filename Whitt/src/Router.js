import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import Chat from './Chat.js';
import PrivateChat from "./PrivateChat";
import ProfileApp from './ProfileApp.js';
import SearchFriends from './SearchFriends.js';
import FriendProfile from "./FriendProfile";
import { useAuthStateContext, LoginComponent } from './context/FirebaseAuthContextProvider';
import ChatStateProvider from "./context/FirebaseChatContextProvider";

function Router(){
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
              <Route path="/profileapp" element={<ProfileApp />}/>
              <Route path="/search-friends" element={<SearchFriends />}/>
              <Route path="/friend/:uid" element={<FriendProfile />}/>
              <Route path="/" element={<ProfileApp />}/>
            </Routes>
          </BrowserRouter>
        </ChatStateProvider>

        /*<BrowserRouter>
            <Routes>
                <Route path="/" element={<Chat />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/profileapp" element={<ProfileApp/>} />
                <Route path="/search-friends" element={<SearchFriends/>} />
            </Routes>
    </BrowserRouter>*/
    );
  } else {
    return <LoginComponent />;
  }
}
export default Router;