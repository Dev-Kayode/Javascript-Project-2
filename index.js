//String Manipulation Functions
//-Reverse A String

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

//Count Characters in a String

function countCharacters(char) {
  return char.length;
}

console.log(countCharacters("help"));

//Capitalize Words

function capWords(cap) {
  return cap
    .split(" ") // Split the sentence into words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word
    .join(" "); // Join the words back into a sentence
}

console.log(capWords("niggas be crazy"));

//Array Functions
//Find Maximum and Minimum

function maxValue(M) {
  let max = M[0];
  for (let i = 1; i < M.length; i++) {
    if (M[i] > max) {
      max = M[i];
    }
  }
  return max;
}

let digits = [2, 8, 9, 1, 0, 5, 6, 7];
function minValue(m) {
  let min = m[0];
  for (let i = 1; i < m.length; i++) {
    if (m[i] < min) {
      min = m[i];
    }
  }
  return min;
}

console.log(maxValue(digits));
console.log(minValue(digits));

//Sum of Array

function add(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }

  return sum;
}
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let omo = add(myArray);
console.log(omo);

//Filter Array

function filterArray(arr, condition) {
  return arr.filter(condition);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Keep Only Even Numbers
const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);
console.log(evenNumbers);

// Mathematical Functions
// Factorials

function factorialRecursive(n) {
  if (n < 0) {
    return Error("Factorial is not defined for negative numbers.");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorialRecursive(n - 1);
}

console.log(factorialRecursive(5));

//Prime Number

function isPrimeNumber(a) {
  if (a <= 1) {
    return false;
  }

  for (let i = 2; i < a; i++) if (a % i == 0) return false;

  return true;
}
console.log(isPrimeNumber(2));

//   Fibonacci Sequence
function fibonacciSequence(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let fibonacci = [0, 1];
  for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  return fibonacci;
}

console.log(fibonacciSequence(5));
