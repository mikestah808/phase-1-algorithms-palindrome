function isPalindrome(string) {
  // Write your algorithm here
  // write a function isPalindrome that will receive one argument, a string
  // your function should return true if the string is a palindrome (that is, if it reads the same forwards and backwards, like "mom" or "racecar")
  // returns false if it is not a palindrome 
  // only needs to deal with lowercase strings that are all letters

  // let j = string.length -1;
  // for(let i = 0; i < j/2; i++)
  // {
  //   let x = string[i];
  //   let y = string[j-i];
  //   if(x != y)
  //   {
  //     return false;
  //   }
    
  // }
  // return true;

  const reversed = string.split("").reverse().join("");

  if(reversed === string){
    return true;
  } else {
    return false;
  }
}

isPalindrome("racecar");

// function yesPalindrome(string){
//   let answer = isPalindrome(string);

//   if(answer == true){
//     console.log("passed string is palindrome");
//   } else {
//     console.log("passed string is not a palindrome")
//   }
// }

// let test = "racecar";
// yesPalindrome(test);

/* 
  Add your pseudocode here
  in js check if string is palindrome 
  initialize and create a variable 
  this variable should have a value of the strings letters reversed 
  to do this, we will split the string into substrings using the split method 
  from there, you will need reorganize the letters so it is reversed using the reverse method 
  after each letter is reversed, you must make the substring back into a string using the join method 
  check if all forward and backward character matches, return true 
  use an if... else statement 
  if all forward and backward characters does not match, return false 
  call the function and pass is in a "string" as an argument to see the outcome

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
