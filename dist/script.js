// Calling scroll function
window.onscroll = function() {
  displayOnScroll()
};

// BACK TO TOP FUNCTION
function backToTop() {
  const topButton = document.querySelector('.back-to-top');

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}

function displayOnScroll() {
  const topButton = document.querySelector('.back-to-top');

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
}