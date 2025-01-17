const url_cadastro = "http://localhost:8080/admin/login"

const form = document.getElementById('form_cadastro')

form.addEventListener('submit', function(event) {
    event.preventDefault()

    const formData = {
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value   
    }

    fetch(url_cadastro, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            if (response.status === 401) {
                mostrarErro()
                return;
            }  else {
                throw new Error("Erro ao realizar login.")
            }
        }
        return response.json();
    })
    .then(data => {
        if (data) {
            const dados = encodeURIComponent(JSON.stringify(data));
            window.location.href = "../page_admin/page_admin.html?dados=" + dados;
        } else {
            console.error("Erro: Dados não disponíveis para redirecionamento.");
        }
    })
    .catch(error => {
        console.log('Erro', error)
    })

})

function mostrarErro() {
    var divErro = document.getElementById('info_login')
    divErro.style.display = 'flex'
}