import { BrowserRouter, Routers, Route } from'react-router-dom';

import App from './App.js';
import FriendList from './FriendList.js';
import Chat from './Chat.js';

function Router() {
    return (
        <BrowserRouter>
            <Routers>
                <Route path="/" element={ <App/> } />
                <Route path='/FriendList' element={ <FriendList/> } />
                <Route path='/Chat' element={ <Chat/> } />
            </Routers>
        </BrowserRouter>
    )
}

export default Router;