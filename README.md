js-campominato

Il computer deve generare 16 numeri casuali tra 1 e 100, che saranno le "mine".
In seguito deve chiedere all'utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
 Se il numero è presente nella lista delle mine, la partita termina, altrimenti il gioco continua chiedendo all'utente un altro numero (continua a giocare).
 La partita termina quando il giocatore becca una mina, ossia inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti, ossia ha inserito tutti i numeri possibili che non sono mine!
 Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito



BONUS:All'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali.Con difficoltà 0=>tra 1 e 100,con difficoltà 1=>tra 1 e 80, con difficoltà 2=>tra 1 e 50;

EXTRA: Ho realizzato griglia di 50,80 o 100 numeri a seconda del livello scelto.
Il gioco è più vicino a quello reale perché al click sulle caselle oltre a scoprire se hai preso una mina o meno(con resa grafica e sonora) nel secondo caso viene comunicato all'utente(col segnale di pericolo BC!) se è in prossimità o meno di una mina(le mine sono in prossimità se occupano almeno una delle otto posizioni adiacenti a quella cliccata).
Se intorno non ci sono mine le caselle circostanti risultano cliccate e partono musichetta e video per festeggiare la scoperta di una "zona sicura".
