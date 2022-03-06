import '../css/Tabbar.css';
import { Link ,img} from 'react-router-dom';
import Avatar from './Avatar';


function Tabbar () {
  return (

    <div className="tabbar">

      <nav class="navbar navbar-light bg-white fixed-top text-success " >
        <div class="container-fluid">
         <a class=" navbar-brand navbar-center " href="/"><img src="https://media.discordapp.net/attachments/800643806278058035/950017440715264060/Universe.png" alt="Universe_font" width="250" height="50" /></a> 
            <button class="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
              <span class="navbar-toggler-icon">
              

                </span>
            </button>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
            <div class="offcanvas-header">
            <h4 class="offcanvas-title colorblue" id="navbarOffcanvasLgLabel"  >Menu</h4>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body" color= "#696969" >
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3" >            
                <div align = "center" ><Avatar name = "" /></div>

                <p></p>
                
               <h2> <div align = "center" className="colorgray" > Name (Display) </div> </h2>
              
                <div></div>
                    <Link to="/friend-list" className="tabbutton">
                 <div><i class="fa fa-home" aria-hidden="true"></i></div></Link>
                             
                  <Link to="/chat" className="tabbutton">
                <div><div><i class="fa fa-commenting" aria-hidden="true"></i></div></div></Link>              
                
                  <Link to="/profile" className="tabbutton">
                  <div> <i class="fa fa-user-circle-o" aria-hidden="true"></i> </div></Link>
                
                <li class="nav-item dropdown ">
                 <a class="nav-link dropdown-toggle fs-4 " align="center" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       About us
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark " aria-labelledby="navbarDarkDropdownMenuLink">
                     <li> &nbsp;&nbsp;&nbsp; This application is create for GI_472</li>
                     <li><Link to="/develop"><a class="dropdown-item " href="#">Developer</a></Link></li>
                  </ul>
                </li>
                <p></p>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" align="center" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fa fa-cog fa-spin fa-2x fa-fw"></i><span class="sr-only">Loading...</span>
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                     <li><Link to="/"><a class="dropdown-item " href="#">Logout</a></Link></li>
                     
                    
                  </ul>
                </li>




              </ul>
          
        </div>
      </div>
    </div>
  </nav> 
</div>
    
  )
}

export default Tabbar;