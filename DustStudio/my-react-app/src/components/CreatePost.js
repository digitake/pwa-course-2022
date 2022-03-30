import "../css/CreatePost.css"
import React, { useRef, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase/firebase";
import { initializeAuth } from "firebase/auth";
import FileBase64 from 'react-file-base64';
import { Button, IconButton , TextField , Avatar , Stack} from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#943400',
      
    },
  },

});

function CreatePost() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const fileRef = useRef(null);

  const postsCollectionRef = collection(db, "posts");

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      image,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
  };

  const addImage = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    if (e.target.files[0]){
      reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = (readerEvent) => {
      setImage(readerEvent.target.result)
    }
  }
 
  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <Stack direction="row" spacing={3}>
          <Avatar className="inputGp">H</ Avatar>
          <TextField className="Post" theme = {theme} color="warning" label="Post" variant="filled" 
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <input ref = {fileRef} type="file" hidden onChange={addImage} accept="image/*" ></input>
          <IconButton variant="contained" theme = {theme} color="primary" onClick={()=>fileRef.current.click()}><img className="Icon" style={{height : 40 ,width: 40}} src = "SceneMemory_in.png"></img></IconButton>
          <Button sx={{ width: 148, height: 38 }}  variant="contained" theme = {theme} color="primary" onClick={createPost} > Submit Post</Button>
        </Stack>
        <p >{image && (<img className="Image" style={{height : 100 ,width: 100}}src = {image}/>)}</p>
      </div>
    </div>
  );
}

export default CreatePost;