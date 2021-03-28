function myFunction(x) {
  if (x.matches) { // If media query matches
      $("#myDIV").removeClass("wow");
      $("#myDIV1").removeClass("wow");


  } 
}

var x = window.matchMedia("(max-width: 800px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes