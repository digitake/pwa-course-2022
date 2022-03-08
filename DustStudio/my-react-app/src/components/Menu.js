
function openNav() {
  document.getElementById("mySidenav").style.width = "800px";
  document.getElementById("overlay").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("overlay").style.display = "none";
}


export {openNav,closeNav};