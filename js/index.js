"use strict";

let hiddenWordList=["ACADEMIE","ALLIANCE","BENEFICE","CALCAIRE","CHENILLE","CROISADE","DIALOGUE","ECUREUIL","ETRANGES","FLAMBEAU","FREQUENT","GENERALE","HARMONIE","ILLUSION","LABRADOR","MARECAGE","MINUTEUR","NATATION","OMNIVORE","PARASITE","PRECHEUR","PRIVATIF","REPTILES","RICHESSE","SALAIRES","STEROIDE","TENAILLE","TRIBUNAL","VAGABOND","VOLAILLE"];
//30 mots cachés.
function hiddenWordChoice(array){
    let randomChoice = Math.random()*array.length|0;
    let randomWord = array[randomChoice];
    return randomWord;
}

let randomWord = hiddenWordChoice(hiddenWordList);
console.log(randomWord);

let remplissageTableau = document.querySelector('tr');
remplissageTableau.innerHTML = "randomWord";