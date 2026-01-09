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

// Reverse String Function
function reverse(str) {
  let result = ''
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  return result
}

// Example usage
console.log('HCF of 48 and 18:', hcf(48, 18)) // 6
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