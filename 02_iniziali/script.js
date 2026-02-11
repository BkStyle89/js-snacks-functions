/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

/*  function firstLetter(first_letters){
    const letter = []
    for(i=0;i<first_letters.length;i++ ){
        const char = first_letters[i][0]
        letter.push(char)
        
} 

return letter.join('');
}
const result = firstLetter(names);
console.log(result);
 */
const firstLetter = (first_letters) =>{
    const letter = []
    for(i=0;i<first_letters.length;i++ ){
        const char = first_letters[i][0]
        letter.push(char)
        
} 

return letter.join('');
}
const result = firstLetter(names);
console.log(result);


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

