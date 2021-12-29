//Instructions:

// To be a openOrSenior, a member must be at least 55 years old and have a handicap
// greater than 7. In this croquet club, handicaps range from -2 to +26; the better
// the player, the lower the handicap.In

// Input: 

// Input will consist of a list of lists containing 2 items each. Each list contains
// information for a single potential member. Information consists of an integer for
// the person's age and an integer for the person's handicap.In

// Note for F#: The input will be of (int list list) which is a List<List>

// Example input: [[18,20],[45,2],[61,12],[37,6],[21,21],[78,9]]

// Output:

// Output will consist of a list of string values (in Haskell: Open or Senior) stating
// whether the respective member is to be placed in the senior or open category.In

// Example Output: ["Open", "Open", "Senior","Open", "Open", "Senior"]

const openOrSenior = (data) => {
    return data.map((info) => {
        if (info[0] >= 55 && info[1] > 7) {
            return "Senior";
        } else {
            return "Open";
        }
    });
};

data = [[18,20],[45,2],[61,12],[37,6],[21,21],[78,9]];
console.log(openOrSenior(data));

output: [ 'Open', 'Open', 'Senior', 'Open', 'Open', 'Senior' ]