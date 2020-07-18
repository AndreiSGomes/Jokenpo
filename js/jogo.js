//var nomejogador = window.prompt("Digite seu nome: ")
var jogadorEscolha = 0;
var jogadorPontos = 0
var computadorEscolha = 0;
var computadorPontos = 0
var ganhador = -1;


document.getElementById("nome-jogador").innerHTML = nomejogador; 


function jogar(escolha) {
    jogadorEscolha = escolha
    computadorEscolha = Math.floor(Math.random() * 3 +( 2 - 1));


    if ((jogadorEscolha == 1) && (computadorEscolha == 1)) {
        document.getElementById('pedrapc').src ="imgs/pedra-acesa.png";
        document.getElementById('papelpc').src ="imgs/papel-apagado.png";
        document.getElementById('tesourapc').src ="imgs/tesoura-apagada.png";
        ganhador = 0;
    } else if ((jogadorEscolha == 1) && (computadorEscolha == 2)) {
        document.getElementById('pedrapc').src ="imgs/pedra-apagada.png";
        document.getElementById('papelpc').src ="imgs/papel-aceso.png";
        document.getElementById('tesourapc').src ="imgs/tesoura-apagada.png";
        ganhador = 2;
    } else if ((jogadorEscolha == 1) && (computadorEscolha == 3)) {
        document.getElementById('pedrapc').src ="imgs/pedra-apagada.png";
        document.getElementById('papelpc').src ="imgs/papel-apagado.png";
        document.getElementById('tesourapc').src ="imgs/tesoura-acesa.png";
        ganhador = 1;
    } else if ((jogadorEscolha == 2) && (computadorEscolha == 1)) {
        document.getElementById('pedrapc').src ="imgs/pedra-acesa.png";
        document.getElementById('papelpc').src ="imgs/papel-apagado.png";
        document.getElementById('tesourapc').src ="imgs/tesoura-apagada.png";
        ganhador = 1;
    } else if ((jogadorEscolha == 2) && (computadorEscolha == 2)) {
        document.getElementById('pedrapc').src ="imgs/pedra-apagada.png";
        document.getElementById('papelpc').src ="imgs/papel-aceso.png";
        document.getElementById('tesourapc').src ="imgs/tesoura-apagada.png";
        ganhador = 0;
    } else if ((jogadorEscolha == 2) && (computadorEscolha == 3)) {
        document.getElementById('pedrapc').src ="imgs/pedra-apagada.png";
        document.getElementById('papelpc').src ="imgs/papel-apagado.png";
        document.getElementById('tesourapc').src ="imgs/tesoura-acesa.png";
        ganhador = 2;
    }else if ((jogadorEscolha == 3) && (computadorEscolha == 1)) {
        document.getElementById('pedrapc').src ="imgs/pedra-acesa.png";
        document.getElementById('papelpc').src ="imgs/papel-apagado.png";
        document.getElementById('tesourapc').src ="imgs/tesoura-apagada.png";
        ganhador = 2;
    }else if ((jogadorEscolha == 3) && (computadorEscolha == 2)) {
        document.getElementById('pedrapc').src ="imgs/pedra-apagada.png";
        document.getElementById('papelpc').src ="imgs/papel-aceso.png";
        document.getElementById('tesourapc').src ="imgs/tesoura-apagada.png";
        ganhador = 1;
    }else {
        document.getElementById('pedrapc').src ="imgs/pedra-apagada.png";
        document.getElementById('papelpc').src ="imgs/papel-apagado.png";
        document.getElementById('tesourapc').src ="imgs/tesoura-acesa.png";
        ganhador = 0;
    }

    if (ganhador == 0) {
        document.getElementById('mensagens').innerHTML = 'Empate';
    }
    else if(ganhador == 1) {
        document.getElementById('mensagens').innerHTML = 'Você Venceu!';
        jogadorPontos++;
    }
    else if(ganhador == 2) {
        document.getElementById('mensagens').innerHTML = 'Computador Venceu!';
        computadorPontos++;
    }

    document.getElementById('pontosJogador').innerHTML = jogadorPontos;
    document.getElementById('pontosCPU').innerHTML = computadorPontos;
}
 

/*             ESQUEMA DAS IMAGENS DAS MÃOS            */


    function PedraAcesa() {
    document.getElementById('img-rock').src="imgs/pedra-acesa.png";
    document.getElementById('img-paper').src="imgs/papel-apagado.png";
    document.getElementById('img-sisor').src="imgs/tesoura-apagada.png";
}
function PapelAceso() {
    document.getElementById('img-rock').src="imgs/pedra-apagada.png";
    document.getElementById('img-paper').src="imgs/papel-aceso.png";
    document.getElementById('img-sisor').src="imgs/tesoura-apagada.png";
}
function TesouraAcesa() {
    document.getElementById('img-rock').src="imgs/pedra-apagada.png";
    document.getElementById('img-paper').src="imgs/papel-apagado.png";
    document.getElementById('img-sisor').src="imgs/tesoura-acesa.png";
}




if ((jogador == 1) && (computador == 1)) {
    document.getElementById('pontosJogador').innerHTML = pontosJogador
}