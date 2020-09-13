var credito = 0;
var aux = 0;
var aposta = 1;
var nSort = 0;
var slt1, slt2, slt3, slt4;

function aleatorio(inferior,superior){ 
    numPossibilidades = superior - inferior; 
    aleat = Math.random() * numPossibilidades;
    aleat = Math.floor(aleat);
    return parseInt(inferior) + aleat;
}

function apostaMenos() {
    if (aposta > 1) {
        aposta--;
        document.getElementById('aposta').value = 'R$ ' + aposta;					
    }
}

function apostaMais() {
    if (aposta < 10) {
        aposta ++;
        document.getElementById('aposta').value = 'R$ ' + aposta;
    }
}

function verificaPremio() {
    //verifica se ganhou algum pr�mio
    
    //inicio dos pr�mios menores
    if (slt1 == 1 && slt2 == 2 && slt3 == 3 && slt4 == 4){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 2);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
    }

    if (slt1 == 1 && slt2 == 2 && slt3 == 4 && slt4 == 3){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 2);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
    }
    
    if (slt1 == 1 && slt2 == 3 && slt3 == 2 && slt4 == 4){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 2);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
    }
    
    if (slt1 == 1 && slt2 == 3 && slt3 == 4 && slt4 == 2){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 2);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
    }
    
    if (slt1 == 1 && slt2 == 4 && slt3 == 2 && slt4 == 3){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 2);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
    }
    
    if (slt1 == 1 && slt2 == 4 && slt3 == 3 && slt4 == 2){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 2);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
    }
    
    if (slt1 == 2 && slt2 == 1 && slt3 == 3 && slt4 == 4){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 2);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
    }

    if (slt1 == 2 && slt2 == 1 && slt3 == 4 && slt4 == 3){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 2);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
    }
    
    if (slt1 == 2 && slt2 == 3 && slt3 == 1 && slt4 == 4){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 2);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
    }
    
    if (slt1 == 2 && slt2 == 3 && slt3 == 4 && slt4 == 1){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 2);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
    }
    
    if (slt1 == 2 && slt2 == 4 && slt3 == 1 && slt4 == 3){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 2);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
    }
    
    if (slt1 == 2 && slt2 == 4 && slt3 == 3 && slt4 == 1){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 2);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
    }
        
    if (slt1 == 3 && slt2 == 2 && slt3 == 1 && slt4 == 4){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 2);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
    }

    if (slt1 == 3 && slt2 == 2 && slt3 == 4 && slt4 == 1){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 2);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
    }
    
    if (slt1 == 3 && slt2 == 1 && slt3 == 2 && slt4 == 4){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 2);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
    }
    
    if (slt1 == 3 && slt2 == 1 && slt3 == 4 && slt4 == 2){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 2);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
    }
    
    if (slt1 == 3 && slt2 == 4 && slt3 == 2 && slt4 == 1){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 2);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
    }
    
    if (slt1 == 3 && slt2 == 4 && slt3 == 1 && slt4 == 2){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 2);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
    }

    if (slt1 == 4 && slt2 == 2 && slt3 == 3 && slt4 == 1){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 2);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
    }

    if (slt1 == 4 && slt2 == 2 && slt3 == 1 && slt4 == 3){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 2);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
    }
    
    if (slt1 == 4 && slt2 == 3 && slt3 == 2 && slt4 == 1){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 2);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
    }
    
    if (slt1 == 4 && slt2 == 3 && slt3 == 1 && slt4 == 2){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 2);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
    }
    
    if (slt1 == 4 && slt2 == 1 && slt3 == 2 && slt4 == 3){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 2);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
    }
    
    if (slt1 == 4 && slt2 == 1 && slt3 == 3 && slt4 == 2){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 2);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 2 + ".");
    }
    //fim dos pr�mios menores
    
    //inicio dos premios maiores
    if (slt1 == 1 && slt2 == 1 && slt3 == 1 && slt4 == 1){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 5);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 5 + ".");
    }
    
    if (slt1 == 2 && slt2 == 2 && slt3 == 2 && slt4 == 2){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 10);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 10 + ".");
    }
    
    if (slt1 == 3 && slt2 == 3 && slt3 == 3 && slt4 == 3){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 20);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 20 + ".");
    }
    
    if (slt1 == 4 && slt2 == 4 && slt3 == 4 && slt4 == 4){
        aposta = parseInt(aposta);
        credito = credito + (aposta * 50);
        document.getElementById('credito').value = 'R$ ' + credito;
        window.alert("Parabéns, você ganhou um prêmio de R$ " + aposta * 50 + ".");
    }
    //fim dos pr�mios maiores
}

function jogar() {
    if (credito < 1 || credito < aposta) {
        aux = window.prompt("Coloque mais creditos, digite a quantidade em R$:","1");
        aux = parseInt(aux);
        credito = parseInt(credito);
        credito = credito + aux;
        document.getElementById('credito').value = 'R$ ' + credito
    }
    else {
        if(credito > 0 && credito >= aposta){
            credito = credito - aposta;
            document.getElementById('credito').value = 'R$ ' + credito;
            document.getElementById('fruta1').src = 'img/frutas.gif';
            document.getElementById('fruta2').src = 'img/frutas.gif';
            document.getElementById('fruta3').src = 'img/frutas.gif';
            document.getElementById('fruta4').src = 'img/frutas.gif';
            
            //processamento do slot1
            nSort = aleatorio(1,5);
            switch (nSort) {
                case 1:
                cont=setTimeout("document.getElementById('fruta1').src = 'img/uva.png'", 4000);
                slt1 = 1;
                break;
                case 2:
                cont=setTimeout("document.getElementById('fruta1').src = 'img/melancia.png'", 4000);
                slt1 = 2;
                break;
                case 3:
                cont=setTimeout("document.getElementById('fruta1').src = 'img/limao.png'", 4000);
                slt1 = 3;
                break;
                case 4:
                cont=setTimeout("document.getElementById('fruta1').src = 'img/morango.png'", 4000);
                slt1 = 4;
                break;
            }
            
            //processamento do slot2
            nSort = aleatorio(1,5);
            switch (nSort) {
                case 1:
                cont=setTimeout("document.getElementById('fruta2').src = 'img/uva.png'", 6000);
                slt2 = 1;
                break;
                case 2:
                cont=setTimeout("document.getElementById('fruta2').src = 'img/melancia.png'", 6000);
                slt2 = 2;
                break;
                case 3:
                cont=setTimeout("document.getElementById('fruta2').src = 'img/limao.png'", 6000);
                slt2 = 3;
                break;
                case 4:
                cont=setTimeout("document.getElementById('fruta2').src = 'img/morango.png'", 6000);
                slt2 = 4;
                break;
            }
            
            //processamento do slot3
            nSort = aleatorio(1,5);
            switch (nSort) {
                case 1:
                cont=setTimeout("document.getElementById('fruta3').src = 'img/uva.png'", 7000);
                slt3 = 1;
                break;
                case 2:
                cont=setTimeout("document.getElementById('fruta3').src = 'img/melancia.png'", 7000);
                slt3 = 2;
                break;
                case 3:
                cont=setTimeout("document.getElementById('fruta3').src = 'img/limao.png'", 7000);
                slt3 = 3;
                break;
                case 4:
                cont=setTimeout("document.getElementById('fruta3').src = 'img/morango.png'", 7000);
                slt3 = 4;
                break;
            }
            
            //processamento do slot4
            nSort = aleatorio(1,5);
            switch (nSort) {
                case 1:
                cont=setTimeout("document.getElementById('fruta4').src = 'img/uva.png'", 8000);
                slt4 = 1;
                break;
                case 2:
                cont=setTimeout("document.getElementById('fruta4').src = 'img/melancia.png'", 8000);
                slt4 = 2;
                break;
                case 3:
                cont=setTimeout("document.getElementById('fruta4').src = 'img/limao.png'", 8000);
                slt4 = 3;
                break;
                case 4:
                cont=setTimeout("document.getElementById('fruta4').src = 'img/morango.png'", 8000);
                slt4 = 4;
                break;
            }
            cont=setTimeout("verificaPremio()", 9000);
        }
    }
}
