/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function vowels(word_vowels){

    const letters=[]
    const char =['a','e','i','o','u']
    for(let i=0; i<word_vowels.length;i++){
        const lettera = word_vowels[i]
        if(char.indexOf(lettera) != -1){
            letters.push(lettera)
        }
    }
    return letters
}


// Invoca la funzione qui e stampa il risultato in console
const result = vowels(word)
console.log(result.length,result)

//Risultato atteso se si passa 'javascript': 3 (a, a, i)