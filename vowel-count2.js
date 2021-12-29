// Return the number (count) of vowels in the given string.
// We will consider a,e,i,o,u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or/spaces.
// ex: 'The boy rode his bike to school.'

// option 1:
const getCount = str => {
    return str
        .split("")
        .reduce((acc, letter) => (letter.match(/[a,e,i,o,u]/g) ? acc + 1 : acc), 0);
};

console.log(getCount("The boy rode his bike to school."));

// option 2:
const countVowels = (string) => {
    let count=0;
    for (const letter of string)  {
        if (letter.match(/[a,e,i,o,u]/g)) {
            count++;
        }
    }
    return count;
};

console.log(countVowels("The boy rode his bike to school."));