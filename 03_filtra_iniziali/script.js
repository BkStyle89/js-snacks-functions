/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

/* function firstNames(names_letter){

    const letter =[]
    
    for(let i=0;i<names_letter.length;i++){
        if(names_letter[i].toLowerCase().startsWith('a')){
        letter.push(names_letter[i])
        } 
    }
    return letter;
} */

const firstNames = (names_letter) =>{

    const letter =[]
    
    for(let i=0;i<names_letter.length;i++){
        if(names_letter[i].toLowerCase().startsWith('a')){
        letter.push(names_letter[i])
        } 
    }
    return letter;
}

// Invoca la funzione qui e stampa il risultato in console
const result = firstNames(names)
console.log(result)


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]