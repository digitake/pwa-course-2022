import '../css/Tabbar.css';
import { Link } from 'react-router-dom';
import Avatar from './Avatar';

function Tabbar () {
  return (

    <div className="tabbar">

      <nav class="navbar navbar-light bg-white fixed-top text-success " >
        <div class="container-fluid">
         <a class="navbar-brand position-absolute start-50 fs-2 " href="#">ChatApp</a> 
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
            <div class="offcanvas-header">
            <h4 class="offcanvas-title" id="navbarOffcanvasLgLabel">Menu</h4>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body" color= "grey" >
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3" >            
                <div align = "center" ><Avatar name = "" /></div>

                <p></p>
                
               <h2> <div align = "center" > Name </div> </h2>
              
                <div></div>
                    <Link to="/friend-list" className="tabbutton">
                 <div><i class="fa fa-home" aria-hidden="true"></i></div></Link>
                             
                  <Link to="/chat" className="tabbutton">
                <div><div><i class="fa fa-commenting" aria-hidden="true"></i></div></div></Link>              
                
                  <Link to="/profile" className="tabbutton">
                  <div> <i class="fa fa-user-circle-o" aria-hidden="true"></i> </div></Link>
                
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       Help
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                     <li><a class="dropdown-item" href="#">contact</a></li>
                     <li><a class="dropdown-item" href="#">00000</a></li>
                    <li><a class="dropdown-item" href="#">00000</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fa fa-cog fa-spin fa-3x fa-fw"></i><span class="sr-only">Loading...</span>
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                     <li><a class="dropdown-item" href="#">00000</a></li>
                     <li><a class="dropdown-item" href="#">00000</a></li>
                    <li><a class="dropdown-item" href="#">00000</a></li>
                  </ul>
                </li>




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