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
        

        <form class="row g-3 needs-validation" novalidate>
          <div class="col-md-4">
            <label for="validationCustom01" class="form-label">First name</label>
               <input type="text" class="form-control" id="validationCustom01" required></input>
              <div class="valid-feedback">
                             Looks good!
              </div>
          </div>
           <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Last name</label>
            <input type="text" class="form-control" id="validationCustom02"  required></input>
           <div class="valid-feedback">
                Looks good!
            </div>
          </div>
           <div class="col-md-4">
        <label for="validationCustomUsername" class="form-label">Username</label>
           <div class="input-group has-validation">
             <span class="input-group-text" id="inputGroupPrepend">@</span>
         <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required></input>
             <div class="invalid-feedback">
                Please choose a username.
           </div>
           </div>
         </div>
          <div class="col-md-6">
          <label for="validationCustom03" class="form-label">City</label>
            <input type="text" class="form-control" id="validationCustom03" required></input>
          <div class="invalid-feedback">
              Please provide a valid city.
          </div>
        </div>
        <div class="col-md-3">
          <label for="validationCustom04" class="form-label">State</label>
         <select class="form-select" id="validationCustom04" required>
           <option selected disabled value="">Choose...</option>
           <option>ไทย</option>
         </select>
          <div class="invalid-feedback">
           Please select a valid state.
         </div>
     </div>
       <div class="col-md-3">
         <label for="validationCustom05" class="form-label">Zip</label>
         <input type="text" class="form-control" id="validationCustom05" required></input>
          <div class="invalid-feedback">
           Please provide a valid zip.
          </div>
        </div>
      <div class="col-12">
          <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
          <label class="form-check-label" for="invalidCheck">
             Agree to terms and conditions
         </label>
          <div class="invalid-feedback">
             You must agree before submitting.
            </div>
         </div>
        </div>
         <div class="col-12">
          <button class="btn btn-primary" type="submit">Submit form</button>
        </div>
      </form>



        
        
      </div>
    </App>
  );
}

export default Profile;