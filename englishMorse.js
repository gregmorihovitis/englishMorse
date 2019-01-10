
let fs = require('fs');
const morse =  fs.readFileSync("./morse.txt", "utf-8").split("\n");
const alphanumeric =  fs.readFileSync("./alphanumeric.txt", "utf-8").split("\n");

function convertMyString(inputString){
  if(alphanumeric.indexOf(inputString[0]) > -1){
    return alphaToMorse(inputString);
  }
  else if(morse.indexOf(inputString[0]) > -1){
    return morseToAlpha(inputString);
  }
}

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
  let alphaArray = alphaString.split(" ");

  for (let i = 0; i < alphaArray.length; i++){
    for (let j = 0; j < alphaArray[i].length; j++){
      let alphaIndex = alphanumeric.indexOf(alphaArray[i][j].toLowerCase());

      convertedString += morse[alphaIndex] + " ";
    }

    if(i + 1 !== alphaArray.length){
      convertedString += "/ ";
    }
  }

  return convertedString;

}

// console.log(morseToAlpha(".... . .-.. .-.. --- / .-- --- .-. .-.. -.."));
// console.log(alphaToMorse("hello world"));
// console.log(alphaToMorse("HeLlo WoRld"));
console.log(convertMyString(".... . .-.. .-.. --- / .-- --- .-. .-.. -.."));
