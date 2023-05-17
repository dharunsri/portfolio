document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('action');
  var customCursors = [
    '../images/blue.png',
    '../images/purple.png',
    '../images/black.png',
    '../images/multi.png',
    '../images/outline.png',
    '../images/outline-green.png',
    '../images/dark-blue.png',
    '../images/orange.png',
    '../images/scope.png',
    '../images/scope.png'
  ];
  var cursorIndex = 0;

  button.addEventListener('click', function() {
    var cursorImage = customCursors[cursorIndex];
    cursorIndex = (cursorIndex + 1) % customCursors.length;

    if (cursorIndex === 0) {
      document.body.style.cursor = 'auto';
    } else {
      localStorage.setItem('customCursorImage', cursorImage);
      document.body.style.cursor = 'url("' + cursorImage + '"), auto';
    }
  });

  var storedCursorImage = localStorage.getItem('customCursorImage');
  if (storedCursorImage && customCursors.includes(storedCursorImage)) {
    cursorIndex = customCursors.indexOf(storedCursorImage);
    document.body.style.cursor = 'url("' + storedCursorImage + '"), auto';
  }
});


/*
'../images/blue.png',
'../images/purple.png',
'../images/black.png',
'../images/multi.png',
'../images/outline.png',
'../images/outline-green.png',
'../images/dark-blue.png',
'../images/orange.png',
'../images/scope.png' 
*/