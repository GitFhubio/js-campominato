// Il computer deve generare 16 numeri casuali tra 1 e 100, che saranno le "mine".
// In seguito deve chiedere all'utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista delle mine, la partita termina, altrimenti il gioco continua chiedendo all'utente un altro numero (continua a giocare).
// La partita termina quando il giocatore becca una mina, ossia inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti, ossia ha inserito tutti i numeri possibili che non sono mine!
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito



// BONUS:All'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali.Con difficoltà 0=>tra 1 e 100,con difficoltà 1=>tra 1 e 80, con difficoltà 2=>tra 1 e 50;

var choice;
var miomax;
// while (choice!=='easy' && choice!=='medium' && choice!=='hard')
// {choice=prompt('Scegli livello easy,medium o hard');}
// oppure più elegantemente
var livelli=['easy','hard','medium'];
while (livelli.indexOf(choice)==-1)
{choice=prompt('Scegli livello easy,medium o hard');}

function selectlevel(x){
switch (x)
{case 'hard':
return 50;
break;
case 'medium':
return 80;
break;
case 'easy':
return 100;
default:
return 100;
}

}

miomax=selectlevel(choice);

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

function is_valid (x,max){
if (!isNaN(x) &&  x>=1 && x<=max)
{return true;}
else {
  return false;
}
}

var mine= mine_generator(16,1,miomax);
console.log(mine.sort(function(a, b){return a-b}));

function gioco(max){

var i=0;
var giocateVinte=[];
var giocata;


while (giocateVinte.length<(max-16) && !is_mine(giocata)) {
giocata=parseInt(prompt('inserisci un numero tra 1 e '+max));
if (is_valid(giocata,max)){
if(giocateVinte.includes(giocata)){alert('Hai già inserito questo numero');}
else {if(is_mine(giocata)){
  alert('Hai preso una mina')}
}
giocateVinte.push(giocata);
if(giocateVinte.length==(max-16)){
  alert('Complimenti hai vinto');
}
}

else {
  alert('Devi inserire un numero tra 1 e '+max)
}


}

alert('il tuo punteggio è '+(giocateVinte.length-1));
console.log(giocateVinte);
}

gioco(miomax);
// script mio
// var i=0;
// var giocateVinte=[];
// var giocata;
// while (giocateVinte.length<(miomax-16) && !is_mine(giocata)) {
// giocata=parseInt(prompt('inserisci un numero tra 1 e '+miomax));
// if (is_valid(giocata) && !giocateVinte.includes(giocata) && !is_mine(giocata)){
// giocateVinte.push(giocata);
// }
// if(giocateVinte.length==(miomax-16)){
//   alert('Complimenti hai vinto');
// }
// else if(is_mine(giocata)){
//   alert('Hai preso una mina.Le tue giocate vinte complessive sono state '+giocateVinte.length+' su '+(miomax-16));
// }
// }
//
//
// console.log(giocateVinte);
