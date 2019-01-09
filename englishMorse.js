//english to morse
let fs = require('fs');
let morse =  fs.readFileSync("./morse.txt", "utf-8").split("\n");
let alphanumeric =  fs.readFileSync("./alphanumeric.txt", "utf-8").split("\n");

function morseToEng(morseString){
  let morseArray = morseString.split(" ");
  let
}