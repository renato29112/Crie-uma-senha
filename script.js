const numeroSenha = document.querySelector('.parametro-senha-texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const checkbox = document.querySelectorAll('.checkbox');
const botoes = document.querySelectorAll('.parametro-senha-botao');
const forcaSenha = document.querySelector('forca');
botoes[0].onclick = diminuitamanho;
botoes[1].onclick = almentatamanho;