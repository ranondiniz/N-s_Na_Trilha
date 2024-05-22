window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const roteiroId = urlParams.get('id');

    if (roteiroId) {
        const apiUrl = `http://localhost:8080/roteiro/${roteiroId}`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar o roteiro.');
                }
                return response.json();
            })
            .then(roteiro => {
                document.getElementById('nome').textContent = roteiro.nome;
                document.getElementById('descricao').textContent = roteiro.descricao;
                document.getElementById('preco').textContent = 'R$ ' + roteiro.preco.toFixed(2);
                document.getElementById('qtdVagas').textContent = 'Quantidade de Vagas: ' + roteiro.qtdVagas;
                document.getElementById('alojamento').textContent = 'Alojamento: ' + roteiro.alojamento;
                document.getElementById('transporte').textContent = 'Transporte: ' + roteiro.transporte;
                document.getElementById('atracoesAtv').textContent = 'Atrações e Atividades: ' + roteiro.atracoesAtv;
                document.getElementById('requisitos').textContent = 'Requisitos de Viagem e Documentação: ' + roteiro.requisitos;

                console.log(roteiro)

                const dataInicio = new Date(roteiro.dataInicio);
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                const dataFormatada = dataInicio.toLocaleDateString('pt-BR', options);
                document.getElementById('horarioSaida').textContent =  dataFormatada + ' às ' + roteiro.horarioSaida + 'h';
            })
            .catch(error => {
                console.error('Erro ao buscar o roteiro:', error);
            });
    } else {
        console.error('ID do roteiro não encontrado na URL.');
    }
};
