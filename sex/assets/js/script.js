var nome = prompt("Inserisci il tuo nome: ");
var sesso = prompt("Inserisci il sesso: ");

if (sesso === "maschio") {
  document.getElementById("colore").style.color = "#6DA7E6";
} else {
  document.getElementById("colore").style.color = "pink";
}

document.getElementById("colore").innerHTML = nome;
