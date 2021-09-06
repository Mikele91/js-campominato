
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
        document.getElementById("campo").innerHTML+=`<div id = "quadrato" class="quadrato">${i}</div>`;
    }

}

let btnGenera = document.getElementById("genera");
let btnRisposta = document.getElementById("risposta-piatto");

// var btRefresh = document.getElementById("refresh");
var bombe =[];

var caselle =0;
btnGenera.addEventListener("click",
function(){

    document.getElementById("campo").innerHTML = "";

    //prendo i dati dal select per impostare il campo 
    var livello = document.getElementById("livello").value;
    
    if(livello == "0"){
        caselle = 100;
        var vittoria =document.getElementById("risposta").value
        CreaQuadrato(caselle);
        document.getElementById("campo").classList.remove("campo2");
        document.getElementById("campo").classList.remove("campo3");
        document.getElementById("campo").classList.add("campo1");
        btnRisposta.addEventListener("click",
        function(){

            if(vittoria == ("carbonara").toLowerCase()){
    
                alert("Hai vinto");
                location.reload();
            }else{
                document.getElementById("contenitore").classList.add("contenitore-perso");
                document.getElementById("body").classList.add("perso");
                alert("Hai perso")
                location.reload();
            }
        }
        )
        

    }else if (livello == "1"){
        caselle = 81;
        var vittoria =document.getElementById("risposta").value
        CreaQuadrato(caselle);

        document.getElementById("campo").classList.remove("campo1");
        document.getElementById("campo").classList.remove("campo3");
        document.getElementById("campo").classList.add("campo2");
        btnRisposta.addEventListener("click",
        function(){

            if(vittoria == ("lasagne").toLowerCase()){
    
                alert("Hai vinto");
                location.reload();
            }else{
                alert("Hai perso")
                location.reload();
            }
        }
        )

    }else{
        caselle = 49;
        var vittoria =document.getElementById("risposta").value
        CreaQuadrato(caselle);

        document.getElementById("campo").classList.remove("campo1");
        document.getElementById("campo").classList.remove("campo2");
        document.getElementById("campo").classList.add("campo3");
        btnRisposta.addEventListener("click",
        function(){

            if(vittoria == ("risopatatecozze").toLowerCase()){
    
                alert("Hai vinto");
                location.reload();
            }else{
                alert("Hai perso")
                location.reload();
            }
        }
        )
        
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
var quadrato = document.getElementById("quadrato");
var clickP =[];
console.log(clickP);

campo.addEventListener("click",
function (event){
    var numeroCliccato = parseInt((event.target.innerHTML));
    var casellaCliccata = (event.target);
    // se è una bomba bomb.includes(i)
    // alert() clickP.length
    if(bombe.includes(numeroCliccato)){
        casellaCliccata.classList.add("boom");// why not?
        event.target.innerHTML = ""
        alert("hai perso RITENTA!!!!!" +" hai preso la bomba dopo  " + clickP.length+ " tentativi"); 
        location.reload();
    }else if((!clickP.includes(numeroCliccato)) ){
        casellaCliccata.classList.add("free")
        event.target.innerHTML = ""
        clickP.push(numeroCliccato);   
        if(clickP.length == (caselle-16))
            alert("Hai vinto hai finito il gioco"+ " sei riuscito a trovare tutte le  " + clickP.length +" caselle del pazzle ");
        }
        console.log(caselle-16);
        console.log(" il punteggio ", clickP);
    }
    );


