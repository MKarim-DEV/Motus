"use strict";

const HIDDEN_WORD_LIST=["ACADEMIE","ALLIANCE","BENEFICE","CALCAIRE","CHENILLE","CROISADE","DIALOGUE","ECUREUIL","ETRANGES","FLAMBEAU","FREQUENT","GENERALE","HARMONIE","ILLUSION","LABRADOR","MARECAGE","MINUTEUR","NATATION","OMNIVORE","PARASITE","PRECHEUR","PRIVATIF","REPTILES","RICHESSE","SALAIRES","STEROIDE","TENAILLE","TRIBUNAL","VAGABOND","VOLAILLE"];
//30 mots cachés.
function hidden_word_choice(array){
    let randomChoice = Math.random()*array.length|0;
    let randomWord = array[randomChoice];
    return randomWord;
}

let randomWord = hidden_word_choice(HIDDEN_WORD_LIST);
console.log(randomWord);
console.log(randomWord[0]);
console.log(randomWord[1]);
console.log(randomWord[7]);
  
function stock_random_word(word) {
    const table = document.querySelector("table");
    const letters = word.split('');
  
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 8; col++) {
      const td = table.rows[row].cells[col];
      td.innerHTML = letters[col];
    }
  }
}
stock_random_word(randomWord);

function display_input_word(word) {
    const table = document.querySelector("table");
    const letters = word.split('');

    for (let col = 0; col < 8; col++) {
      const td = table.rows[turn].cells[col];
      td.innerHTML = letters[col];
    }
    document.querySelector(".hidden").classList.remove("hidden");
}

let turn = 0;
document.querySelector("#guessForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var guess = document.querySelector("#mot").value;
  display_input_word(guess);
   if (guess === randomWord) {
    alert("You win!");
  } else {
    turn++;
    if (turn === 10) {
      alert("You lose. The word was " + randomWord + ".");
      prompt("Voulez-vous faire une nouvelle partie?")
    } 
    document.querySelector("#guessForm").reset();
  }
})



 