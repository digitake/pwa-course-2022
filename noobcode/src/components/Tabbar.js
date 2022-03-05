import '../css/Tabbar.css';
import { Link } from 'react-router-dom';
import Avatar from './Avatar';

function Tabbar () {
  return (

    <div className="tabbar">

      <nav class="navbar navbar-light bg-white fixed-top text-success " >
        <div class="container-fluid">
         <a class="navbar-brand position-absolute start-50 fs-2" href="#">ChatApp</a> 
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
            <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="navbarOffcanvasLgLabel">Menu</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body" color= "grey" >
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3" >
                
                <div align = "center" ><Avatar name = "" /></div>
                  
                    <Link to="/friend-list" className="tabbutton">
                 <div><i class="fa fa-home" aria-hidden="true"></i></div></Link>
              

                
                  <Link to="/chat" className="tabbutton">
                <div><div><i class="fa fa-commenting" aria-hidden="true"></i></div></div></Link>
              

                
                  <Link to="/profile" className="tabbutton">
                  <div> <i class="fa fa-user-circle-o" aria-hidden="true"></i> </div></Link>
                
          
              </ul>
          <form class="d-flex">
          </form>
        </div>
      </div>
    </div>
  </nav> 
</div>
    
  )
}

export default Tabbar;