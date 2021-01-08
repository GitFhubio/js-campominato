// Il computer deve generare 16 numeri casuali tra 1 e 100, che saranno le "mine".
// In seguito deve chiedere all'utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista delle mine, la partita termina, altrimenti il gioco continua chiedendo all'utente un altro numero (continua a giocare).
// La partita termina quando il giocatore becca una mina, ossia inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti, ossia ha inserito tutti i numeri possibili che non sono mine!
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito

// funzione per generare mine
function mine_generator(n,min,max){
var mine=[];
var random;
while(mine.length<n) {
random=Math.floor(Math.random()*(max+1-min)+min);
if (!mine.includes(random)){
mine.push(random);
}
}
return mine;
}

// funzione per vedere se è una mina

function is_mine(x)
{
  if(mine.includes(x)){
    return true;
  }else{
    return false;
  }
}


// funzione per vedere se il numero è valido

function is_valid (x){
if (!isNaN(x) && x>=1 && x<=100)
{return true;}
else {
  return false;
}
}

var mine= mine_generator(16,1,100);

console.log(mine);

var i=0;
var giocateVinte=[];
var giocata;
while (giocateVinte.length<84 && !is_mine(giocata)) {
giocata=parseInt(prompt('inserisci un numero tra 1 e 100'));
if (is_valid(giocata) && !giocateVinte.includes(giocata)){
giocateVinte.push(giocata);}
}

if(giocateVinte.length==84){alert('Complimenti hai vinto');}
 else if(!is_valid(giocata)){
  alert('Devi inserire valori tra 1 e 100');
}
if(is_mine(giocata)){alert('Hai preso una mina.Le tue giocate vinte complessive sono state '+ (giocateVinte.length-1)+' su 84')};

console.log(giocateVinte);
