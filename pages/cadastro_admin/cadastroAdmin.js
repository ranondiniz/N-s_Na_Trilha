

const url_cadastro = "http://localhost:8080/admin"

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
            throw new Error('Não foi possível enviar os dados.')
        }
        return response.json()
    })
    .then(data => {
        alert('Cadastro efetuado!')
        form.reset();
    })
    .catch(error => {
        console.error('Erro:', error);
    });
})