// PARI E DISPARI

// ---------------------------------- MAIN ------------------------------>^.^<------

let puntata = prompt("Scegli se puntare su pari o su dispari").toUpperCase();
let valore = 0;
let valorePc = randomIntegerNumber(1, 5);

while(puntata != `PARI` && puntata != `DISPARI`){
    puntata = prompt("Scegli un valore tra PARI o DISPARI").toUpperCase();
}
    
// if (puntata != `PARI` || puntata != `DISPARI`) {
//     puntata = parseInt(prompt("Scegli un valore tra PARI O DISPARI"));
// }
// if (puntata != `PARI` || puntata != `DISPARI`) {
//     if (randomIntegerNumber(0, 1) === 0) {
//         puntata = `PARI`;
//     } else {
//         puntata = `DISPARI`;
//     }
//     alert(`I due tentativi precedenti non sono andati a buon fine. Ho scelto ${puntata} per te`);
// } //ᐠ｡ꞈ｡ᐟ\ 
valore = parseInt(prompt("Inserisci il tuo numero tra 1 e 5"));
while(!isNumberInRange(valore, 1, 5)){
    valore = parseInt(prompt("Inserisci un nuovo valore accettabile( un numero intero compreso tra 1 e 5)"));
}

// if (!isNumberInRange(valore, 1, 5)) {
//     valore = parseInt(prompt("Inserisci un nuovo valore accettabile( un numero intero compreso tra 1 e 5)")); 
// }
// if (!isNumberInRange(valore, 1, 5)) {
//     valore = randomIntegerNumber(1, 5);
//     alert( `I due tentativi precedenti non sono andati a buon fine. Ho scelto un numero random tra 1 e 5 per te. Ho scelto ${valore}.`)
// }
if (isPari((valore + valorePc)) && puntata === `PARI`) {
    alert(`Hai Vinto! IL tuo valore è ${valore} il mio è ${valorePc} il risultato è ${puntata}`);
} else if (!isPari((valore + valorePc)) && puntata === `DISPARI`) {
    alert(`Hai Vinto! IL tuo valore è ${valore} il mio è ${valorePc} il risultato è ${puntata}`);
} else{
    alert(`Ho Vinto Io! IL tuo valore è ${valore} il mio è ${valorePc} il risultato NON è ${puntata}`);
}
