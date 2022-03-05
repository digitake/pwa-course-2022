import { BrowserRouter,Routes,Route  } from 'react-router-dom';
import App from './App.js';
import Register from './RegisterForm.js';
import Chat from './Chat.js'

function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path= "/" element={<App/>} />
                <Route path= "/register" element={<Register/>} />
                <Route path= "/chat" element = {<Chat/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;