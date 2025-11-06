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
/**
  * Funzione che verifica se il valore è un numero intero e che sia compreso in un range inserito
  * @param { } valore il dato da verificare 
  * @param {number} iniziale il primo valore del range
  * @param {number} finale l'ultimo valore del range
  * @returns {boolean} se il valore è un numero nel range
  */
function isNumberInRange(valore, iniziale, finale) {
    if (typeof (valore) == `number`) {
        if (iniziale <= valore && valore <= finale)
            return true;
    }
    return false;
}

// ---------------------------------- MAIN ------------------------------>^.^<------

let puntata = prompt("Scegli se puntare su pari o su dispari").toUpperCase();
let valore = 0;
let valorePc = randomIntegerNumber(1, 5);

if (puntata != `PARI` || puntata != `DISPARI`) {
    puntata = parseInt(prompt("Scegli un valore tra PARI O DISPARI"));
}
if (puntata != `PARI` || puntata != `DISPARI`) {
    if (randomIntegerNumber(0, 1) === 0) {
        puntata = `PARI`;
    } else {
        puntata = `DISPARI`;
    }
    alert(`I due tentativi precedenti non sono andati a buon fine. Ho scelto ${puntata} per te`);
} //ᐠ｡ꞈ｡ᐟ\ 
valore = parseInt(prompt("Inserisci il tuo numero tra 1 e 5"));
if (!isNumberInRange(valore, 1, 5)) {
    valore = parseInt(prompt("Inserisci un nuovo valore accettabile( un numero intero compreso tra 1 e 5)")); 
}
if (!isNumberInRange(valore, 1, 5)) {
    valore = randomIntegerNumber(1, 5);
    alert( `I due tentativi precedenti non sono andati a buon fine. Ho scelto un numero random tra 1 e 5 per te. Ho scelto ${valore}.`)
}
if (isPari((valore + valorePc)) && puntata === `PARI`) {
    alert(`Hai Vinto! IL tuo valore è ${valore} il mio è ${valorePc} il risultato è ${puntata}`);
} else if (!isPari((valore + valorePc)) && puntata === `DISPARI`) {
    alert(`Hai Vinto! IL tuo valore è ${valore} il mio è ${valorePc} il risultato è ${puntata}`);
} else{
    alert(`Ho Vinto Io! IL tuo valore è ${valore} il mio è ${valorePc} il risultato NON è ${puntata}`);
}
