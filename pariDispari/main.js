// PARI E DISPARI

/**
 * Funzione per generare un numero intero random tra min e max 
 * @param {integer number} min mumero minimo del range 
 * @param {integer number} max mumero massimo del range 
 * @returns {integer number} numero randomico generato
 */
function randomIntegerNumber(min, max) {
    
    return (Math.floor(Math.random() * (max - min + 1)));
}
