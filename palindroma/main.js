// PALINDROMA

/**
 * Funzione per invertire le lettere di una stringa
 * @param {string} word mumero minimo del range 
 * @returns {string} numero randomico generato
 */
function wordReverse(word) {
    let reverse = "";
    for (i = word.length; i >= 0; i--){
        reverse += word.charAt(i);
    }
    return reverse;
}

// ---------------------------------- MAIN ------------------------------>^.^<------

const parola = prompt("Inserisci la parola che vuoi controllare").toUpperCase();

if (parola === wordReverse(parola)) {
    alert(`La parola ${parola} è PALINDROMA`)
} else {
    alert(`La parola ${parola} NON è PALINDROMA, è diversa da ${wordReverse(parola)}`)
}
