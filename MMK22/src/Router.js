import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import App from './App.js';
import Profile from './Profile.js';
import Select_profile from './Select_profile.js';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <App/>} />
                <Route path="/profile" element={ <Profile/>} />
                <Route path="/select_profile" element={ <Select_profile/>} />
            </Routes>
        </BrowserRouter>
   
    )
}

export default Router;