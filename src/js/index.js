/*
Objetivo 1 - quando o usuário clicar no botão de Mostrar Mais, deve abrir os projetos que estão escondidos no html

Passo 1 - pegar o botão Mostrar Mais no JS para poder verificar quando o usuário clicar em cima dele

Passo 2 - identificar o clique no botão

Passo 3 - adicionar a classe "ativo" nos projetos escondidos

Objetivo 2 - esconder o botão de Mostrar Mais

Passo 1 - pegar o botão e esconder ele
*/

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo');
const botaoEsconderProjetos = document.querySelector('btn-esconder-projetos');

botaoMostrarProjetos.addEventListener('click', () => {

    mostrarMaisProjetos();
    esconderBotao();
})

function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });

}
