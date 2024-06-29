let listaNumerosSorteados = [];
let numeroLimiteSorteios = 3;

function geraNumeroAleatorio() {
    let numeroSecreto =  parseInt(Math.random() * numeroLimiteSorteios+1);
    let quantidadeElementosLista = listaNumerosSorteados.length;

    if (quantidadeElementosLista == numeroLimiteSorteios) {
        listaNumerosSorteados = [];
    }
    if(listaNumerosSorteados.includes(numeroSecreto)){
        console.log('já existia');
        return  geraNumeroAleatorio();
        
    }else {
        listaNumerosSorteados.push(numeroSecreto);
        return numeroSecreto;
    }
    
}
let numeroSecreto = geraNumeroAleatorio();
let tentativas = 1;


function exibeTextoTela(tag,texto){
    let elementoHtml = document.querySelector(tag);
    elementoHtml.innerHTML = texto;
    //Voice speech
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}
function exibeMensagemBoasVindas() {
    exibeTextoTela('h1', 'Número secreto');
    exibeTextoTela('p','Digite de 0 a 100!');
    
    console.log(listaNumerosSorteados);
}

exibeMensagemBoasVindas();

function limparInput() {
    let elementoHtmlInput = document.querySelector('input');
    elementoHtmlInput.value = '';
}


function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibeTextoTela('h1', "Acertou!");
        
        let palavraTentativa = tentativas == 1 ? 'tentativa': 'tentativas';
        let mensagemTentativa = `Parabéns,Você acertou em ${tentativas} ${palavraTentativa}!`;
        exibeTextoTela('p', mensagemTentativa);
        //Reiniciar jogo
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibeTextoTela('p', 'Número secreto é menor!');
        } else {
            exibeTextoTela('p', 'Número secreto é maior!');
        }
    }
    tentativas++;
    limparInput();
}

function reiniciarJogo() {
    numeroSecreto = geraNumeroAleatorio();
    tentativas = 1;
    limparInput();
    exibeMensagemBoasVindas()
}
