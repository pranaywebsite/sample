	var section=document.querySelector('section');
          window.addEventListener('scroll',function(){
          	var value=window.scrollY;
            if(window.scrollY > 10){
          	section.style.clipPath="circle("+ 6*value + "px at center)";}
         })
  /*menu button onclick function*/         
  /*window.addEventListener("scroll",function(){
    var header=document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
   })*/



$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 200 ) {
      $("#main-nav").slideDown(700);
      document.getElementById("main-nav").style.display = "flex";
      
      
    }
     else {
      
      $("#main-nav").slideUp(700);
      document.getElementById("main-nav").style.display = "none";
      
      
      
    }
  });
function myFunction(x) {
  $(window).scroll(function() {
     document.getElementById("main-nav").style.display = "none";
     
     document.getElementByClassName("logo").style.display = "none";
    var scroll = $(window).scrollTop();
    if (scroll > 100 ) { // If media query matches
    document.getElementById("nav-links").style.display = "none";
  } else {
    document.getElementById("nav-links").style.display = "flex";

  }
}
)}
var x = window.matchMedia("(max-width: 768px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes