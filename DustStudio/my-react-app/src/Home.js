import "./Home.css";
import App from './components/App';
import CreatePost from "./components/CreatePost";
import FriendList from "./FriendList";
import Post from "./components/Post";

  

function Home(){
   
  
    
    return(
        <App> 
            <div className ="row">
                <div className ="column75">
                <CreatePost></CreatePost>
                <Post />
                </div>
            <div className ="column25">              
            <div className="title">Friend lists</div>
              <FriendList></FriendList>
            </div>
            </div>
        </App>
       
    );
}

export default Home;