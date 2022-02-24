import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import App from './App.js';
import Profile from './Profile.js';
import KKkung from './KKkung.js';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <App/>} />
                <Route path="/profile" element={ <Profile/>} />
                <Route path="/kkkung" element={ <KKkung/>} />
            </Routes>
        </BrowserRouter>

    )
}

export default Router;