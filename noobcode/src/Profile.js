import App from './components/App.js';
import {useState} from "react";
import './Profile.css';
import Avatar from './components/Avatar.js';

function Profile() {
  const [name, setName] = useState("Unknown");


  return (
    <App>
      
      <div className="Profile" >
      <p align = "center"><img  src="https://media.discordapp.net/attachments/800643806278058035/950027579237220372/Profile.png" alt="Home" width="150" height="50"  /></p>
      <Avatar name={name}/>
      
      <form class="row g-3">
        <p></p><p></p><p></p>
        <div class="col-md-4">
          <label for="validationDefault01" class="form-label">ชื่อ</label>
          <input type="text" class="form-control" id="validationDefault01"  required></input>
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">นามสกุล</label>
         <input type="text" class="form-control" id="validationDefault02"  required></input>
        </div>
        <div class="col-md-4">
          <label for="validationDefaultUsername" class="form-label">Username</label>
          <div class="input-group">
           <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required></input>
         </div>
        </div>
        <div class="col-md-8">
         <label for="validationDefault03" class="form-label">ที่อยู่</label>
         <input type="text" class="form-control" id="validationDefault03" required></input>
       </div>
       <div class="col-md-4">
        <label for="validationDefault04" class="form-label">ประเทศ</label>
          <select class="form-select" id="validationDefault04" required>
           <option selected disabled value="">เลือก...</option>
           <option>ไทย</option>
           <option>ไทย</option>
           <option>ไทย</option>
           <option>ไทย</option>
           <option>ไทย</option>
          </select>
       </div>
        <div class="col-12">
         <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required></input>
           <label class="form-check-label" for="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
       </div>
       <div class="col-12">
         <button class="btn btn-primary"  type="">บันทึก</button>
       </div>
      </form>

        
        
      </div>
    </App>
  );
}

export default Profile;