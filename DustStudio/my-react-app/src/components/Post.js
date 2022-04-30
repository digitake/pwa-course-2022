import { Avatar, IconButton, Stack } from "@mui/material";
import { Delete }  from '@material-ui/icons';
import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc, query, orderBy } from "firebase/firestore";
import { db } from "../context/FirebaseConfig";
import { useAuthStateContext } from '../context/FirebaseAuthContextProvider';

function Post(){
    const { authState } = useAuthStateContext();
    const [postLists, setPostList] = useState([]);


    
      const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
      };
  
      useEffect(() => {
        const postsCollectionRef = collection(db, "posts");
        const q = query(postsCollectionRef, orderBy("timestamp", "desc"))

        const getPosts = async () => {
          const data = await getDocs(q);
          setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getPosts();
      }, [deletePost]);

    return (
        <div>
                    {postLists.map((post) => {
                        return (
                        <div className="post">
                            <a className="a"></a>
                            <Stack direction="row" spacing={3} className="postHeader" alignItems = "center">
                            <a className="b"></a>
                            <Avatar>{post.author.name}</Avatar>
                            <h2>{post.author.name}</h2>
                            <p>{new Date(post.timestamp).toString()}</p>
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
    )
}

export default Post;