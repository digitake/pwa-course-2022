import App from './components/App.js';
import {useState} from "react";
import './Profile.css';
import Avatar from './components/Avatar.js';

function Profile() {
  const [name, setName] = useState("Unknown");


  return (
    <App>
      <div className="Profile" >
        <h1>My Profile</h1>
        <Avatar name={name}/>
        <label className="label1" htmlFor="displayname"/>
        <p></p>
      <form>
        <div class="mb-3">
       <label for="exampleInputEmail1" class="form-label">Email address</label>
       <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
       <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
       </div>
       <div class="mb-3">
       <label for="exampleInputPassword1" class="form-label">Password</label>
       <input type="password" class="form-control" id="exampleInputPassword1"></input>
        </div>
        <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
       </form>
       


        
        
      </div>
    </App>
  );
}

export default Profile;