let n1: number = Number(prompt("Inserisci il primo numero:"));
let n2: number = Number(prompt("Inserisci il secondo numero:"));
let n3: number = Number(prompt("Inserisci il terzo numero:"));

let elementoRIS = document.getElementById("risultato");

if (elementoRIS) {
    if (n1 <= n2 && n2 <= n3) {
        elementoRIS.innerText = "Ordine crescente: " + n1 + ", " + n2 + ", " + n3;
    } else if (n1 <= n3 && n3 <= n2) {
        elementoRIS.innerText = "Ordine crescente: " + n1 + ", " + n3 + ", " + n2;
    } else if (n2 <= n1 && n1 <= n3) {
        elementoRIS.innerText = "Ordine crescente: " + n2 + ", " + n1 + ", " + n3;
    } else if (n2 <= n3 && n3 <= n1) {
        elementoRIS.innerText = "Ordine crescente: " + n2 + ", " + n3 + ", " + n1;
    } else if (n3 <= n1 && n1 <= n2) {
        elementoRIS.innerText = "Ordine crescente: " + n3 + ", " + n1 + ", " + n2;
    } else {
        elementoRIS.innerText = "Ordine crescente: " + n3 + ", " + n2 + ", " + n1;
    }
}