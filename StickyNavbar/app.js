 
var navbody = document.getElementsByTagName('nav')[0];


window.onscroll = function (event) {
  var scroll = window.pageYOffset;
  if (scroll >= 500 ) {
      
      navbody.style.backgroundColor = 'Red';
      navbody.style.transitionDuration = "2s";
    
  } else {
         
          navbody.style.backgroundColor = 'white';
    }
  }