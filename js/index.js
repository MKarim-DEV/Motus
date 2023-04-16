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
    let table = document.querySelector("table");
    let letters = word.split('');
  
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 8; col++) {
      const td = table.rows[row].cells[col];
      td.innerHTML = letters[col];
    }
  }
}
stock_random_word(randomWord);

function display_input_word(word) {
    let table = document.querySelector("table");
    let letters = word.split('');

    for (let col = 0; col < 8; col++) {
      let td = table.rows[turn].cells[col];
      td.innerHTML = letters[col];
    }
    document.querySelector(".hidden").classList.remove("hidden");
}

let turn = 0;
document.querySelector("#guessForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let guess = document.querySelector("#mot").value.toUpperCase();
  display_input_word(guess);
   if (guess === randomWord) {
    alert("Bravo, vous avez gagné!!!");
    play_again();
  } else {
    turn++;
    if (turn === 10) {
      alert("Dommage, le mot à deviner était " + randomWord.toUpperCase() + ".");
      play_again();
    } 
    document.querySelector("#guessForm").reset();
  }
})

function play_again() {
    let answer = prompt("Souhaitez-vous jouer une nouvelle partie? (O/N)");
    if (answer || answer.toLowerCase() === "O") {
      window.location.reload();
    }
  }



 