// PALINDROMA

// ---------------------------------- MAIN ------------------------------>^.^<------

let parola = prompt("Inserisci la parola che vuoi controllare").toUpperCase();

while (parola === ""){
    parola = prompt("Inserisci UNA PAROLA da controllare").toUpperCase();
} 
    
if (parola === wordReverse(parola)) {
    alert(`La parola "${parola}" è PALINDROMA`)
} else {
    alert(`La parola "${parola}" NON è PALINDROMA, è diversa da ${wordReverse(parola)}`)
}
