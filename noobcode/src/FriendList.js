import { useState } from 'react';
import './FriendList.css';
import App from './components/App';
import Avatar from './components/Avatar';

function FriendList(){
  const [friends, setFriends] = useState([
    {user: "user1", displayName: "John"},
    {user: "user2", displayName: "White"},
    {user: "user3", displayName: "Black"},
    {user: "user4", displayName: "ข้าวสาร"},
    {user: "user5", displayName: "Save"}

  ]);

  return(
    <App>
      <div className="friend-list">
      
      
      <div className='center'>
      <h1 align = "center"><img src="https://media.discordapp.net/attachments/800643806278058035/950027579006525470/Home.png" alt="Home" width="150" height="50"  /></h1>


      <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        เพื่อน
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">{
       friends.map (x=>
        <div className= 'friend-list-item' >
          <Avatar name = {x.user}/>
          &nbsp;&nbsp;&nbsp;
          {x.displayName}
          &nbsp;
          <button class="fa fa-phone-square fa-3x btn btn-md btn-light" aria-hidden="true"></button>

          </div>
        
          
         )
         }</div>

         
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        กลุ่ม
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">{
       friends.map (x=>
        <div className= 'friend-list-item' >
          <Avatar name = {x.user}/>
          &nbsp;&nbsp;&nbsp;
          {x.displayName}
          &nbsp;
          <button class="fa fa-phone-square fa-3x btn btn-md btn-light" aria-hidden="true"></button>
          </div>
         )
         }</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        อื่นๆ
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">{
       friends.map (x=>
        <div className= 'friend-list-item' >
          <Avatar name = {x.user}/>
          &nbsp;&nbsp;&nbsp;
          {x.displayName}
          &nbsp;
          <button class="fa fa-phone-square fa-3x btn btn-md btn-light" aria-hidden="true"></button>
          </div>
         )
         }</div>
    </div>
  </div>
</div>
        
        
      </div>
      
      </div>
    </App>
  )
}

export default FriendList;