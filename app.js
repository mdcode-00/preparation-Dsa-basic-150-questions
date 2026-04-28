////Q1- Teaching a Sibling to Tell Even from Odd


//One day, while teaching your little sibling about numbers, you wonder how a computer can tell if a number is even or odd. You recall that even numbers are divisible by 2 without a remainder, and odd numbers are not. To make it clear, you decide to write a simple program that checks the divisibility by 2 to classify any given number.



evenOdd = (num) => {
  // Validate input: number must be greater than 0
  if (num <= 0) {
    console.log("Please enter a positive number");
    return;
  }

  // Use modulo operator to check remainder
  const remainder = num % 2;

  // If remainder is 0, number is EVEN
  if (remainder === 0) {
    console.log("EVEN");
  } else {            /// else ODD
    console.log("ODD");
  }
};

evenOdd(4);


//Q2 - Solving the Prime Mystery in a Programming Contest

////In a programming contest, you get a question: determine whether a given number is prime. You remember a prime number is a number greater than 1 that has no divisors other than 1 and itself. To solve this, you decide to check divisibility from 2 up to the square root of the number. This way, you can quickly find if any divisor exists and decide primality.



const prime = (num) => {
  // Validate input: prime numbers must be greater than 1
  if (num <= 1) {
    console.log("Please enter a number greater than 1");
    return;
  }

  // Loop from 2 up to the square root of the number
  for (let i = 2; i * i <= num; i++) {
    // If divisible by any number other than 1 and itself
    if (num % i === 0) {
      console.log("Not Prime");
      return;
    }
  }

  // If no divisors are found
  console.log("Prime");
};

prime(4);


//////Detecting Leap Years While Building a Calendar App


function leapYear(year) {
  if (!year) {
    console.log("Enter a year");
    return;
  }

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
}

// Test cases
leapYear(1900);
leapYear(2000);
leapYear(2024);
leapYear(1997);
leapYear(2023);
leapYear(2020);


///////Quickly Summing Natural Numbers for a Math Challenge

function sumAll(num) {
  if (!num) return 0

  let total = 0

  for (let i = 1; i <= num; i++) {
    total += i
  }
  return total
}

sumAll(5)



//////////Automating Factorial Calculation for Combinatorics

function factorial(num) {
  if (!num) return 1  // factorial of 0 is 1

  let total = 1
  for (let i = num; i > 0; i--) {
    console.log(i)
    total *= i
  }
  return total
}

console.log(factorial(5)) // 120



/////Summing the Digits to Find the Digital Root

// HCF Function
function hcf(num1, num2) {
  while (num2 !== 0) {
    let temp = num2
    num2 = num1 % num2
    num1 = temp
  }
  return num1
}
console.log('HCF of 48 and 18:', hcf(48, 18)) // 6

// Reverse String Function
function reverse(str) {
  let result = ''
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  return result
}

// Example usage
console.log("Reverse of 'hello':", reverse('hello')) // 'olleh'


///reverse string
function reverse(str) {
  let result = ''
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(i) // optional: shows index
    result += str[i]
  }
  return result
}

console.log(reverse('hello')) // 'olleh'


// Palindrome checker
function palindrome(str) {
  if (!str) return console.log("write palindrome");

  let left = 0;
  let right = str.length - 1;

  while (right >= left) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

palindrome("madam");



// Fibonacci sequence
function Fibonacci(num) {
  if (!num || num <= 0) return console.log("empty num");

  let a = 0;
  let b = 1;

  for (let i = 0; i < num; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return a;
}

Fibonacci(6);



// Celsius to Fahrenheit converter
function celsius(num) {
  if (num === undefined) return "enter temperature";
  return Math.floor((num * 9) / 5 + 32);
}

celsius(1);

/////Add LCM and HCF calculation
function lcm(num1, num2) {
  function hcf(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  let result = (num1 * num2) / hcf(num1, num2);
  console.log("HCF:", hcf(num1, num2));
  console.log("LCM:", result);
  return result;
}

lcm(12, 15);




///Add vowel and non-vowel counter function
function findVowel(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let notVowel = 0;
  let vowelCount = 0;

  let secStr = str.replaceAll(" ", "");

  for (let i = 0; i < secStr.length; i++) {
    if (vowels.includes(secStr[i].toLowerCase())) {
      vowelCount += 1;
    } else {
      notVowel += 1;
    }
  }

  return `Vowels: ${vowelCount}, Non-vowels: ${notVowel}`;
}

console.log(findVowel(" hello world "));



////Add function to reverse a string 
function reverse(str) {
  let reversed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

// Example usage
console.log(reverse("programming")); // Output: "gnimmargorp"



/////Add function to find max and min numbers in an array
function maxMin(num) {
  if (num.length === 0) return "Array is empty";

  let maxNum = num[0];
  let smallest = num[0];

  for (let i = 0; i < num.length; i++) {
    if (num[i] > maxNum) maxNum = num[i];
    if (num[i] < smallest) smallest = num[i];
  }

  return `Max number: ${maxNum}, Smallest number: ${smallest}`;
}

// Example usage
console.log(maxMin([4, 7, 1, 8, 5])); // Output: Max number: 8, Smallest number: 1



/////Add array sorting function using selection sort
function acc(num) {
  // Create a copy of the array
  let arr = num.slice();

  // Simple selection sort
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

// Example usage
console.log(acc([3, 1, 4, 1, 5, 9])); // [1, 1, 3, 4, 5, 9]
console.log(acc([10, 2, 8, 6]));      // [2, 6, 8, 10]



///// Add all numbers in an array
function acc(num) {
  if (!Array.isArray(num) || num.length === 0) return 0;

  let result = num[0];

  for (let i = 1; i < num.length; i++) {
    result = num[i] + result;
    console.log(num[i] + 2); // optional debug output
  }

  return result;
}

// Example usage
console.log(acc([1, 2, 3, 4, 5]));  // 15
console.log(acc([10, 20, 30]));     // 60


///// Find Armstrong numbers in a given range
function acc(start, end) {
  let result = [];

  for (let i = start; i <= end; i++) {
    let digits = i.toString();
    let sum = 0;

    for (let d of digits) {
      sum += d * d * d;
    }

    if (sum === i) {
      result.push(i);
    }
  }

  return result;
}

// Example usage
console.log(acc(1, 500));
// [1, 153, 370, 371, 407]

console.log(acc(1, 1000));
// [1, 153, 370, 371, 407]




///// Print multiplication table for a given number
function accMultiplication(num) {
  if (!num) return "Enter number";

  for (let i = 1; i <= 10; i++) {
    let result = num * i;
    console.log(`${num} X ${i} = ${result}`);
  }
}

// Example usage
accMultiplication(5);
/*
5 X 1 = 5
5 X 2 = 10
5 X 3 = 15
...
5 X 10 = 50
*/

accMultiplication(12);
/*
12 X 1 = 12
12 X 2 = 24
...
12 X 10 = 120
*/


///// Check if a number is prime
function accIsPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Example usage
console.log(accIsPrime(1));   // false
console.log(accIsPrime(2));   // true
console.log(accIsPrime(17));  // true
console.log(accIsPrime(20));  // false


///// Find all prime numbers in a given range
function accPrimeRange(f, l) {
  let result = [];

  for (let i = f; i <= l; i++) {
    if (accIsPrime(i)) {
      result.push(i);
    }
  }

  return result;
}

// Example usage
console.log(accPrimeRange(10, 30));
// [11, 13, 17, 19, 23, 29]


///////////////////////////////////hard one/////////////////////////////////////////


///// Process an array: sum, perfect square check, digits, GCD, and primality
function accHard(num) {
  if (!Array.isArray(num) || num.length === 0) return "Enter a valid array";

  // 1️⃣ Sum of array elements
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  console.log("Sum:", sum);

  // 2️⃣ Check if sum is a perfect square
  let isPerfectSquare = false;
  for (let i = 1; i * i <= sum; i++) {
    if (i * i === sum) {
      isPerfectSquare = true;
      break;
    }
  }
  if (isPerfectSquare) console.log("Perfect square.");

  // 3️⃣ Split sum into digits
  let digitsStr = sum.toString();
  let digits = digitsStr.split('').map(Number);
  console.log("Digits:", digits);

  // 4️⃣ Helper function: GCD
  function hcl(a, b) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  }

  // 5️⃣ Find GCD of digits
  let result = digits[0];
  for (let i = 1; i < digits.length; i++) {
    result = hcl(result, digits[i]);
  }
  console.log("GCD of digits:", result);

  // 6️⃣ Check if GCD is prime
  if (result < 2) {
    console.log("Not prime");
    return;
  }
  let primeFlag = true;
  for (let i = 2; i * i <= result; i++) {
    if (result % i === 0) {
      primeFlag = false;
      break;
    }
  }
  console.log(primeFlag ? "Prime" : "Not prime");
}

// Example usage
accHard([50, 35, 36]);


////////////Add recursive function to sum odd numbers in range

function rece(range, index = range[0], end = range[1], result = 0) {
  if (index > end) {
    return result
  }

  if (index % 2 !== 0) {
    result += index
  }

  return rece(range, index + 1, end, result)
}

console.log(rece([1, 10])) // 25
console.log(rece([2, 5]))  // 8
console.log(rece([10, 10])) // 0


//////////////Add iterative Fibonacci function
function find(num) {
  if (num <= 0) return null

  if (num === 1) return 0
  if (num === 2) return 1

  let pre = 0
  let curr = 1

  for (let i = 3; i <= num; i++) {
    let next = pre + curr
    pre = curr
    curr = next
  }

  return curr
}

console.log(find(5)) // 3
console.log(find(1)) // 0
console.log(find(7)) // 8


///////////////Add function to find prime numbers up to a given limit
function findPrimes(num) {
  let result = []

  for (let i = 2; i < num; i++) {
    let prime = true

    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        prime = false
        break
      }
    }

    if (prime) {
      result.push(i)
    }
  }

  return result
}

console.log(findPrimes(20)) // [2, 3, 5, 7, 11, 13, 17, 19]


////////////Add function to count digits in a number

function countDigits(num) {
  if (num === 0) return 1

  let count = 0
  let number = Math.abs(num)

  while (number > 0) {
    count++
    number = Math.floor(number / 10)
  }

  return count
}

// Tests
console.log(countDigits(12345)) // 5
console.log(countDigits(0))     // 1
console.log(countDigits(-987))  // 3


//////////Add function to check Narcissistic (Armstrong) numbers
function isNarcissistic(num) {
  let realNum = Math.abs(num).toString()
  let digits = realNum.length
  let result = 0

  for (let digit of realNum) {
    result += Math.pow(Number(digit), digits)
  }

  return result === num
    ? "Narcissistic Number"
    : "Not a Narcissistic Number"
}

// Tests
console.log(isNarcissistic(153))   // Narcissistic Number
console.log(isNarcissistic(9474))  // Narcissistic Number
console.log(isNarcissistic(123))   // Not a Narcissistic Number



/////Add function to generate simple numeric pattern

function pattern(num) {
  let result = []

  for (let i = 1; i <= num * 2; i++) {
    result.push(i)
  }

  return result
}

// Tests
console.log(pattern(3)) // [1, 2, 3, 4, 5, 6]
console.log(pattern(1)) // [1, 2]
console.log(pattern(2)) // [1, 2, 3, 4]



//////////////Add function to calculate factorial digit sum
function factorialDigitSum(num) {
  if (num < 0) return null

  let factorial = 1

  for (let i = num; i > 1; i--) {
    factorial *= i
  }

  let result = 0
  let str = factorial.toString()

  for (let digit of str) {
    result += Number(digit)
  }

  return result
}

// Tests
console.log(factorialDigitSum(4))  // 6  (4! = 24 → 2 + 4)
console.log(factorialDigitSum(10)) // 27 (10! = 3628800)


/////Add function to find all longest palindromic substrings

function allLongestPalindromes(s) {
  let maxLen = 0
  let palindromes = []

  function expand(left, right) {
    while (
      left >= 0 &&
      right < s.length &&
      s[left] === s[right]
    ) {
      let curr = s.slice(left, right + 1)

      if (curr.length > maxLen) {
        maxLen = curr.length
        palindromes = [curr]
      } else if (
        curr.length === maxLen &&
        !palindromes.includes(curr)
      ) {
        palindromes.push(curr)
      }

      left--
      right++
    }
  }

  for (let i = 0; i < s.length; i++) {
    expand(i, i)       // odd-length palindromes
    expand(i, i + 1)   // even-length palindromes
  }

  return palindromes
}

// Tests
console.log(allLongestPalindromes("babad")) // ["bab", "aba"]
console.log(allLongestPalindromes("cbbd"))  // ["bb"]
console.log(allLongestPalindromes("a"))     // ["a"]



/////Add function to find missing numbers in a sequence
function findMissingNumbers(sequence) {
  if (!Array.isArray(sequence) || sequence.length === 0) return []

  let result = []
  let maxNum = Math.max(...sequence)

  for (let i = 1; i < maxNum; i++) {
    if (!sequence.includes(i)) {
      result.push(i)
    }
  }

  return result
}

// Tests
console.log(findMissingNumbers([1, 2, 4, 5]))          // [3]
console.log(findMissingNumbers([2, 3, 7, 6, 8, 1]))    // [4, 5]
console.log(findMissingNumbers([1, 2, 3]))             // []


////Add function to generate flattened Pascal's Triangle
function pascalTriangleFlattened(numRows) {
  if (numRows <= 0) return []

  let result = []
  let previousRow = []

  for (let i = 0; i < numRows; i++) {
    let currentRow = []

    currentRow[0] = 1
    currentRow[i] = 1

    for (let j = 1; j < i; j++) {
      currentRow[j] = previousRow[j - 1] + previousRow[j]
    }

    result.push(...currentRow)
    previousRow = currentRow
  }

  return result
}

// Tests
console.log(pascalTriangleFlattened(4)) // [1, 1,1, 1,2,1, 1,3,3,1]
console.log(pascalTriangleFlattened(1)) // [1]
console.log(pascalTriangleFlattened(5)) // [1,1,1,1,2,1,1,3,3,1,1,4,6,4,1]


// Add seq function with detailed comments and example usage
function seq(s) {
  let num = 1;     // Initialize the starting number
  let res = [];    // Array to store the resulting sequence

  // Outer loop for the number of rows
  for (let i = 1; i <= s; i++) {
    
    // Inner loop for numbers in each row
    for (let j = 1; j <= i; j++) {
      res.push(num); // Add the current number to the result array
      num++;         // Increment number for the next iteration
    }
  }

  return res; // Return the complete sequence
}

// Example usage: generates the sequence for 3 rows
console.log(seq(3)); // Output: [1, 2, 3, 4, 5, 6]


// Loop	O(n)	O(1)

// Formula	O(1)	O(1)

function ad(num) {
  if(!num)return "num not given"
  
  let res = 0
  for(let i=1; i<=num; i++){
   console.log(i)
    res += i
  }
  return res  
}
ad(4)
ad(6)
ad(1)


function ad(num) {
  if(num === undefined)return "num not given"
 return (num * (num + 1))/2
}
ad(4)
ad(6)
ad(1)


// Add perfect square function
function fi(num) {
 if(num === undefined)return "num not given"
  if(num <0)return false
for(let i = 1; i<=num; i++){
  if(i*i === num){
    return true
  }
}
  return false
}
fi(16)
fi(20)
fi(1)


function getDigitalRoot(num) { 
  // Keep reducing until number becomes a single digit
  while (num >= 10) {
    let sum = 0;

    // Extract and sum each digit
    while (num > 0) {
      sum += num % 10;              // Get last digit
      num = Math.floor(num / 10);   // Remove last digit
    }

    console.log("Intermediate sum:", sum);
    num = sum; // Continue process with new sum
  }

  return num; 
}

getDigitalRoot(9875);

//  Checks if a number is a power of 2.
function isPower(n) {
  console.log("Bitwise result:", n & (n - 1));
  
  return n > 0 && (n & (n - 1)) === 0;
}

isPower(8);


// Generates a Fibonacci sequence up to `num` elements using recursion
function fibonacci(num, pos = 1, res = [0, 1]) {

  // Edge case: if num is 0 or negative, return empty array
  if (num <= 0) return [];

  // Base case: stop recursion when desired length is reached
  if (num === res.length) return res;

  // Add next Fibonacci number:
  // current number = previous number + number before previous
  res.push(res[pos] + res[pos - 1]);

  // Recursive call:
  // Move to next position and continue building the sequence
  return fibonacci(num, pos + 1, res);
}

console.log(fibonacci(3));
console.log(fibonacci(5)); //[0, 1, 1, 2, 3]
console.log(fibonacci(7));


//  Finds numbers that can multiply with another number
function fin(num) {
  let res = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      res.push(i);
    }
  }

  return res;
}

// Examples
console.log(fin(6));   // [1,2,3,6]
console.log(fin(12));  // [1,2,3,4,6,12]
console.log(fin(15));  // [1,3,5,15]





// Calculates the average of numbers in an array.
function ff(num) {

// Variable to store the total sum
let res = 0;

// Loop through each element in the array
for (let i = 0; i < num.length; i++) {

// Add current element to the total sum
res += num[i];
}

// Print total sum (for debugging / checking)
console.log(res);

// Return average (sum divided by number of elements)
return (res / num.length);
}

// Examples
ff([2, 4, 6]); // 4
ff([1, 2, 3, 4, 5]); // 3
ff([10, 20, 30]); // 20



// Finds the most frequent number (mode) in an array.
function f(num) {

// Object to store frequency of each number
let res = {};

// Track highest frequency found so far
let maxval = 0;

// Track number with highest frequency
let maxKey = null;

// Loop through the array
for (let i = 0; i < num.length; i++) {

// Current number
let n = num[i];

// Increase count (initialize to 0 if not exists)
res[n] = (res[n] || 0) + 1;

// If this number's frequency is greater than max found
if (res[n] > maxval) {
maxval = res[n]; // update max frequency
maxKey = n; // update most frequent number
}
}

// Object keys are strings, so convert back to Number
return Number(maxKey);
}

// Examples
f([1, 2, 2, 3]); // 2
f([4, 4, 4, 5, 5]); // 4



// Counts how many characters are in a string (without using .length)
function countCharacters(str) {

  // Variable to store the total count
  let count = 0;

  // Loop through each character in the string
  for (const char of str) {

    // Increase count for every character found
    count++;
  }

  // Return the total number of characters
  return count;
}

countCharacters("code"); // 4



// Generates a repeated number pattern up to `n`

function generateNumberPattern(n) {

  // Array to store the final pattern
  let result = [];

  // Outer loop: iterate from 1 to n
  for (let i = 1; i <= n; i++) {

    // Inner loop: repeat numbers from 1 to current i
    for (let j = 1; j <= i; j++) {

      // Add current number to the result array
      result.push(j);
    }
  }

  // Return the completed pattern
  return result;
}

generateNumberPattern(4); // [1, 1,2, 1,2,3, 1,2,3,4]



// Calculates the sum of all prime divisors of a given number
function sumPrimeDivisors(num) {

  // Variable to store the sum of prime divisors
  let sum = 0;

  // Loop through all numbers from 2 up to the given number
  for (let i = 2; i <= num; i++) {
    console.log(i); // Debug: current number being checked

    // Assume current number is prime
    let isPrime = true;

    // Check if i is prime by testing divisibility up to sqrt(i)
    for (let j = 2; j * j <= i; j++) {
      console.log(j); // Debug: divisor being tested

      if (i % j === 0) {
        // Not a prime number
        isPrime = false;
        break; // Exit inner loop early
      }
    }

    // If i is prime AND divides the original number evenly
    if (isPrime && num % i === 0) {
      sum += i; // Add to sum of prime divisors
    }
  }

  // Return the total sum of prime divisors
  return sum;
}

// Example usage
sumPrimeDivisors(6); // 5 (2 + 3)



// Finds the second largest unique number in an array
function findSecondLargest(numbers) {

  // If array has less than 2 elements, no second largest exists
  if (numbers.length < 2) return null;

  // Variables to store the largest and second largest values
  let largest = -Infinity;
  let second = -Infinity;

  console.log(second, largest); // Debug: initial values

  // Loop through each number in the array
  for (let n of numbers) {
    console.log(n); // Debug: current number being checked

    // If current number is greater than largest
    if (n > largest) {
      second = largest;  // Update second largest
      largest = n;       // Update largest
    } 
    // If current number is between largest and second largest
    else if (n > second && n !== largest) {
      second = n;
    }
  }

  // If no valid second largest found, return null
  return second === -Infinity ? null : second;
}

// Example usage
findSecondLargest([10, 20, 4, 45, 99]); // 45



// Finds the longest substring without repeating characters
function findLongestUniqueSubstring(str) {

  // Set to store unique characters in current window
  let charSet = new Set();

  // Left pointer of sliding window
  let left = 0;

  // Variable to store maximum length found
  let maxLen = 0;

  // Variable to store starting index of longest substring
  let start = 0;

  // Move right pointer across the string
  for (let right = 0; right < str.length; right++) {

    console.log(str[right]); // Debug: current character

    // If character already exists in set, shrink window from left
    while (charSet.has(str[right])) {
      charSet.delete(str[left]);
      left++;
    }

    // Add current character to set
    charSet.add(str[right]);

    // Update max length if current window is larger
    if (right - left + 1 > maxLen) {
      maxLen = right - left + 1;
      start = left;
    }
  }

  // Return longest substring without repeating characters
  return str.substring(start, start + maxLen);
}

findLongestUniqueSubstring('abcabcbb'); // "abc"




// Finds the sum of numbers at even indexes in an array
function sumEvenIndexNumbers(numbers) {

  // Variable to store total sum
  let totalSum = 0;

  // Loop through the array
  for (let index = 0; index < numbers.length; index++) {

    console.log(index % 2 === 0); // Debug: is index even?

    // Check if index is even
    if (index % 2 === 0) {

      console.log(index);        // Debug: current index
      console.log(numbers[index]); // Debug: value at index

      // Add value at even index to total
      totalSum += numbers[index];
    }
  }


  return totalSum;
}

sumEvenIndexNumbers([2, 4, 6, 8, 10]); // 18  (2 + 6 + 10)
sumEvenIndexNumbers([1, 3, 5, 7]);     // 6   (1 + 5)



// Finds all prime numbers between two given numbers (inclusive)
function prin(num) {

  // Destructure the input array into start and end values
  let [n1, n2] = num;

  console.log("Start:", n1); // Debug: starting number
  console.log("End:", n2);   // Debug: ending number

  // If range is invalid, return empty array
  if (n2 < 2 || n1 > n2) {
    console.log("Invalid range");
    return [];
  }

  // Create a sieve array and assume all numbers are prime (true)
  let sieve = new Array(n2 + 1).fill(true);

  // 0 and 1 are not prime numbers
  sieve[0] = false;
  sieve[1] = false;

  // Use Sieve of Eratosthenes algorithm
  for (let i = 2; i * i <= n2; i++) {

    console.log("Checking number:", i); // Debug

    // If number is still marked as prime
    if (sieve[i]) {

      console.log(i, "is prime. Marking multiples...");

      // Mark all multiples of i as not prime
      for (let j = i * i; j <= n2; j += i) {
        sieve[j] = false;
        console.log("Marking as not prime:", j); // Debug
      }
    }
  }

  // Array to store result primes
  let res = [];

  // Collect prime numbers within the given range
  for (let i = Math.max(2, n1); i <= n2; i++) {

    console.log("Testing:", i); // Debug

    if (sieve[i]) {
      console.log("Prime found:", i); // Debug
      res.push(i);
    }
  }

  return res;
}

console.log(prin([10, 30])); // [11, 13, 17, 19, 23, 29]
console.log(prin([1, 10]));  // [2, 3, 5, 7]


function modPow(base, exp, mod) {   
  let result = 1;                    // commit: "feat: initialize result as 1 (multiplicative identity)"
  base = base % mod;                 // commit: "fix: apply base % mod to handle large base values"
 
  // Process each bit of exp from LSB to MSB
  while (exp > 0) {                  // commit: "feat: add binary exponentiation loop"
 
    // If current bit of exp is 1, multiply result by base
    if (exp % 2 === 1) {            // check odd bit to decide multiply"
      result = (result * base) % mod;
    }
 
    base = (base * base) % mod;      // square the base at each step"
    exp = Math.floor(exp / 2);       // shift exp right (divide by 2)"
  }
 
  return result;                
}
 
// Example usage
console.log(modPow(2, 10, 1000));   // add basic example → 24 (2^10=1024, 1024%1000=24)"
console.log(modPow(3, 200, 13));    // add large exponent example → 9"
console.log(modPow(10, 0, 7));    //  add zero exponent edge case → 1" 



// Counts numbers from 1 to N that are coprime with both A and B
function coprimeCount(N, A, B) {     
  let count = 0;                     

  // Check every number from 1 to N
  for (let i = 1; i <= N; i++) {     
 
    // A number is coprime with both A and B if gcd with each equals 1
    if (gcd(i, A) === 1 && gcd(i, B) === 1) { 
      count++;                       
    }
  }
  return count;                      
  // Computes Greatest Common Divisor using Euclidean algorithm
  function gcd(a, b) {               
    while (b) {
      [a, b] = [b, a % b];           // commit: "feat: swap using destructuring for clean Euclidean step"
    }
    return a;                        // commit: "feat: return gcd when remainder becomes 0"
  }
}

console.log(coprimeCount(10, 2, 3)); // basic example → 3  (numbers: 1, 5, 7)"
console.log(coprimeCount(12, 3, 5)); // add second example → 4 (numbers: 1, 7, 11, 13 — wait, ≤12 → 1,7,11)"
console.log(coprimeCount(1, 1, 1));  // add edge case N=1 → 1 (only 1, gcd(1,x)=1 always)"


// Finds the only non-duplicate number in an array using XOR
function findUnique(arr) {          

  let res = 0;                      

  // XOR all elements — duplicates cancel out (a ^ a = 0), unique remains
  for (let i = 0; i < arr.length; i++) {   
    res = res ^ arr[i];              // commit: "feat: apply XOR to accumulate result"
  }

  return res;                        
}
console.log(findUnique([1, 2, 3, 2, 1]));       // basic example → 3"
console.log(findUnique([4, 1, 2, 1, 2]));       // unique at start → 4"
console.log(findUnique([7]));                    // single element edge case → 7"



// Calculates the area of a polygon using the Shoelace Formula
function calculatePolygonArea(arr) {      

  let crossProductSum = 0;               

  // Iterate through vertices, pairing each with the next (wraps around)
  for (let i = 0; i < arr.length; i++) {   
    const current = arr[i];                 
    const next = arr[(i + 1) % arr.length];// extract next vertex with wrap-around using modulo"

    // Shoelace cross product: (x1*y2) - (y1*x2)
    crossProductSum += (current[0] * next[1]) - (current[1] * next[0]);
                                           
  }

  return Math.abs(crossProductSum) / 2;   
}

// Example usage
console.log(calculatePolygonArea([[0,0],[2,0],[2,2],[0,2]])); // 2x2 square → 4"
console.log(calculatePolygonArea([[0,0],[4,0],[4,3],[0,3]])); // 4x3 rectangle → 12"
console.log(calculatePolygonArea([[0,0],[1,0],[0,1]]));       // right triangle → 0.5"



// Sort points left→right, bottom→top for monotone chain
function kk(points) {

  ///first sort by x, then by y if x's are equal (lexicographic order)
  points.sort((a, b) => {
    a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]
  })

  // Edge case: 0 or 1 point → already a "hull"
  if (points.length <= 1) return points

  // Cross product of vectors OA and OB
  // > 0 → left turn, = 0 → collinear, < 0 → right turn
  const cross = (o, a, b) => {
    return (a[0] - o[0]) * (b[1] - o[1]) -
           (a[1] - o[1]) * (b[0] - o[0])
  }

  // Build lower hull: left to right
  // Pop if last 3 points don't make a left turn (counter-clockwise)
  const lower = []
  for (let p of points) {
    // console.log(p)
    while (lower.length >= 2 &&
           cross(lower[lower.length - 2],
                 lower[lower.length - 1],
                 p) <= 0) {
      lower.pop()
    }
    lower.push(p)
  }

  // console.log(lower)

  /// upper hull: right to left, same logic mirrored
  const upper = []
  for (let i = points.length - 1; i >= 0; i--) {
    let p = points[i]
    while (upper.length >= 2 &&
           cross(upper[upper.length - 2],
                 upper[upper.length - 1],
                 p) <= 0) {
      upper.pop()
    }
    upper.push(p)
  }

  /// pop last of each — they're duplicates of the other hull's endpoints
  lower.pop()
  upper.pop()
  console.log(upper)
  console.log(lower)

  // Concat lower + upper → full clockwise hull polygon
  return lower.concat(upper)
}

kk([[0,0], [1,1], [2,2], [3,3]]) ///[[0,0], [3,3]]


// Builds the Convex Hull of a point set using the Monotone Chain Algorithm
function convexHull(arr) {                 

  // Sort points by x, then by y if x is equal
  arr.sort((a, b) => {                      
    return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
  });

  // Cross product: negative/zero means right turn or collinear (remove point)
  let cross = (a, b, c) => {               // define cross product helper to detect turn direction"
    return (b[0] - a[0]) * (c[1] - a[1]) -
           (b[1] - a[1]) * (c[0] - a[0]);
  };

  // Build upper hull (left to right)
  let upper = [];                           

  for (let a of arr) {                      // add loop to build upper hull left to right"
    while (upper.length >= 2 &&
      cross(upper[upper.length - 2], upper[upper.length - 1], a) <= 0) {
      upper.pop();                          
    }
    upper.push(a);                        
  }

  // Build lower hull (right to left)
  let lower = [];                           

  for (let i = arr.length - 1; i > 0; i--) {  // add loop to build lower hull right to left"
    let a = arr[i];
    while (lower.length >= 2 &&
      cross(lower[lower.length - 2], lower[lower.length - 1], a) <= 0) {
      lower.pop();                        
    }
    lower.push(a);                         
  }

  upper.pop();                              //  remove last point of upper (shared with lower)"
  lower.pop();                              //  remove last point of lower (shared with upper)"

  return upper.concat(lower);              // merge upper and lower hull into final convex hull"
}
console.log(convexHull([[0,0],[2,2],[1,1],[3,3]]));      // collinear points → hull edge only"
console.log(convexHull([[0,0],[4,0],[4,4],[0,4],[2,2]]));// square with interior point → 4 hull points"
console.log(convexHull([[0,0],[1,0],[0,1],[1,1]]));      // basic square → all 4 corner points"



// Finds all prime numbers in range [a, b] using the Segmented Sieve of Eratosthenes
function segmentedSieve(a, b) {           

  // Step 1: Find all small primes up to √b using basic sieve
  let limit = Math.floor(Math.sqrt(b));     // compute square root of b as sieve limit"

  let isPrime = new Array(limit + 1).fill(true); // initialize isPrime array for small sieve"
  isPrime[0] = isPrime[1] = false;          // mark 0 and 1 as non-prime"

  // Sieve of Eratosthenes up to √b
  for (let i = 2; i <= limit; i++) {       
    if (isPrime[i]) {
      for (let j = i * i; j <= limit; j += i) { // mark multiples of each prime as false"
        isPrime[j] = false;
      }
    }
  }

  // Collect all small primes into array
  let smallPrimes = [];                    
  for (let i = 2; i <= limit; i++) {       
    if (isPrime[i]) smallPrimes.push(i);    //push confirmed primes into smallPrimes"
  }

  // Step 2: Use small primes to sieve the segment [a, b]
  let segment = new Array(b - a + 1).fill(true);

  for (let p of smallPrimes) {           

    // Find the first multiple of p that falls within [a, b]
    let start = Math.ceil(a / p) * p;       // compute first multiple of p inside segment"
    if (start === p) start += p;            // skip p itself so it stays marked as prime"

    for (let j = start; j <= b; j += p) {  // mark all multiples of p as composite in segment"
      segment[j - a] = false;              // offset j by a to map to segment index"
    }
  }


  let res = [];                            

  for (let i = 0; i < segment.length; i++) { 
    if (a <= 1) segment[1 - a] = false;    // ensure 1 is never included as a prime"
    if (segment[i]) res.push(a + i);       // push prime by reversing segment offset back to real value"
  }

  return res;                   
}


console.log(segmentedSieve(1, 30));        // range 1–30 → [2,3,5,7,11,13,17,19,23,29]"
console.log(segmentedSieve(10, 50));       // mid-range → primes between 10 and 50"
console.log(segmentedSieve(1, 2));         // minimal range → [2]"
console.log(segmentedSieve(1, 1));         // edge case no primes → []"


// Extended GCD - Iterative (Euclidean Algorithm)
// Returns gcd(a, b) and coefficients x, y such that: ax + by = gcd(a, b)
//
// Example:
// Input: a = 88, b = 55
// Output: gcd = 11, x = 2, y = -3
// Verification: 88*(2) + 55*(-3) = 176 - 165 = 11

function extendedGCD(a, b) {
  let [r0, r1] = [a, b]; // remainders
  let [x0, x1] = [1, 0]; // coefficients for 'a'
  let [y0, y1] = [0, 1]; // coefficients for 'b'

  while (r1 !== 0) {
    const q = Math.floor(r0 / r1);

    [r0, r1] = [r1, r0 - q * r1];
    [x0, x1] = [x1, x0 - q * x1];
    [y0, y1] = [y1, y0 - q * y1];
  }

  return { gcd: r0, x: x0, y: y0 };
}

// Example usage
const { gcd, x, y } = extendedGCD(88, 55);
console.log({ gcd, x, y });


// Multiplies two 2x2 matrices using standard dot product formula
function matMul(a, b) {                    
  return [
    [
      a[0][0] * b[0][0] + a[0][1] * b[1][0],  // compute row0-col0 dot product"
      a[0][0] * b[0][1] + a[0][1] * b[1][1],  // compute row0-col1 dot product"
    ],
    [
      a[1][0] * b[0][0] + a[1][1] * b[1][0],  // compute row1-col0 dot product"
      a[1][0] * b[0][1] + a[1][1] * b[1][1],  // compute row1-col1 dot product"
    ],
  ];
}

// Example usage
console.log(matMul([[1,1],[1,0]], [[1,1],[1,0]])); // square Fibonacci matrix × itself"


// Naive Matrix Exponentiation — O(n) 

// Raises matrix A to power n by repeated multiplication — O(n)
function matPowerNaive(A, n) {             

  let result = [[1, 0], [0, 1]];           // initialize result as 2x2 identity matrix"

  for (let i = 0; i < n; i++) {            // add loop to multiply A into result n times"
    result = matMul(result, A);            // accumulate matrix power via repeated matMul"
  }

  return result;                           
}


// Fast Matrix Exponentiation — O(log n) 

// Raises matrix A to power n using binary exponentiation — O(log n)
function matPowerFast(A, n) {             

  let result = [[1, 0], [0, 1]];  /// initialize result as 2x2 identity matrix"

  while (n > 0) {                 /// add loop to process each bit of n"

    if (n % 2 === 1) {            /// if current bit is set, multiply result by A"
      result = matMul(result, A); //  absorb current A into result for odd exponent"
    }

    A = matMul(A, A);                      // commit: "feat: square A to advance to next binary power"
    n = Math.floor(n / 2);                 // commit: "feat: right-shift n to process next bit"
  }

  return result;                         
}

// Example usage
console.log(matPowerNaive([[1,1],[1,0]], 5)); //Fibonacci matrix^5 naive → F(6)=8 at [0][0]"
console.log(matPowerFast([[1,1],[1,0]], 5));  //Fibonacci matrix^5 fast  → F(6)=8 at [0][0]"
console.log(matPowerFast([[1,1],[1,0]], 10)); //matrix^10 → F(11)=89 at [0][0]"
console.log(matPowerFast([[1,0],[0,1]], 99)); //identity matrix^any → stays identity"


// Computes (a^b) % p efficiently using Binary Exponentiation — O(log b)
function modPow(a, b, p) {                

  a = a % p;                               // commit: "feat: reduce base a modulo p to keep numbers small"

  let res = 1;                            
  while (b > 0) {                         

    if (b % 2 === 1) {                     // if current bit is set, multiply res by current a"
      res = (res * a) % p;                 // accumulate result with modulo to prevent overflow"
    }

    a = (a * a) % p;                       // square a modulo p to advance to next binary power"
    b = Math.floor(b / 2);                 // right-shift b to move to next bit"
  }

  return res;                              // return (a^b) % p as final modular result"
}


// Modular Inverse via Fermat's Little Theorem 

// Finds modular inverse of a under prime p using Fermat: a^(p-2) ≡ a^(-1) (mod p)
// Only valid when p is prime and a % p !== 0
function modInverse(a, p) {                
  return modPow(a, p - 2, p);             // return a^(p-2) mod p as modular inverse of a"
}

console.log(modInverse(3, 5));   /// inverse of 3 mod 5 → 2  (3×2=6 ≡ 1 mod 5)"
console.log(modInverse(10, 13)); /// inverse of 10 mod 13 → 4  (10×4=40 ≡ 1 mod 13)"
console.log(modInverse(2, 7));   /// inverse of 2 mod 7 → 4  (2×4=8 ≡ 1 mod 7)"
console.log(modPow(2, 10, 1000));/// 2^10 mod 1000 → 24"
console.log(modPow(3, 0, 7));    /// edge case zero exponent → 1"



// Counts total number of divisors of a number using Prime Factorization — O(√n)
function countDivisors(num) {             
  let temp = num;                           // copy num into temp to safely mutate during factorization"
  let count = 1;                            // initialize count as 1 (multiplicative identity for divisor formula)"


  for (let i = 2; i * i <= temp; i++) {    // add loop to trial divide up to √temp"

    let ex = 0;                             // initialize exponent counter for current prime factor"

    while (temp % i === 0) {               // add inner loop to fully extract prime factor i"
      ex++;                                 //  increment exponent for each time i divides temp"
      temp = Math.floor(temp / i);         // divide out factor i to reduce temp"
    }

    if (ex > 0) {                          // if i was a factor, apply divisor formula (ex+1)"
      count *= (ex + 1);                   // multiply count by (exponent+1) per divisor formula"
    }
  }

  // If temp > 1, a remaining prime factor exists with exponent 1
  if (temp > 1) {                     
    count *= 2;                            // multiply by 2 for the remaining prime (exponent 1 → 1+1)"
  }

  return count;                            // return total divisor count of original num"
}


// Find Number with Most Divisors in Range [1, n] 
function mostDivisors(n) {               

  let maxDiv = 0;                           
  let bestNum = 1;                          

  for (let i = 1; i <= n; i++) {          
    let d = countDivisors(i);              //  compute divisor count for current number i"

    maxDiv = d;                          // update maxDiv with new highest divisor count"
    if (d > maxDiv) {                      // check if current number has more divisors than best so far"
      bestNum = i;                         // update bestNum to current number with most divisors"
    }
  }

  return `${bestNum} has ${maxDiv} divisors`; 
}

console.log(mostDivisors(10));   //// range 1–10 → 6 has 4 divisors"
console.log(mostDivisors(20));   //// range 1–20 → 12 has 6 divisors"
console.log(mostDivisors(100));  //// range 1–100 → 60 has 12 divisors"
console.log(countDivisors(12));  //// divisors of 12 → 6 (1,2,3,4,6,12)"
console.log(countDivisors(1));   //// edge case 1 → 1 divisor only"


//Modular Arithmetic Utilities 

const MOD = 1_000_000_007n;               


// Computes (a^b) % MOD using Binary Exponentiation — O(log b)
function modPow(a, b) {          

  let res = 1n;                   // initialize res as 1n (BigInt multiplicative identity)"
  let base = BigInt(a);           // cast a to BigInt to ensure safe modular arithmetic"

  while (b > 0n) {                // add loop to process each bit of exponent b"

    if (b % 2n === 1n) {          // if current bit is set, multiply res by base"
      res = (res * base) % MOD;   // accumulate res with modulo to prevent overflow"
    }

    base = (base * base) % MOD;   // square base modulo MOD to advance to next binary power"
    b = b / 2n;                   // right-shift b using BigInt division (no Math.floor needed)"
  }

  return res;                             
}


// Computes modular inverse of a under MOD via Fermat's little theorem: a^(MOD-2)
function modInverse(a) {                   
  return modPow(a, MOD - 2n); // return a^(MOD-2) mod MOD as modular inverse of a"
}




// Computes nth Catalan number mod 10^9+7 using formula: C(2n,n) / (n+1)
function catalan(n) { 

  const max = 2 * n;  // compute max as 2n for factorial table upper bound"

  // Precompute factorials up to 2n
  let fact = new Array(max + 1).fill(1n);  // initialize factorial table of BigInt 1n up to 2n"

  for (let i = 1; i <= max; i++) {        
    fact[i] = (fact[i - 1] * BigInt(i)) % MOD; // compute fact[i] = fact[i-1] * i mod MOD"
  }

  // Apply Catalan formula C(2n, n) / (n+1) = (2n)! / (n! * (n+1)!)
  let numerator = fact[2 * n];  // extract (2n)! as numerator of binomial"

  let inv = (modInverse(fact[n]) *
             modInverse(fact[n + 1])) % MOD; // compute combined inverse of n! and (n+1)! for denominator"

  let res = (numerator * inv) % MOD;       //multiply numerator by inverse denominator to get Catalan result"

  return res.toString();                   // return result as string to safely display large BigInt"
}


// Example usage
console.log(catalan(3));       /// C(3)   → 5"
console.log(catalan(5));        ///C(5)   → 42"
console.log(catalan(10));       ///C(10)  → 16796"
console.log(catalan(100));      ///C(100) → 558488487"
console.log(catalan(100000));   ///C(10^5) stress test → large mod result"


// Finds the missing value in an arithmetic sequence row of a 2D matrix — O(n*m)
function findMissingValue(matrix) {       

  for (let i = 0; i < matrix.length; i++) {

    const row = matrix[i];                 // extract current row for cleaner access"

    const nullIndex = row.indexOf(null);   // find index of missing value (null) in current row"

    if (nullIndex !== -1) {   // check if current row contains a missing value"

      // Find any known (non-null) value to derive the common ratio
      const knownIndex = row.findIndex(v => v !== null);// locate first known value index to compute sequence ratio"

      const ratio = row[knownIndex] / (knownIndex + 1); // compute ratio by dividing known value by its 1-based position"

      return ratio * (nullIndex + 1); // multiply ratio by missing value's 1-based position to recover it"
    }
  }

  return null;                 
}


// Example usage
console.log(findMissingValue([  // null at row1-col1 → 6 (sequence 3,6,9)"
  [2,    4,  6],
  [3, null,  9],
  [5,   10, 15],
]));

console.log(findMissingValue([  // null at row0-col0 → 1 (sequence 1,2,3)"
  [null, 2,  3],
  [4,    8, 12],
  [5,   10, 15],
]));

console.log(findMissingValue([  // null at last col → 15 (sequence 5,10,15)"
  [2,  4,  6],
  [3,  6,  9],
  [5, 10, null],
]));

console.log(findMissingValue([ // no null anywhere → returns null"
  [1, 2, 3],
  [4, 8, 12],
]));