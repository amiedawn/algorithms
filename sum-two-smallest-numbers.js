// create a function that returns the sum of the 2 lowest positive numbers given an array of
// minimum 4 positive integers. No floats or non-positive integers will be passed.
// Ex: when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// 5+2=7

// function sumTwoSmallestNumbers(numbers) {
//     const sumTwoSmallestNumbers = numbers => {
//        const [firstNumber, secondNumber] = numbers.sort((a,b) => a-b);
//        console.log(numbers);
//        return firstNumber + secondNumber;
// };

//  const numbers = [5,1,11,2];

//  console.log(sumTwoSmallestNumbers(numbers)); // -or-

// console.log(sumTwoSmallestNumbers([5,1,11,2]));

// if you want sum of 2 highest numbers, switch to ...numbers.sor((a,b) => b-a);
//***
//OPTION 2: with no destructuring

const sumTwoSmallestNumbers = (numbers) => {
    numbers = numbers.sort((a,b) => a-b);
    return numbers[0] + numbers[1];
};

console.log(sumTwoSmallestNumbers([5,1,11,2]));