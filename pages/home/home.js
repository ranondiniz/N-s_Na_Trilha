const url = 'http://localhost:8080/roteiro/todos_roteiros';

function buscarERenderizarRoteiros() {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar roteiros.');
            }
            return response.json();
        })
        .then(data => {
            const container = document.getElementById('container_cards');

            data.forEach(roteiro => {
                const card = document.createElement('div');
                card.classList.add('card_roteiro');
                card.id = 'card_' + roteiro.id;

                card.innerHTML = `
                <p>${roteiro.nome}</p>
                <span class="bold">${roteiro.descricao}</span>
                <div>
                    <div class="info_card">
                        <img class="icons_card" src="images/localizacao.svg" alt="">
                        <span class="bold">Saindo de:</span>
                        <span>${roteiro.cidadeSaida} - ${roteiro.ufSaida}</span>
                    </div>
                    <div class="info_card">
                        <img class="icons_card" src="images/duracao.svg" alt="">
                        <span class="bold">Horáio saída:</span>
                        <span>${roteiro.dataInicio} às ${roteiro.horarioSaida}h</span>
                    </div>
                    <div class="info_card">
                        <span class="bold">Categoria:</span>
                        <span>${roteiro.categoria}</span>
                    </div>
                    <div class="info_card">
                        <span class="bold">Preço por pessoa:</span>
                        <span>R$${roteiro.preco}</span>
                    </div>
                </div>`;

                card.addEventListener('click', () => {
                    const roteiroId = roteiro.id;
                    window.location.href = '../roteiro_selecionado/roteiro_selecionado.html?id=' + roteiroId;
                });
            
            container.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Erro ao buscar roteiros:', error);
    });
}

window.onload = buscarERenderizarRoteiros;
