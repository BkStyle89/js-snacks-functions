/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';

// Dichiara la funzione qui.

function welcome(name){
    const saluto = 'ciao '
    return saluto + name

}

/* function newString(userName,stringToInsert,position){
    const result =userName.slice(4, position) + stringToInsert +userName.slice(position);
    return result
    }
    
    const stringToInsert = "ciao";
    const position = 0;
    const result = newString(userName,stringToInsert,position);
    console.log(result)
    let cut = result[4].split(" ");
    console.log(cut)
    */


// Invoca la funzione qui e stampa il risultato in console
   
   const test = welcome(userName)
   console.log(test)


//Risultato atteso se si passa 'Mario': // ciao Mario
