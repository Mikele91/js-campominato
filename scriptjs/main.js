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



//FUNZIONI
// INCLUDS
// function inArrey(arrey, elem){ 
//     let cont = 0;
//     let trovato = false;
//     while(cont < arrey.length && trovato == false){
//         if(arrey[cont] == elem){
//              trovato == true; //oppure direttamente return true  e sotto return false senza creare variabile trovato
//         }
//         cont++;

//     }
//      return trovato; //return false
// }

// GENERA QUADRATI 
function CreaQuadrato(numero){
    for ( let i= 1; i <= numero; i++){
        document.getElementById("campo").innerHTML+=`<div class="quadrato">${i}</div>`;
    }

}

let btnGenera = document.getElementById("genera");
// var btRefresh = document.getElementById("refresh");


btnGenera.addEventListener("click",
function(){

    document.getElementById("campo").innerHTML = "";
    var bombe =[];

    // I numeri non possono essere duplicati.
    while( bombe.length < 16  ){
        var numeroGenerato = numeroRandom(1, 100);
        if(!bombe.includes(numeroGenerato) ){   


            bombe.push(numeroGenerato);
        }
    }
    console.log(bombe);



    //prendo i dati dal select per impostare il campo 
    var livello = document.getElementById("livello").value;
    
    if(livello == "0"){

        CreaQuadrato(100);
        document.getElementById("campo").classList.remove("campo2");
        document.getElementById("campo").classList.remove("campo3");
        document.getElementById("campo").classList.add("campo1");

    }else if (livello == "1"){

        CreaQuadrato(81);
        document.getElementById("campo").classList.remove("campo1");
        document.getElementById("campo").classList.remove("campo3");
        document.getElementById("campo").classList.add("campo2");


    }else{
        CreaQuadrato(49);
        document.getElementById("campo").classList.remove("campo1");
        document.getElementById("campo").classList.remove("campo2");
        document.getElementById("campo").classList.add("campo3");



    }

    console.log(" livello difficolta " , livello)
}
);


var btRefresh = document.getElementById("refresh");

btRefresh.addEventListener("click",
function(){

    // pulire i campi o refresh
    document.getElementById("campo").innerHTML = "";
    //  document.getElementById("campo").classList.remove("campo1", "campo2", "campo3");

    // resetto i campi (copiato da biglietto )
    // var nome = document.getElementById("nome").value = " ";
    // var km = parseInt( document.getElementById("km").value = " ") ;
    // var fasciaEta = document.getElementById("fascia").selectedIndex = "0" ;
}
)           

// In seguito il giocatore clicca sulle celle numerate (non può cliccare più volte sulla stessa cella)
var campo = document.getElementById("campo");
var clickP =[];
console.log(clickP);

campo.addEventListener("click",
function (event){
    var i = parseInt((event.target.innerHTML));

    // se è una bomba bomb.includes(i)
    // alert() clickP.length
    // se è una casella già cliccata clickP.includes(i)
    // altrimenti lo aggiungo all'array clickP
    // clickP.length == possibilita hai vintoooooo
    if(!clickP.includes(parseInt(i))){
        
        clickP.push(parseInt(i));   
        }else{
        
        // return clickP;
        }
    
        console.log(" il punteggio ", clickP);
    }
    );

// La partita termina quando il giocatore clicca su un numero “vietato” o clicca su tutte le celle che non sono delle bombe.
// Al termine della partita il software deve comunicare il punteggio.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50
