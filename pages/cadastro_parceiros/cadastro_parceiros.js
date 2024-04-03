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
                alert("Mensagem enviada com sucesso!");

                document.querySelector('.form').reset();
            } else {
                alert("Houve um erro ao enviar a mensagem. Por favor, tente novamente."); 
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert("Houve um erro ao enviar a mensagem. Por favor, tente novamente."); 
        });
    });
});
