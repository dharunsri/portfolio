document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contatc-form');
    var submitBtn = document.getElementById('submitBtn');
    var responseMessage = document.getElementById('responseMessage');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission behavior
  
      // Create FormData object to collect form data
      var formData = new FormData(form);
  
      // Send the form data asynchronously
      var request = new XMLHttpRequest();
      request.open('POST', 'send_email.php');
      request.onload = function() {
        if (request.status === 200) {
          responseMessage.textContent = 'Email sent successfully.';
          form.reset();
        } else {
          responseMessage.textContent = 'There was a problem sending the email.';
        }
      };
      request.send(formData);
    });
  });
  