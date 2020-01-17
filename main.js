const parallax = document.getElementById("parallax");
window.addEventListener("scroll", function() 
{
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
})


window.onscroll = function() {myFunction()};
var nav = document.getElementById("nav");
var sticky = nav.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
  }
}