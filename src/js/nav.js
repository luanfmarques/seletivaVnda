var x = document.getElementById("mainNavContainer");
var elem = document.getElementById("toggle-btn");
function mobMenu() {
    if (x.style.display === "block") {
      x.style.display = "none";
      elem.style.backgroundColor = "#fff";
      elem.style.color = "#207F96";
    } else {
      x.style.display = "block";
      elem.style.backgroundColor = "#F5E5D9";
      elem.style.color = "black";
    }
}