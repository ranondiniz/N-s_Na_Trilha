document.addEventListener("DOMContentLoaded", function() {
    const linkPaginaAdministrador = document.getElementById("pagina-administrador");

    linkPaginaAdministrador.addEventListener("click", function(event) {
        event.preventDefault(); 

        window.history.back();
    });
});