

const url_cadastro = "http://localhost:8080/admin"

document.addEventListener("DOMContentLoaded", function() {
    const emailExistModal = document.getElementById("email-exist-modal");
    const successModal = document.getElementById("success-modal");
    const closeButtons = document.querySelectorAll(".close");
  
    closeButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        this.parentElement.parentElement.style.display = "none";
      });
    });

const form = document.getElementById('form_cadastro')

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        nome: document.getElementById('nameInput').value,
        email: document.getElementById('emailInput').value,
        numeroTelefone: document.getElementById('phoneInput').value,
        senha: document.getElementById('senhaInput').value
    }

    console.log(formData)

    fetch(url_cadastro, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'   
        }, 
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
          if (response.status === 409) {
            emailExistModal.style.display = "block"; 
            return;
          }
        } else {
          successModal.style.display = "block"; 
          form.reset();
        }
        return response.json();
      })
      .catch(error => {
        console.error('Erro:', error);
      });
    });
  });