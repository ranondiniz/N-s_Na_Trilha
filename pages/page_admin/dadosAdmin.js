const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const dadosString = urlParams.get('dados');

const dados = JSON.parse(decodeURIComponent(dadosString));

const nomeUsuario = dados.nome;
const emailUsuario = dados.email;
const telefoneUsuario = dados.numeroTelefone;
document.getElementById("nome-usuario").textContent = nomeUsuario;
document.getElementById("email-usuario").textContent = emailUsuario;
document.getElementById("telefone-usuario").textContent = telefoneUsuario;
