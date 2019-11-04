// Generate a random number between min and max
function randomNumber(min,max){
  var number = Math.floor(Math.random()*max)+min;
  return number;
}

// Generate x number random
function xRandomNumber(size){
 
  var prohibitedNumbers = [];

  while(prohibitedNumbers.length < size){
    var random = randomNumber(1,100);
    var flag = true;
    for(i=0; i<=prohibitedNumbers.length; i++){
      if(prohibitedNumbers[i]==random){
        flag = false;
      } 
    }
    if(flag === true){
      prohibitedNumbers.push(random);
    }
  }
  return prohibitedNumbers;
}

// Check if the number has already been chosen by the user
function checkIfEntered (numberUser){
  var check = false;
  for(var i=0; i<= numbers.length; i++){
    if (numberUser == numbers[i]) {
      check = true;
      console.log("SI");
    }
  }
  return check;
}

//Check if the number is in the list

function mine(number,list){
  var mine = false;
  for(var i=0; i<list.length; i++){
    if(list[i]==number){
      mine = true;
    }
  }
  return mine;
}

//Check if the number is in the list

function mine(number,list){
  var mine = false;
  for(var i=0; i<list.length; i++){
    if(list[i]==number){
      mine = true;
    }
  }
  return mine;
}

//Global array of number chosen by the user
var numbers = [];

var cinqueRandom = xRandomNumber(5);

console.log(cinqueRandom);
alert(cinqueRandom);

setTimeout(game, 30000);

function game(){
  var numeriIndovinati = [];
  while (numbers.length<cinqueRandom.length) {
    var numberPrompt = parseInt(prompt("Inserisci il numero: "));
    if (checkIfEntered(numberPrompt)!=true) {
      numbers.push(numberPrompt);
      if (mine(numberPrompt,cinqueRandom)) {
        numeriIndovinati.push(numberPrompt);
      }
    } else{
      alert("Numero già inserito, cambia valore.");
    }
  }

  if (numeriIndovinati.length!=0) {
    document.getElementById("inner").innerHTML = "Hai indovinato: " + numeriIndovinati.length + " numeri, ovvero: " + numeriIndovinati;
  } else {
    document.getElementById("inner").innerHTML = "Non hai indovinato nessun numero";
  }

}
