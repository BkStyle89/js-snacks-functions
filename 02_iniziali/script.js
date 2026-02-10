/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

 function firstLetter(first_letters){
    const letter = []
    for(i=0;i<first_letters.length;i++ ){
        const char = first_letters[i]
        console.log(char)
        letter.push(first_letters)
} 

return letter
}
const letter = firstLetter(names)



// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

