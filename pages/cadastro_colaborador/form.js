const url_cadastro = "http://localhost:8080/parceiro"

const form = document.getElementById('form_cadastro')

form.addEventListener('submit', function(event) {
    event.preventDefault()

    var planoAssinatura = document.getElementById('planoAssinatura').value.toUpperCase();
    var porte = document.getElementById('porte').value;

    const formData = {
        parceiroDados: {
            nome: document.getElementById('nameInput').value,
            email: document.getElementById('emailInput').value,
            numeroTelefone: document.getElementById('phoneInput').value,
            identificador: document.getElementById('identificadorInput').value,
            porte: porte,
            tipoAssinatura: planoAssinatura,
            senha: document.getElementById('senhaInput').value,
        },
        dadosEndereco: {
            cep: document.getElementById('cepInput').value,
            uf: document.getElementById('ufInput').value,
            cidade: document.getElementById('cidadeInput').value,
            logradouro: document.getElementById('ruaInput').value,
            bairro: document.getElementById('bairroInput').value,
            complemento: document.getElementById('complementoInput').value,
            numero: document.getElementById('numeroInput').value,
        }
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
        form.reset()
        exibirDadosLogin(data)
    })
    .catch(error => {
        console.log('Erro', error)
    })
})

function exibirDadosLogin(data) {
    var dadosLoginDiv = document.getElementById('dados_login')
    dadosLoginDiv.style.display = 'flex';
    dadosLoginDiv.classList.add('exibido');

    var emailSpan = document.createElement('span')
    emailSpan.textContent = 'Email: ' + data.email;

    var senhaSpan = document.createElement('span')
    senhaSpan.textContent = 'Senha: ' + data.senha;

    dadosLoginDiv.appendChild(emailSpan)
    dadosLoginDiv.appendChild(senhaSpan)
}