
function openNav() {
  document.getElementById("mySidenav").style.width = "800px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "white";
}

export {openNav,closeNav};