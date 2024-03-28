function test2(){
    var linktest = document.getElementById('link2');
    linktest.onclick = function () {
        window.location = "../perfil_comprador/perfil_comprador.html";
    };
}

function test(){
    var linktest = document.getElementById('link');
    linktest.onclick = function () {
        window.location = "../perfil_colaborador/perfil_colaborador.html";
    };
}

document.addEventListener('DOMContentLoaded', function() {

    function showClientModal() {
        $(".cliente-modal").fadeIn();
        $(".cliente").fadeIn();
        $('body').css("overflow", "hidden");
    }

    function showVendorModal() {
        $(".colaborador-modal").fadeIn();
        $(".colaborador").fadeIn();
        $('body').css("overflow", "hidden");
    }

    $("#central_colab").click(function(){
        showVendorModal(); // Chamando a função para exibir o modal de login do colaborador
    });

    $("#login").click(function(){
        showClientModal(); // Chamando a função para exibir o modal de login do cliente
    });

    $("#img_perfil").click(function(){
        showClientModal(); // Chamando a função para exibir o modal de login do cliente
    });

    $(".img-fechar").click(function(){
        $(".fundo-modal").fadeOut(); 
        $(".modal").fadeOut(); 
        $('body').css("overflow", "auto"); 
    });

});