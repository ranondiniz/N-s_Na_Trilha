document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.form').addEventListener("submit", function(event) {
      event.preventDefault();
  
      var formData = new FormData(this);
  
      fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          document.getElementById("success-modal").style.display = "block";
          document.querySelector('.form').reset();
        } else {
          document.getElementById("error-modal").style.display = "block";
        }
      })
      .catch(error => {
        console.error('Erro:', error);
        document.getElementById("error-modal").style.display = "block";
      });
    });
    
    var closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        this.parentElement.parentElement.style.display = "none";
      });
    });
 });
  