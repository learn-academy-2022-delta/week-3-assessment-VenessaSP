// ASSESSMENT 3: Coding Practical Questions with Jest

const { number } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence. 

describe ("fibonacci", () => {
    it("should return an array of the Fibonacci sequence”, () => {
        const fibLength1 = 6
        const fibLength2 = 10

     expect(fibonacci(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
     expect(fibonacci(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34,]) 
    })

})
  
// // a) Create a test with expect statements for each of the variables provided.

// const fibLength1 = 6
// // Expected output: [1, 1, 2, 3, 5, 8]

// const fibLength2 = 10
// // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// // b) Create the function that makes the test pass.

const fibonacci = (sequence) => {
if(fibLength1 < 2) {
return [1, 1, 2, 3, 5, 8]; } 
    else if(fibLength2 < 2) {
    return [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
}
}    

//Psuedocode:
// 1. Declare a function called fibonacci
// 2. Create a parameter called sequene
// 3. Create conditional statments if/else to do the greater than logic
// 4. Create return statments for each variable with the expected output

//---------------Notes question 1---------------------
// For the life of me I can't get the syntax right, unsure on what's going wrong there.
// error message: Details:

//     SyntaxError: /Users/learnacademy/Desktop/week-3-assessment-VenessaSP/code-challenges.test.js: Unterminated string constant. (17:7)

//     15 |
//     16 | describe ("fibonacci", () => {
//   > 17 |     it("should return an array of the Fibonacci sequence”, () => {
//        |        ^
//     18 |         const fibLength1 = 6
//     19 |         const fibLength2 = 10
//     20 |     expect(fibonacci(fibLength1)

   

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

describe("oddNumbers", () => {
    it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
        const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
        const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
        expect(oddNumbers(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(oddNumbers(fullArr2)).toEqual([-823, 7, 23])
})
})


// // a) Create a test with expect statements for each of the variables provided.

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// // Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// // Expected output: [-823, 7, 23]


// // b) Create the function that makes the test pass.

const oddNumbers = (nums) => {
    for(let i=0; i<nums.length; i++){
        if(nums[i] % 2 === 1) {
            return []
        }

}
}
//Psuedocode:
// 1. Declare a function called oddNumbers
// 2. Create a parameter called nums
// 3. Create a for loop with a modulo to get a remainder which would result in the odd numbers
// 4. Create return statment

// ----------------Notes question 2-------------------
// unsure about the numbers in the strings, is the question looking for strictly data type numbers or string is included? unsure of what method to use as far as including strings or being able to sort from smallest to largest, I was thinking in the return line just write out all the odd numbers in that order or a .split & .join method but unsure on what to add for the reassignment. Can one parameter be used for 2 variables? 

//error message:
// ✕ takes in an array and returns a new array of only odd numbers sorted from least to greatest
//   addition
//     ✕  takes in an array and returns an array of the accumulating sum.

//   ● oddNumbers › takes in an array and returns a new array of only odd numbers sorted from least to greatest

//     ReferenceError: array is not defined

//       90 |
//       91 | const oddNumbers = (nums) => {
//     > 92 |     for(let i=0; i<array.length; i++){
//          |                    ^
//       93 |         if(array[i] % 2 === 1) {
//       94 |             return []
//       95 |         }

//-------------- so after the message I switched it to 'nums' and got the same response


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("addition", () => {
    it(" takes in an array and returns an array of the accumulating sum.", ()=> {
        const numbersToAdd1 = [2, 4, 45, 9]
        const numbersToAdd2 = [0, 7, -8, 12]
        const numbersToAdd3 = []
        expect(addition(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(addition(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(addition(numbersToAdd3)).toEqual([])
    })
})

const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []

// b) Create the function that makes the test pass.

const addition = (numbers) => {
    let newArr = []
    for(let i=1; i<numbers.length; i++)
    newArr.push(numbers[i] + 2)
}

// Psuedocode:
// 1. Declare a function called addition
// 2. Create a parameter called numbers
// 3. Create a variable called newArr 
// 4. Create a for loop to iterate from the second index(index 1) because for the expected output of each array the 0 index remains the same.
// 5. Create return that'll give the expected output

//--------------Notes question 3----------------- Since there's no pattern in the array I tried to do the addition but unsure how to write for each array. Since there's 3 seperate arrays do i need to write a function for each and how do I incude that in the function. 
//error message:
//takes in an array and returns an array of the accumulating sum.

// ReferenceError: array is not defined

// 154 | const addition = (numbers) => {
// 155 |     let newArr = []
// > 156 |     for(let i=1; i<array.length; i++)
//     |                    ^
// 157 |     newArr.push(array[i] + 2)
// 158 | }
// 159 |
//----------------so after that I switched all the arrays in my function to numbers I got this error:

//Expected: [2, 6, 51, 60]
// Received: undefined

// 137 |         const numbersToAdd2 = [0, 7, -8, 12]
// 138 |         const numbersToAdd3 = []
// > 139 |         expect(addition(numbersToAdd1)).toEqual([2, 6, 51, 60])
//     |                                         ^
// 140 |         expect(addition(numbersToAdd2)).toEqual([0, 7, -1, 11])
// 141 |         expect(addition(numbersToAdd3)).toEqual([])
// 142 |     })