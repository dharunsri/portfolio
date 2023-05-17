document.addEventListener("DOMContentLoaded", function() {
  var currentLocation = window.location.href;
  var navLinks = document.querySelectorAll('.item a');

  for (var i = 0; i < navLinks.length; i++) {
    var link = navLinks[i];

    if (link.href === currentLocation) {
      link.parentElement.classList.add('active');
    }
  }
});
