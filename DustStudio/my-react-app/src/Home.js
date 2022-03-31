import './Home.css';

function Home(){
    return(
        <div class="topnav">
            <a class="active" href="#home">Home</a>
            <a href="friend">Friends</a>
            <a href="profile">Profile</a>
            <div class="search-container">
                <form action="/action_page.php">
                        <button type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
        </div>
        
    )
}

export default Home;