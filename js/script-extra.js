// Il computer deve generare 16 numeri casuali tra 1 e 100, che saranno le "mine".
// In seguito deve chiedere all'utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista delle mine, la partita termina, altrimenti il gioco continua chiedendo all'utente un altro numero (continua a giocare).
// La partita termina quando il giocatore becca una mina, ossia inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti, ossia ha inserito tutti i numeri possibili che non sono mine!
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito



// BONUS:All'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali.Con difficoltà 0=>tra 1 e 100,con difficoltà 1=>tra 1 e 80, con difficoltà 2=>tra 1 e 50;

var choice;
var miomax;
while (choice!=='easy' && choice!=='medium' && choice!=='hard')
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

function isMinaVicina(x){
if(mine.includes(parseInt(x.nextSibling.innerHTML)) || mine.includes(parseInt(x.previousSibling.innerHTML)) ||
mine.includes(parseInt(x.innerHTML)+10)||
mine.includes(parseInt(x.innerHTML)-10)||
mine.includes(parseInt(x.innerHTML)+9)||
mine.includes(parseInt(x.innerHTML)-9)||
mine.includes(parseInt(x.innerHTML)+11)||
mine.includes(parseInt(x.innerHTML)-11)
)
{return true;
}else{return false;}
}

function PreAdiacenti(x)
{
  var array=[];
for (var i = 0; i < parseInt(x.innerHTML); i++) {
  if(parseInt(quadrati[i].innerHTML)==parseInt(x.innerHTML)-10||
parseInt(quadrati[i].innerHTML)==parseInt(x.innerHTML)-9||
parseInt(quadrati[i].innerHTML)==parseInt(x.innerHTML)-11)
  {
  array.push(quadrati[i]);
  }

}
array.push(x.previousSibling);
return array;
}
function PostAdiacenti(x)
{
  var array2=[];

for (var v = quadrati.length-1; v > parseInt(x.innerHTML); v--) {
  if(parseInt(quadrati[v].innerHTML)==parseInt(x.innerHTML)+10||
parseInt(quadrati[v].innerHTML)==parseInt(x.innerHTML)+9||
parseInt(quadrati[v].innerHTML)==parseInt(x.innerHTML)+11)
  {
  array2.push(quadrati[v]);
  }

}
array2.push(x.nextSibling);

return array2;
}


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
var mine= mine_generator(16,1,miomax);
console.log(mine);

var griglia= document.getElementById('griglia');
for (var x = 0; x < miomax; x++) {
    if (!mine.includes(x))
   {griglia.innerHTML+='<div class="quadrato buono">'+x+'</div>';

   }
   else{
        griglia.innerHTML+='<div class="quadrato malevolo">'+x+'</div>';
   }

}

var quadrati= document.getElementsByClassName('quadrato');

console.log(quadrati);

for (var i = 0; i < quadrati.length; i++) {
quadrati[i].addEventListener('click',function(){
var giocateVinte=[];

var giocata=this.className;
console.log(giocata);
console.log(PreAdiacenti(this));
console.log(PostAdiacenti(this));
if (giocata.includes('buono')){
alert('Bravo,hai evitato mine');
this.classList.add('verde');
var audiosuccess = new Audio('css/success.mp3');
audiosuccess.play();
// console.log(this.nextSibling.innerHTML);
 if (isMinaVicina(this)){
  this.append('\nBC!')
}
// else{
// for (var i = 0; i < PreAdiacenti(this).length; i++) {
// PreAdiacenti(this)[i].classList.add('verde');
// }
// for (var i = 0; i < PostAdiacenti(this).length; i++) {
// PostAdiacenti(this)[i].classList.add('verde');
// }
// }
}
 else if(giocata.includes('malevolo')){
alert('Hai preso una mina: hai perso');
this.classList.add('rosso');
var audiofail = new Audio('css/exp.mp3');
audiofail.play();
 setTimeout(function(){ window.location.reload(false); }, 3000);
}

})
}

// prendo solo il quadrato interno senza la cornica esterna per
// "allargare la zona sicura" quando non ci sono mine nei paraggi
// Parto da 8 cosi levo la prima riga superiore interna,
// il resto della cornice la escludo con condizione sulle cifre 0 e 9
// che non devono essere contenute nel numero
for (var c = 8;c< quadrati.length; c++)
{if((c+'').indexOf('0') == -1 && (c+'').indexOf('9') == -1){
quadrati[c].addEventListener('click',function(){
var giocata=this.className;
if (!isMinaVicina(this) && !giocata.includes('malevolo')){
for (var i = 0; i < PreAdiacenti(this).length; i++) {
PreAdiacenti(this)[i].classList.add('verde');
}
for (var i = 0; i < PostAdiacenti(this).length; i++) {
PostAdiacenti(this)[i].classList.add('verde');
}
}
});
}
}
