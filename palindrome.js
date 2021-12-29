// determine if a string is a palindrome

// OPTION 1:
// function palindrome(str) {
//   var re = /[^-Za-z0-9]/g; // remove all non-alphanumeric characters (punctuation, spaces, and symbols) 
//   var lowRegStr = str.toLowerCase().replace(re, ''); // make all characters lowercase
//   var reverseStr = lowRegStr.split('').reverse().join('');
//   return reverseStr === lowRegStr;
// }
// palindrome("A man, a plan, a canal. Panama");

// OPTION 2:
function palindrome(str) {
  var re = /[^-Za-z0-9]/g; // remove all non-alphanumeric characters (punctuation, spaces, and symbols)
  str = str.toLowerCase().replace(re, ""); // make all characters lowercase
  var len = str.length;
  for (var i=0; i < len/2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

palindrome ("A man, a plan, a canal. Panama");