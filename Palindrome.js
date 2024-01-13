/* 
Problem Palindrome
Given an integer x, return true if x is a palindrome, and false otherwise.
*/


var isPalindrome = function(x) {
    const str = x.toString();
    return str === str.split('').reverse().join('');
};

var x = 121;
if(isPalindrome(x)){
    console.log(`The Integer ${x} is Palindrome`);
}
else{
    console.log(`The Integer ${x} is Not Palindrome`);
}