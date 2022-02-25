import App from './App';
import Profile from './Profile';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import PicVidFile from './PicVidFile';
function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path ="/" element={<App/>}/>
            <Route path ="/profile" element={<Profile/>}/>
            <Route path ="/picvid" element={<PicVidFile/>}/>
        </Routes>
        </BrowserRouter>        
    )
}

export default Router;