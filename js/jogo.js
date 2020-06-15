var nomejogador = window.prompt("Digite seu nome: ")
var computador = 0;
var jogador = 0;
var mnsg = document.querySelector('div#mensagens');
var pontosjogador = -1; 


document.getElementById("nome-jogador").innerHTML = nomejogador;
computador = Math.floor(Math.random()* 3 - 1);  




function jogar(escolha) {
    jogador = escolha
    computador = Math.floor(Math.random()* 3 +( 2 - 1));

    if ((jogador == 1) && (computador == 1)) {
        mnsg.innerHTML = 'Computador escolheu pedra. Deu empate'
        mnsg.style.background = '#cfcfcf'
    } else if ((jogador == 1) && (computador == 2)) {
        mnsg.innerHTML = 'Computador escolheu papel. Computador Venceu'
        mnsg.style.background = '#cfcfcf'
    } else if ((jogador == 1) && (computador == 3)) {
        mnsg.innerHTML = 'Computador escolheu tesoura. Você Venceu!!!'
        mnsg.style.background = '#cfcfcf'
    } else if ((jogador == 2) && (computador == 1)) {
        mnsg.innerHTML = 'Computador escolheu pedra. Você Venceu!!!'
        mnsg.style.background = '#cfcfcf'
    } else if ((jogador == 2) && (computador == 2)) {
        mnsg.innerHTML = 'Computador escolheu papel. Deu empate'
        mnsg.style.background = '#cfcfcf'
    } else if ((jogador == 2) && (computador == 3)) {
        mnsg.innerHTML = 'Computador escolheu tesoura. Computador Venceu'
        mnsg.style.background = '#cfcfcf'
    }else if ((jogador == 3) && (computador == 1)) {
        mnsg.innerHTML = 'Computador escolheu pedra. Computador Venceu'
        mnsg.style.background = '#cfcfcf'
    }else if ((jogador == 3) && (computador == 2)) {
        mnsg.innerHTML = 'Computador escolheu papel. Você Venceu!!!'
        mnsg.style.background = '#cfcfcf'
    }else {
        mnsg.innerHTML = 'Computador escolheu tesoura. Deu empate'
        mnsg.style.background = '#cfcfcf'
    }

}
 




    function PedraAcesa () {
    document.getElementById('img-rock').src="imgs/pedra-acesa.png";
}
function PedraApagada () {
    document.getElementById('img-rock').src="imgs/pedra-apagada.png";
}
function PapelAceso () {
    document.getElementById('img-paper').src="imgs/papel-aceso.png";
}
function PapelApagado () {
    document.getElementById('img-paper').src="imgs/papel-apagado.png";
}
function TesouraAcesa () {
    document.getElementById('img-sisor').src="imgs/tesoura-acesa.png";
}
function TesouraApagada () {
    document.getElementById('img-sisor').src="imgs/tesoura-apagada.png";
}