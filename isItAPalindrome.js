// Is it a palindrome?

// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  // your code here
  // function
  // checks 'if' string is case insensative
  // input string
  // output boolen
  
  // toLowerCase
  // reverse it using split, reverse and join
  
  // lowercase = reverse
  // console.log('some words e.g. Bob');
  
  let lowerCaseStr = x.toLowerCase();
  
  let reversed = lowerCaseStr.split('').reverse().join('');
  
  return lowerCaseStr === reversed;
}

console.log('Bob');
