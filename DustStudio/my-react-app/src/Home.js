import "./Home.css";
import TopNav from "./components/TopNav";
import CreatePost from "./components/CreatePost";
import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "./firebase/firebase";
import FriendList from "./Friend-List";
import { Avatar , IconButton, Stack } from "@mui/material";
import { Delete }  from '@material-ui/icons';

function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
  
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }
  

function Home(){
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
        <> 
            <TopNav></TopNav>
            <div className ="row">
                <div className ="column65">
                <CreatePost></CreatePost>
                <div className="homePage">
                    {postLists.map((post) => {
                        return (
                        <div className="post">
                            <a className="a"></a>
                            <Stack direction="row" spacing={3} className="postHeader">
                            <a className="b"></a>
                            <Avatar {...stringAvatar(post.author.name)} ></Avatar>
                            <h1>{post.author.name}</h1>
                            <div className="deletePost">
                                    {post.author.id === auth.currentUser.uid && (
                                    <IconButton onClick={() => {deletePost(post.id);}}><Delete></Delete></IconButton>
                                )}
                            </div>
                            </Stack>
                            <div className="title"><h3> {post.title}</h3></div>
                            <img className="Image" src={post.image}/>
                        </div>
                        );
                    })}
                </div>
                </div>
            <div className ="column35"><FriendList></FriendList></div>
            </div>
        </>
       
    );
}

export default Home;