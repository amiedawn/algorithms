//isPalindrome: ** best solution so far:

// input:
// string => palindrome ? true : false
// include spaces, uppercase, and punctuation

// output:
// palindrome('Kayak') === true;
// palindrome('table') === false;

const isPalindrome = string => {
    re = /[^a-zA-Z0-9]/g;
    string = string.toLowerCase().replace(re, "");
    console.log(string.split('').reverse().join("") === string);
};    

isPalindrome("A man,a plan, a canal. Panama");