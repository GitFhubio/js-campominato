// Gioco campo minato con griglia html/css
// se i quadrati vicini a quello cliccato sono sicuri si rivelano
// se nei paraggi c'è una mina esce il segnale bc! (be careful!)

function fabio()
{
var scelta=parseInt(document.getElementById('myselect').value);
return gioco(scelta);
}

function gioco(max){
var choice;
// while (choice!=='easy' && choice!=='medium' && choice!=='hard')
// {choice=prompt('Scegli livello easy,medium o hard');}
//
//
// function selectlevel(x){
// switch (x)
// {case 'hard':
// return 50;
// break;
// case 'medium':
// return 80;
// break;
// case 'easy':
// return 100;
// default:
// return 100;
// }
//
// }

// miomax=selectlevel(choice);

function isMinaVicina(x){
if((x.nextSibling)!==null && mine.includes(parseInt(x.nextSibling.innerHTML)) || mine.includes(parseInt(x.previousSibling.innerHTML)) ||
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

function isMinaVicinaLeft(x){
if(mine.includes(parseInt(x.nextSibling.innerHTML))||
mine.includes(parseInt(x.innerHTML)+11)||
mine.includes(parseInt(x.innerHTML)-9)||
mine.includes(parseInt(x.innerHTML)+10)||
mine.includes(parseInt(x.innerHTML)-10)
)
{return true;
}else{return false;}
}

function isMinaVicinaTop(x){
  if( mine.includes(parseInt(x.nextSibling.innerHTML)) || mine.includes(parseInt(x.previousSibling.innerHTML)) ||
  mine.includes(parseInt(x.innerHTML)+10)||
  mine.includes(parseInt(x.innerHTML)+9)||
  mine.includes(parseInt(x.innerHTML)+11))
{return true;
}else{return false;}
}
function isMinaVicinaRight(x){
  if(mine.includes(parseInt(x.previousSibling.innerHTML)) ||
  mine.includes(parseInt(x.innerHTML)-11)||
  mine.includes(parseInt(x.innerHTML)+9)||
  mine.includes(parseInt(x.innerHTML)+10)||
  mine.includes(parseInt(x.innerHTML)-10))
{return true;
}else{return false;}
}
function isMinaVicinaBottom(x){
  if( mine.includes(parseInt(x.nextSibling.innerHTML)) || mine.includes(parseInt(x.previousSibling.innerHTML)) ||
  mine.includes(parseInt(x.innerHTML)-10)||
  mine.includes(parseInt(x.innerHTML)-9)||
  mine.includes(parseInt(x.innerHTML)-11))
{return true;
}else{return false;}
}
// ho dovuto mettere la condizione if (x.nextSibling)!==null perché altrimenti la
// casella 99 mi dava problemi

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


var mine= mine_generator(16,0,max-1);

console.log(mine.sort(function(a, b){return a-b}));

var griglia= document.getElementById('griglia');
griglia.innerHTML="";
for (var x = 0; x < max; x++) {
    if (!mine.includes(x))
   {griglia.innerHTML+='<div class="quadrato buono">'+x+'</div>';

   }
   else{
        griglia.innerHTML+='<div class="quadrato malevolo">'+x+'</div>';
   }

}


var quadrati= document.getElementsByClassName('quadrato');

console.log(quadrati);
var giocateVinte=[];
for (var i = 0; i < quadrati.length; i++) {
quadrati[i].addEventListener('click',function(){


var giocata=this.className;
console.log(giocata);
console.log(PreAdiacenti(this));
console.log(PostAdiacenti(this));
suggerimento.innerText='';
if (giocata.includes('buono')){
// alert('Bravo,hai evitato mine');
this.classList.add('verde-cliccato');
var audiosuccess = new Audio('css/success.mp3');

audiosuccess.play();
giocateVinte.push(giocata);
console.log(giocateVinte);
if (giocateVinte.length==miomax-16) {
alert('Ma sei un mostro!Bravissimo,hai vinto');
}
// console.log(this.nextSibling.innerHTML);

//  if (isMinaVicina(this)){
//   this.append('\nBC!');
// }
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
// alert('Hai preso una mina: hai perso');
this.classList.add('rosso');
var audiofail = new Audio('css/exp.mp3');
audiofail.play();
 setTimeout(function(){ window.location.reload(false); }, 2000);
}

})
}

// prendo solo il quadrato interno senza la cornice esterna per
// "allargare la zona sicura" quando non ci sono mine nei paraggi
// Parto da 11 cosi levo la prima riga superiore,
// il resto della cornice lo escludo con condizione sulle cifre 0 e 9
// che non devono essere contenute nel numero

// Per i livelli medium e hard il mio max non è più 100,
// l'ultima riga non è da 90 a 99 ma da 40 a 49 o 70 a 79 per
// cui devo inserire ulteriore condizione(ricavandomi l'ind)


var estremo= max-1;
var ind = estremo.toString().charAt(0);
for (var c = 11;c< quadrati.length; c++)
{if((c+'').indexOf('0') == -1 && (c+'').indexOf('9') == -1 && (c+'').indexOf(ind) !== 0){

quadrati[c].addEventListener('click',function(){

var giocata=this.className;
if (isMinaVicina(this) && !giocata.includes('malevolo')){
 this.append('\nBC!');
}
if (!isMinaVicina(this) && !giocata.includes('malevolo')){
  var vid = document.getElementById("myVideo");
  vid.play();
  vid.style.opacity="1";
  var festa=document.getElementsByClassName("festa")[0];
  festa.innerText="Grandissimo, non ci sono mine nei paraggi della casella "+this.innerHTML+" !";
  var suggerimento=document.getElementById('suggerimento');
  setTimeout(function(){
    suggerimento.innerText='Suggerimento:applicare l\'ultimo punto può farti arrivare alla vittoria molto più facilmente!' ;
  },14000);


  vid.addEventListener("timeupdate", function(){
    if(this.currentTime >= 12) {
         this.pause();
         this.style.opacity="0";
         this.currentTime = 0;
         festa.innerText="";
         setTimeout(function(){
            suggerimento.style.display = "none";
          },10000);
     }
   })

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

for (var i = 1; i < 9; i++) {
quadrati[i].addEventListener('click',function(){
  var giocata=this.className;
if(isMinaVicinaTop(this) && !giocata.includes('malevolo'))
{this.append('\nBC!')};
});
}

for (var i = 0; i < max-10; i++){
if(i % 10 == 0) {
quadrati[i].addEventListener('click',function(){
  var giocata=this.className;
if(isMinaVicinaLeft(this) && !giocata.includes('malevolo'))
{this.append('\nBC!')};
});
}
}

for (var i = 8; i <max ; i++){
if((i+1) % 10 == 0) {
quadrati[i].addEventListener('click',function(){
  var giocata=this.className;
if(isMinaVicinaRight(this) && !giocata.includes('malevolo'))
{this.append('\nBC!')};
});
}
}
for (var i = max-10; i <(max-1) ; i++) {
quadrati[i].addEventListener('click',function(){
  var giocata=this.className;
if(isMinaVicinaBottom(this) && !giocata.includes('malevolo'))
{this.append('\nBC!')};
});
}
}

// VERSIONE FATTA SEGUENDO I CONSIGLI DI ALFREDO

// var livelli=['easy','hard','medium'];
// var miomax;
// var choice;
// while (livelli.indexOf(choice)==-1)
// {choice=prompt('Scegli livello easy,medium o hard');}
//
//
// function selectlevel(x){
// switch (x)
// {case 'hard':
// return 50;
// break;
// case 'medium':
// return 80;
// break;
// case 'easy':
// return 100;
// default:
// return 100;
// }
//
// }
//
// miomax=selectlevel(choice);
// function isMinaVicina(x,max){
//   var arr=[];
//   if(parseInt(x.innerHTML)!==max){
//   var arrayAdiacenti=[parseInt(x.nextSibling.innerHTML),parseInt(x.previousSibling.innerHTML),parseInt(x.innerHTML)+10,parseInt(x.innerHTML)-10,parseInt(x.innerHTML)+9,parseInt(x.innerHTML)-9,parseInt(x.innerHTML)+11,parseInt(x.innerHTML)-11]
//   ;}
// else{
//   var arrayAdiacenti=[parseInt(x.previousSibling.innerHTML),parseInt(x.innerHTML)+10,parseInt(x.innerHTML)-10,parseInt(x.innerHTML)+9,parseInt(x.innerHTML)-9,parseInt(x.innerHTML)+11,parseInt(x.innerHTML)-11];
// }
//
//   for (var i = 0; i < arrayAdiacenti.length; i++) {
//     if(mine.includes(arrayAdiacenti[i])){
//       arr.push(arrayAdiacenti[i]);
//     }
// }
// console.log('questa è la lunghezza array vicini'+arr.length);
// if (arr.length!==0){
//   return true;
// }else{
//   return false;
// }
// }
// function PreAdiacenti(x,elementi)
// {
//   var array=[];
// for (var i = 0; i < parseInt(x.innerHTML); i++) {
//   if(parseInt(elementi[i].innerHTML)==parseInt(x.innerHTML)-10||
// parseInt(elementi[i].innerHTML)==parseInt(x.innerHTML)-9||
// parseInt(elementi[i].innerHTML)==parseInt(x.innerHTML)-11)
//   {
//   array.push(elementi[i]);
//   }
//
// }
// array.push(x.previousSibling);
// return array;
// }
// function PostAdiacenti(x,elementi,max)
// {
//   var array2=[];
//
// for (var v = max-1; v > parseInt(x.innerHTML); v--) {
//   if(parseInt(elementi[v].innerHTML)==parseInt(x.innerHTML)+10||
// parseInt(elementi[v].innerHTML)==parseInt(x.innerHTML)+9||
// parseInt(elementi[v].innerHTML)==parseInt(x.innerHTML)+11)
//   {
//   array2.push(elementi[v]);
//   }
//
// }
// array2.push(x.nextSibling);
//
// return array2;
// }
//
//
// function mine_generator(n,min,max){
// var mine=[];
// var random;
// while(mine.length<n) {
// random=Math.floor(Math.random()*(max+1-min)+min);
// if (!mine.includes(random)){
// mine.push(random);
// }
// }
// return mine;
// }
// var mine= mine_generator(16,0,miomax-1);
//
// console.log(mine.sort(function(a, b){return a-b}));
//
// function generaGriglia(max){
// var griglia= document.getElementById('griglia');
// for (var x = 0; x < max; x++) {
//     if (!mine.includes(x))
//    {griglia.innerHTML+='<div class="quadrato buono">'+x+'</div>';
//
//    }
//    else{
//         griglia.innerHTML+='<div class="quadrato malevolo">'+x+'</div>';
//    }
//
// }
// }
// generaGriglia(miomax);
// var quadrati= document.getElementsByClassName('quadrato');
//
// console.log(quadrati);
// var giocateVinte=[];
// for (var i = 0; i < quadrati.length; i++) {
// quadrati[i].addEventListener('click',function(){
//
// var giocata=this.className;
// console.log(giocata);
//
// suggerimento.innerText='';
// if (giocata.includes('buono')){
// this.classList.add('verde-cliccato');
// var audiosuccess = new Audio('css/success.mp3');
//
// audiosuccess.play();
// giocateVinte.push(giocata);
// console.log(giocateVinte);
// if (giocateVinte.length==miomax-16) {
// alert('Ma sei un mostro!Bravissimo,hai vinto');
// }
//
//  if (isMinaVicina(this,miomax-1)){
//   this.append('\nBC!');
// }
//
// }
//  else if(giocata.includes('malevolo')){
//
// this.classList.add('rosso');
// var audiofail = new Audio('css/exp.mp3');
// audiofail.play();
//  setTimeout(function(){ window.location.reload(false); }, 3000);
// }
//
// })
// }
//
//
//
// for (var c = 11;c< quadrati.length-10; c++)
// {if(c % 10 !== 0 && ((c+1) % 10) !==0 ){
//
// quadrati[c].addEventListener('click',function(){
//
// var giocata=this.className;
// if (!isMinaVicina(this,miomax-1) && !giocata.includes('malevolo')){
//   var vid = document.getElementById("myVideo");
//   vid.play();
//   vid.style.opacity="1";
//   var festa=document.getElementsByClassName("festa")[0];
//   festa.innerText="Grandissimo, non ci sono mine nei paraggi della casella "+this.innerHTML;
//   var suggerimento=document.getElementById('suggerimento');
//   setTimeout(function(){
//     suggerimento.innerText='Suggerimento:applicare l\'ultimo punto può farti arrivare alla vittoria molto più facilmente!' ;
//   },14000);
//
//
//   vid.addEventListener("timeupdate", function(){
//     if(this.currentTime >= 12) {
//          this.pause();
//          this.style.opacity="0";
//          this.currentTime = 0;
//          festa.innerText="";
//          setTimeout(function(){
//             suggerimento.style.display = "none";
//           },10000);
//      }
//    })
//
// for (var i = 0; i < PreAdiacenti(this,quadrati).length; i++) {
// PreAdiacenti(this,quadrati)[i].classList.add('verde');
// }
// for (var i = 0; i < PostAdiacenti(this,quadrati,miomax).length; i++) {
// PostAdiacenti(this,quadrati,miomax)[i].classList.add('verde');
// }
// }
// });
// }
// }



// Nota1:mi sono divertito molto.Dedicato a SS.
// Nota2: (c+'') è un trucco per considerare il numero una stringa,alternativa a toString
