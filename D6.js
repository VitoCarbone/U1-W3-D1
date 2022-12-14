 /*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2)
  e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2){
  let somma= l1 * l2;
  return somma
}
console.log("L'area del rettangolo è "+area(10,10));


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum",
  che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, 
 ma se il valore dei due parametri è il medesimo
deve  invece tornare la loro somma moltiplicata per tre.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum()
if (num1 !== num2) {
   let somma = num1 + num2;
  return somma;
} else {
  let sommacrazy = (num1 + num2) * 3;
  return sommacrazy;
};
console.log(crazySum(2, 7));
console.log(crazySum(4, 4));
console.log(crazySum(6, 7));
console.log(crazySum(8, 8));



/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza
  assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre
  qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (num1) {
    if (num1 <= 19) {
    let differenza = 19 - num1;
     return differenza;
   } else {
      let differenza2 = (num1 - 19) * 3;
      return differenza2;
    }
  };
 console.log(crazyDiff(8));
console.log(crazyDiff(19));
console.log(crazyDiff(50));


                       

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero
  intero n come parametro,
  e ritorna true se n è compreso tra 20 e 100 (incluso) 
  oppure se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n){
    if(n<20 && n<=101||n===400){
        console.log(true);
    } else{
        console.loge(false);
    }
   }
     boundary(10);
     boundary(40); 
     boundary(200);
     boundary (400);         



/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa
  come parametro.
 La funzione deve aggiungere la parola "EPICODE" 
 all'inizio della stringa fornita, ma se la stringa fornita 
 comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify= (stringa) => {
    if(stringa.startWith("EPICODE")){
      return stringa
    }else{
      return "EPICODE" +stringa
    }
}
console.log(epify("EPICODE Italia"));
console.log(epify(Global));
    


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero
  positivo come parametro. 
  La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */




/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", 
 il cui scopo è invertire una stringa fornita come parametro 
 (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*function reverseString(stringa){
    let stringaNuova= stringa.split("");
    console.log(stringaNuova);
}
console.log(reverseString("Ciao a tutti"));*/
  //SPLIT HA SEPARATO TUTTE LE LETTERE TRA DI LORO 

  function reverseString(stringa){
    let stringaNuova= stringa.split("");
    console.log(stringaNuova);
    let stringacont=stringaNuova.reverse();
    //reverse FA SCRIVERE LA FRASE AL CONTRARIO
    console.log(stringacont);
    let risultato= stringacont.join("");
    //JOIN
    console.log(risultato);
}
console.log(reverseString("Ciao a tutti"));


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", 
 che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola 
 la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//SPLIT
/*function upperFirst(stringa)=>{
    let 
}
*/

const upperFirst = (stringa) => {
  let risultato;
  let parole = stringa.split(" ");
  for (i = 0; i < parole.length; i++) {
    let par = parole[i].split(" ");
    let stringfina;
    for (i=0; i < parole.length; i++) {
      if (i === 0) {
        let primaMaiu = par[i].toUpperCase();
        stringfina += primaMaiu;
      } else {
        stringfina += par[i];
      }
    }
    risultato+=stringfina + " "
  }
  return risultato;
};
console.log(upperFirst("lorem ipsum"));



/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", 
 che riceve come parametro una stringa. 
 La funzione deve creare una nuova stringa 
 senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", 
 che accetta come parametro un numero n 
 e ritorna un'array contenente n numeri casuali inclusi 
 tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let giveMeRandom = function (n) {
  nnumrandom = [];
  for (i = 0; i < n; i++) {
    let random = Math.floor(Math.random() * 11);
    nnumrandom.push(random);
  }
  console.log(nnumrandom);
};
giveMeRandom(5);
