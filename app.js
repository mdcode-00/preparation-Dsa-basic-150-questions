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
