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

/**
 * Funzione per calcolare se un numero è pari
 * @param {number} num numero da controllare
 * @returns {boolean} risultato vero(pari) o falso 
 */
function isPari(num) {
    if (num%2 === 0)
        return true;
    return false;
}

/**
 * Somma di due numeri
 * @param {number} num1 numero da sommare
 * @param {number} num2 numero da sommare
 * @return {number} risultato della somma
 */
function sum2number(num1, num2) {
    return (num1 + num2);
}
 
