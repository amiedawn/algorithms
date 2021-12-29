// Write code to create a function that accepts a string and returns an acronym for the given string

var acronymBuilder = function(str) {
  var words = str.split(" ");
  var acronym = "";

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    acronym = acronym + word[0].toUpperCase();
  }

  return acronym;
};
