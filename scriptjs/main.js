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


// pulire i campi o refresh
var btRefresh = document.getElementById("refresh");

btRefresh.addEventListener("click",
function(){
    document.getElementById("campo").innerHTML = "";
}
)    

// GENERA QUADRATI 
function CreaQuadrato(numero){
    for ( let i= 1; i <= numero; i++){
        document.getElementById("campo").innerHTML+=`<div class="quadrato">${i}</div>`;
    }

}

let btnGenera = document.getElementById("genera");
// var btRefresh = document.getElementById("refresh");
var bombe =[];

var caselle =0;
btnGenera.addEventListener("click",
function(){

    document.getElementById("campo").innerHTML = "";

    //prendo i dati dal select per impostare il campo 
    var livello = document.getElementById("livello").value;
    
    if(livello == "0"){
        var  caselle = 100;
        CreaQuadrato(caselle);
        document.getElementById("campo").classList.remove("campo2");
        document.getElementById("campo").classList.remove("campo3");
        document.getElementById("campo").classList.add("campo1");

    }else if (livello == "1"){
        var  caselle = 81;

        CreaQuadrato(caselle);

        document.getElementById("campo").classList.remove("campo1");
        document.getElementById("campo").classList.remove("campo3");
        document.getElementById("campo").classList.add("campo2");


    }else{
        var  caselle = 49;

        CreaQuadrato(caselle);

        document.getElementById("campo").classList.remove("campo1");
        document.getElementById("campo").classList.remove("campo2");
        document.getElementById("campo").classList.add("campo3");

    }

    
    // I numeri non possono essere duplicati.
    while( bombe.length < 16  ){
        var numeroGenerato = numeroRandom(1, caselle);
        if(!bombe.includes(numeroGenerato)){   
            bombe.push(numeroGenerato);
        }   
    }
    
    console.log(" livello difficolta " , livello);
    console.log(bombe);
}
);



// In seguito il giocatore clicca sulle celle numerate (non può cliccare più volte sulla stessa cella)
var campo = document.getElementById("campo");
var clickP =[];
console.log(clickP);

campo.addEventListener("click",
function (event){
    var numeroCliccato = parseInt((event.target.innerHTML));
    // se è una bomba bomb.includes(i)
    // alert() clickP.length
    if(bombe.includes(numeroCliccato)){
        document.getElementsByClassName("quadrato").classList.add("color");// why not?
        alert("hai perso"); 
    }else if((!clickP.includes(numeroCliccato)) || (!bombe.includes(numeroCliccato))){
        
        clickP.push(numeroCliccato);   
        if(clickP.length == (caselle-16))
            alert("Hai vinto hai finito il gioco")
        }
        console.log(caselle-16);
        console.log(" il punteggio ", clickP);
    }


    // se è una casella già cliccata clickP.includes(i)
    // altrimenti lo aggiungo all'array clickP
    // clickP.length == possibilita hai vintoooooo
    );

// La partita termina quando il giocatore clicca su un numero “vietato” o clicca su tutte le celle che non sono delle bombe.
// Al termine della partita il software deve comunicare il punteggio.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50
