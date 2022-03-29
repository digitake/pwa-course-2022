import TopNav from "./components/TopNav";
import CreatePost from "./components/CreatePost";
import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "./firebase";


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
            <CreatePost></CreatePost>
            <div className="homePage">
            {postLists.map((post) => {
            return (
            <div className="post">
              <div className="postHeader">
               <div className="title">
                <h1> {post.title}</h1>
               </div>
               <div className="deletePost">
                {post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    {" "}
                    &#128465;
                  </button>
                )}
               </div>
              </div>
             <div className="postTextContainer"> {post.postText} </div>
            <h3>@{post.author.name}</h3>
            </div>
        );
      })}
    </div>
        </>
       
    );
}

export default Home;