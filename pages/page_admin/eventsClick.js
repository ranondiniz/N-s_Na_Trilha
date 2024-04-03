const perfilIcon = document.getElementById("perfil-icon");
const informacoesPerfil = document.getElementById("informacoes-perfil");
const participantesIcon = document.getElementById("participantes-icon");
const listaParceiros = document.getElementById("lista-parceiros");

perfilIcon.addEventListener("click", () => {
  informacoesPerfil.classList.toggle("hidden");
  listaParceiros.classList.add("hidden");
});

participantesIcon.addEventListener("click", () => {
  informacoesPerfil.classList.add("hidden");
  listaParceiros.classList.toggle("hidden");
});