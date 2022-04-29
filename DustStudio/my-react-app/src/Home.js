import "./Home.css";
import App from './components/App';
import CreatePost from "./components/CreatePost";
import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "./context/FirebaseConfig";
import FriendList from "./FriendList";
import { Avatar, IconButton, Stack } from "@mui/material";
import { Delete }  from '@material-ui/icons';
import { useAuthStateContext } from './context/FirebaseAuthContextProvider';

  

function Home(){
    const { authState } = useAuthStateContext();
    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "posts");


    
    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
      };
  
      useEffect(() => {
        const getPosts = async () => {
          const data = await getDocs(postsCollectionRef);
          setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getPosts();
      }, [deletePost]);
  
    
    return(
        <App> 
            <div className ="row">
                <div className ="column75">
                <CreatePost></CreatePost>
                <div className="homePage">
                    {postLists.map((post) => {
                        return (
                        <div className="post">
                            <a className="a"></a>
                            <Stack direction="row" spacing={3} className="postHeader" alignItems = "center">
                            <a className="b"></a>
                            <Avatar>{post.author.name}</Avatar>
                            <h2>{post.author.name}</h2>
                            <div className="deletePost">
                                    {post.author.id === authState.user.uid && (
                                    <IconButton onClick={() => {deletePost(post.id);}}><Delete></Delete></IconButton>
                                )}
                            </div>
                            </Stack>
                            <div className="postName"><h3> {post.title}</h3></div>
                            <img className="Image" src={post.image}/>
                        </div>
                        );
                    })}
                </div>
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