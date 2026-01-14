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
