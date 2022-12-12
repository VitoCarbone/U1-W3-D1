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