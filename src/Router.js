import App from './App';
import Profile from './Profile';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path ="/" element={<App/>}/>
            <Route path ="/profile" element={<Profile/>}/>
            
        </Routes>
        </BrowserRouter>        
    )
}

export default Router;