document.addEventListener('DOMContentLoaded', function() {
    var container = document.querySelector('.scroll');
  
    container.addEventListener('wheel', function(event) {
      event.preventDefault();
      var scrollAmount = event.deltaY;
  
      container.scrollLeft += scrollAmount;
    });
  });
  