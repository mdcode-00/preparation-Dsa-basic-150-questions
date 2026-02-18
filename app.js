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