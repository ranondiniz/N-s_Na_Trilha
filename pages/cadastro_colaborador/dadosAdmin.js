const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const dadosString = urlParams.get('dados');

const dados = JSON.parse(decodeURIComponent(dadosString));


