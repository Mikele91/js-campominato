// vecchio programma 
// function CreaQuadrato(numero){
//     for ( let i= 1; i <= numero; i++){
//         document.getElementById("campo").innerHTML+=`<div class="quadrato">${i}</div>`;
//     }

// }



// // Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco.
// let numeroUtente = parseInt(prompt("inserisci un numero multiplo di 10 ")) ;
// while( ((numeroUtente % 10)!=0) ){
//         numero =  parseInt(prompt(" ATTENZIONE inserisci un numero multiplo di 10 "));
// }




// CreaQuadrato(numeroUtente);


// // Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga.

// document.getElementById("campo").addEventListener("click",
// function(event){
//     event.target.classList.toggle("color");
//     // alert(event.target.innerHTML)
//     console.log(event.target);
// }
// )



//FINE VECCHIO PROGRAMMA


// Ciao ragazzi,
// Esercizio di oggi: Campo Minato
// nome repo: js-campominato
// Consegna
// Il computer deve generare 16 numeri casuali tra 1 e 100 (bombe).

function numeroRandom(min, max){

        var random = Math.floor(Math.random() * (max-min +1)+min);
        return random;
}

for( var i =1; i <= 16; i++ ){
    var bombe = numeroRandom(1, 100);
}
console.log(bombe);
// I numeri non possono essere duplicati.
// In seguito il giocatore clicca sulle celle numerate (non può cliccare più volte sulla stessa cella)
// La partita termina quando il giocatore clicca su un numero “vietato” o clicca su tutte le celle che non sono delle bombe.
// Al termine della partita il software deve comunicare il punteggio.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50
