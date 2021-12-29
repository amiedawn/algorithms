// Given a string, you are required to replace every letter with its 
// position in the alphabet. If anything in the text isn't a letter, 
// ignore it and don't return it.
// "a"=1, "b"=2, etc.

// ex: alphabetPosition("The sunset sets at twelve o'clock.")
// should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20
// 25 5 12 22 5 15 3 12 15 3 11" (as a string)

const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const alphabetPosition = (text) => {
 // replace everything that is not letters
 return text.toLowerCase().replace(/[^a-zA-Z]/g,'').split("").map((letter) => alphabet.indexOf(letter) + 1).join(' ');
};

console.log(alphabetPosition("The sunset sets at twelve o'clock."));