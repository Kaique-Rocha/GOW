//Identificando o evento

const botao = document.getElementById('btn-avancar');
let cardAtivo = 0;

botao.addEventListener('click', function() {

    let card = document.querySelectorAll('.personagem-history')

    card.forEach(card => {
        card.classList.remove('cartao-selecionado');
    });


    if (cardAtivo < 6) {
        cardAtivo++;
    }


    card[cardAtivo].classList.add('cartao-selecionado');
});



const botaoRecuar = document.getElementById('btn-voltar');

botaoRecuar.addEventListener('click', function(){

    let card = document.querySelectorAll('.personagem-history')

    card.forEach(card => {
        card.classList.remove('cartao-selecionado');
    });

    if (cardAtivo > 0) {
        cardAtivo--;
    }

    card[cardAtivo].classList.add('cartao-selecionado');
});