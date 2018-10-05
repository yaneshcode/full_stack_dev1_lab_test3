// ## LAB TEST 3
// Yanesh

/*
1. Write a JavaScript function to check whether an `input` is an array or not. 
Test Data :
console.log(is_array('w3resource')); 
console.log(is_array([1, 2, 4, 0]));
false
true
*/
function is_array(input) {
  return input.constructor === Array;
}

/*
2. Write a JavaScript function to clone an array. 
Test Data :
console.log(array_Clone([1, 2, 4, 0])); 
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0] 
[1, 2, [4, 0]]
*/
function array_Clone(input) {
  // check if input is an array
  if (input.constructor === Array) {
    return input.slice(0);
  } else {
    return false;
  }
}

/*
3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. 
Test Data : 
console.log(first([7, 9, 0, -2])); 
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output : 
7
[] 
[7, 9, 0] 
[7, 9, 0, -2] 
[] 
*/
function first(input, n) {
  n = n || 1; // if n is not defined, default to 1 element
  return input.slice(0,n);
}

/*
4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. 
Test Data : 
console.log(last([7, 9, 0, -2])); 
console.log(last([7, 9, 0, -2],3)); 
console.log(last([7, 9, 0, -2],6));
Expected Output : 
-2 
[9, 0, -2] 
[7, 9, 0, -2]
*/
function last(input, n) {
  n = n || 1; // if n is not defined, default to 1 element
  return input.slice(n * -1);
}

/*
5. Write a simple JavaScript program to join all elements of the following array into a string. 
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output : 
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"
*/

// since the question did not specify parameters that the function takes:
// my parameters are an array of strings, and a delimiter character
// eg: 
// myColor = ["Red", "Green", "White", "Black"]
// joinElementsToString(myColor, "+");
// results in the 3rd output in the example above
function joinElementsToString(a, delimiter) {
  return a.join(delimiter);
}

function joinElementsToString2() {
  myColor = ["Red", "Green", "White", "Black"];
  console.log(myColor.toString());
}

/*
6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8. 
*/
function evenDashes(n) {
  // check if input is a number
  if (isNaN(n)) { return; }

  var strNum = n.toString();
  var result = "";
  
  for (var i = 0; i < strNum.length; i ++) {
    result += strNum[i];
    
    // if current digit is even and next digit is even,
    // add a dash 
    if (strNum[i] % 2 == 0 && strNum[i+1] % 2 == 0) {
      result += "-";
    }
  }
  return result;
}

/*
7. Write a JavaScript program to sort the items of an array. 
Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/
function sortArray(arr) {
  return arr.sort(function (x, y) { return x - y; });
}

/*
8. Write a JavaScript program to find the most frequent item of an array. 
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times ) 
*/
function mostFrequent(a) {
  var map = {}; // use a dictionary to keep track of element frequencies
  var mostFrequent = a[0];  //keep track of the most frequent item
  for (var i = 0; i < a.length; i++) {
    if (map[a[i]]) {
      // if element exists, increase frequency counter
      map[a[i]] += 1;
      
      // check if this element is now the most frequent
      if (map[a[i]] > map[mostFrequent]) {
        mostFrequent = a[i];
      }
    } else {
      // if new element, add to dictionary
      map[a[i]] = 1;
    }
  }

  return mostFrequent + " ( " + map[mostFrequent] + " times )";
}

