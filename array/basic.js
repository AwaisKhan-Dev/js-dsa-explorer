/*
    Basics of Array

*/


//  Declaring a array
var numbers = [];
console.log(numbers.length);    //This will return 0 since array has size: 0


//  Declaring a array with a set of elements inside [] operator
var numbers = [1, 2, 3, 4];
console.log(numbers.length);    //This will return 4 since array has size: 4


// Creating a array by calling the array constructor:
var number = new Array();
console.log(number.length);    //This will return 0 since array has size: 0

// Creating a array by calling the array constructor with a set of elements as arguments:
var number = new Array(1, 2, 3, 4, 5);
console.log(number.length);    //This will return 5 since array has size: 5

//Creating a array by calling the array constructor with a single argument specifying the length of array:
var numbers = new Array(10);
console.log(numbers.length);    // This will return 10 since size of array is 10

// Verify that object is an array
var numbers =  3;
var arr = [1, 2];
console.log(Array.isArray(numbers));    // Return False
console.log(Array.isArray(arr));        //Returns True


// Problem: Assign 0 to 100 to a array and display array on console in following order 1,2,3....
var arr = [];
for (var i=0; i<100; i++){
    arr[i] = i + 1;
}

console.log(arr.join(','))

