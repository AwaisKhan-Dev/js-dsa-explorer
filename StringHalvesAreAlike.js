/* 
Determine if String Halves Are Alike
You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.

*/

var halvesAreAlike = function(s) {
    const vowels = "aeiouAEIOU";
 const mid = s.length / 2;
 let firstHalfVowelCount = 0;
 let secondHalfVowelCount = 0;

 for (let i = 0; i < mid; i++) {
   if (vowels.includes(s[i])) {
     firstHalfVowelCount++;
   }
   if (vowels.includes(s[i + mid])) {
     secondHalfVowelCount++;
   }
 }

 return firstHalfVowelCount === secondHalfVowelCount;
};

s = "book";
var result = halvesAreAlike(s);
if(result == true){
    console.log("String Halves are A like");
}
else{
    console.log("String Halves are not A like");
}