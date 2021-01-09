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
if (is_valid(giocata) && !giocateVinte.includes(giocata) && !is_mine(giocata)){
giocateVinte.push(giocata);
}
else if(is_mine(giocata)){
  alert('Hai preso una mina.Le tue giocate vinte complessive sono state '+giocateVinte.length+' su 84')}
}

if(giocateVinte.length==84){
  alert('Complimenti hai vinto');
}
console.log(giocateVinte);

// nota0: if giocateVinte.length==84 poteva essere messo anche dentro il while
// nota1: teoricamente per la generazione mine andava bene anche un ciclo
// for del tipo for (var i = 0;mine.length<16; i++) ma è una forzatura
// nota2:esiste la funzione per ordinare array arrayName.sort(function(a, b){return a-b}); che però in questo esercizio non serve,almeno per come l'ho pensato io
// nota2b-la funzione per ordinare array in modo numerico crescente sarebbe meglio farsela da soli per sviluppare un po' di logica:

// function bubbleSort(array) {
//   var done = false;
//   while (!done) {
//     done = true;
//     for (var i = 1; i < array.length; i++) {
//       if (array[i - 1] > array[i]) {
//         done = false;
//         var tmp = array[i - 1];
//         array[i - 1] = array[i];
//         array[i] = tmp;
//       }
//     }
//   }
//
//   return array;
// }
//
// da notare la variabile provvisoria per lo scambio di valore
 
// nota3:il ciclo è strutturato al solito perché non se ne esca all'errore di inserimento da input,
// se il numero inserito non è valido semplicemente non viene conteggiato come giocata vinta e si continua.
