const url_cadastro = "http://localhost:8080/roteiro"

const form = document.getElementById('form_cadastro')

form.addEventListener('submit', function(event) {
    event.preventDefault()

    const formData = {
        idParceiro: 1,
        nome: document.getElementById('nome').value,
        categoria: document.getElementById('categoria').value,  
        preco: parseInt(document.getElementById('preco').value),
        qtdVagas: parseInt(document.getElementById('vagas').value), 
        dataInicio: document.getElementById('dataInicio').value, 
        horarioSaida: document.getElementById('horarioSaida').value, 
        transporte: document.getElementById('transporte').value, 
        atracoesAtv: document.getElementById('atracoes').value, 
        ufSaida: document.getElementById('estado').value, 
        cidadeSaida: document.getElementById('cidade').value, 
        alojamento: document.getElementById('alojamento').value, 
        descricao: document.getElementById('descricao').value, 
        requisitos: document.getElementById('requisitos').value, 
        numeroContato: document.getElementById('numeroContato').value, 
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
            if (response.status === 401) {
                return;
            }  else {
                throw new Error("Erro ao realizar cadastro do roteiro.")
            }
        } else {
            exibeConfirmacao(true)
        }
        return response.json();
    })
    .catch(error => {
        console.log('Erro', error)
    })

})

function exibeConfirmacao(confirmado) {
    if (confirmado) {
        var paragrafo = document.createElement('p');
        var texto = document.createTextNode('Cadastro de roteiro efetuado!');
        paragrafo.appendChild(texto);
        var container = document.getElementById('mensagem_retorno');
        container.appendChild(paragrafo);
        form.reset()
        setTimeout(function() {
            container.removeChild(paragrafo); 
        }, 5000); 
    }
}
