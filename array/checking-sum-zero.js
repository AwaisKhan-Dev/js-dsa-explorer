/* 
Problem: Checking sum zero in array
*/

// Input: [-5, -4, -3, -2, 0, 2, 4, 6, 8]
// Output: [-4 , 4]

var arr = [-5, -4, -3, -2, 0, 2, 4, 6, 8];
var first,second;
var pairFound = false;

loop:
for(var i=0; i<arr.length; i++){
    for(var j=i+1; j<arr.length;j++){
        if(arr[i] + arr[j] == 0){
            first = arr[i];
            second = arr[j];
            pairFound = true;
            break loop;
        }
    }
}

if(pairFound == true){
    console.log(`Sum of ${first} and ${second} is zero`)
}
else{
    console.log(`No Pair Found in ${arr}`)
}


/*
Time complexity of this method is O(n^2) Quadratic
Lets optimize this solution as the array is sorted
*/

function checksum(arr){
left = 0;
right = arr.length-1;

while(left < right){
    sum = arr[left] + arr[right];
    if(sum == 0){
       return [arr[left],arr[right]];
    }
    else if(sum > 0){
        right--;
    }
    else{
        left++;
    }
}
}

result = checksum(arr);
console.log(result);


// Now time complexity is 0(n) Linear