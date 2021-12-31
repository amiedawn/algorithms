// Fibonacci sequence is an ordering of numbers where each number is the sum
// of the preceding 2. Ex: 1st ten numbers of the sequence are: 
// 0,1,1,2,3,5,8,13,21,34. Write a function that returns the nth entry in the 
// Fibonacci sequence, where n is a number you pass in as an argument to the function

// 1. store the sequence you're going to generate inside an array
// 2. initialize the array with the 1st two numbers of the sequence

const fibonacci = num => {
    const result = [0,1];

    // 3. push the sum of the 2 numbers preceding the position of i
    // in the result array to the end of the array
    for (let i=2; i<=num; i++) {
        const prevNum1 = result[i-2];
        const prevNum2 = result[i-1];
        result.push(prevNum1 + prevNum2);
    }

    // 4. return the last value in the result array
    console.log(result[num]);
};

// the parameter is the number of the index
fibonacci(4);

// option 2 using recursion (not as good of a solution)
// const fibonacci = num => {
//     if (num<2) {
//         return num
//     }
//     // recursion here
//     return fibonacci(num-1) + fibonacci(num-2)
// }
// console.log(fibonacci(5));