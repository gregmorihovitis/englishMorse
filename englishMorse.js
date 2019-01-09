
let fs = require('fs');
const morse =  fs.readFileSync("./morse.txt", "utf-8").split("\n");
const alphanumeric =  fs.readFileSync("./alphanumeric.txt", "utf-8").split("\n");

function morseToAlpha(morseString){
  let convertedString = "";
  let morseArray = morseString.split(" / ");

  for (let i = 0; i < morseArray.length; i++){
    let morseWord = morseArray[i].split(" ");

    for (let j = 0; j < morseWord.length; j++){
      let morseIndex = morse.indexOf(morseWord[j]);

      convertedString += alphanumeric[morseIndex];
    }

    if(i + 1 !== morseArray.length){
      convertedString += " ";
    }
  }

  return convertedString;
}

function alphaToMorse(alphaString){
  let convertedString = "";
  let aplhaArray = alphaString.split(" ");

  for (let i = 0; i < alphaArray.length; i++){
    let alphaWord = alphaArray[i].split("");

    for (let j = 0; j < alphaWord.length; j++){
      let alphaIndex = alphanumeric.indexOf(alphaWord[j]);

      convertedString += morse[engIndex];
    }

    if(i + 1 !== morseArray.length){
      convertedString += " ";
    }
  }

  return convertedString;

}

console.log(morseToAlpha(".... . .-.. .-.. --- / .-- --- .-. .-.. -.."))