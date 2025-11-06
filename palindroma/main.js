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


