// Write code to create a function that accepts a string (`str`) and returns the longest word in the string

var longestWord = function(str) {
  var words = str.split(" ");
  var winner = words[0];

  for ( var i = 1; i < words.length; i++) {
    var currentWord = words[i];
  
    if (currentWord.length > winner.length) {
      winner = currentWord;
    } 
  }

    return winner;
};