// part2
// yanesh

/*
1. Write a JavaScript function to convert a number from one base to another. 
Note : Both bases must be between 2 and 36.
Test Data :
console.log(base_convert('E164',16,8)); 
console.log(base_convert(1000,2,8));
"160544"
"10"
*/
function base_convert(val, fromBase, toBase) {
  // get value in initial base
  let decVal = parseInt(val, fromBase);
  // return value in requested base
  return decVal.toString(toBase);
}

/*
2. Write a JavaScript function to convert a binary number to a decimal number. 
Test Data :
console.log(bin_to_dec('110011')); 
console.log(bin_to_dec('100'));
51 
4
*/
function bin_to_dec(val) {
  return parseInt(val, 2);
}

/*
3. Write a JavaScript function to convert a decimal number to binary, hexadecimal or octal number. 
Test Data :
console.log(dec_to_bho(120,'B')); 
console.log(dec_to_bho(120,'H')); 
console.log(dec_to_bho(120,'O'));
"1111000" 
"78" 
"170"
*/
function dec_to_bho(val, bho) {
  switch(bho) {
    case 'B': // binary, base 2
      return val.toString(2);
    case 'H':  // hex, base 16
      return val.toString(16);
    case 'O':  // oct, base 8
      return val.toString(8);
  }
}

/*
4. Write a JavaScript function to generate a random integer. 
Test Data :
console.log(rand(20,1)); 
console.log(rand(1,10)); 
console.log(rand(6)); 
console.log(rand()); 
15 
5 
1 
0
*/
function rand(a, b) {
  // default to 0 if min/max not specified
  a = a || 0;
  b = b || 0;
  return Math.floor(Math.random() * (b - a) + a);
}

/*
5. Write a JavaScript function to format a number up to specified decimal places. 
Test Data :
console.log(decimals(2.100212, 2));
console.log(decimals(2.100212, 3));
console.log(decimals(2100, 2));
"2.10" 
"2.100" 
"2100.00"
*/
function decimals(val, decPlaces) {
  return val.toFixed(decPlaces);
}

/*
6. Write a JavaScript function to find the highest value in an array. 
Test Data :
console.log(max([12,34,56,1]));
console.log(max([-12,-34,0,-56,-1]));
56 
0
*/
function max(a) {
  // sort array in decending order
  a.sort(function (x, y) { return y - x; });
  return a[0];
}

/*
7. Write a JavaScript function to find the lowest value in an array. 
Test Data :
console.log(min([12,34,56,1])); 
console.log(min([-12,-34,0,-56,-1]));
1 
-56
*/
function min(a) {
  // sort array in asc order
  a.sort(function (x, y) { return x - y; });
  return a[0]; 
}

/*
8. Write a JavaScript function to find the GCD (greatest common divisor) of more than 2 integers. 
Test Data :
console.log(gcd_more_than_two_numbers([3,15,27])); 
console.log(gcd_more_than_two_numbers([5,10,15,25]));
Output :
3 
5
*/
function gcd_more_than_two_numbers(a) {
  
  // helper function to calculate gcd
  function gcd(a, b) {
    if(b == 0) {
      return a;
    }
    return gcd(b, a%b);
  }
  
  return a.reduce(gcd);
}

/*
9. Write a JavaScript function to get the least common multiple (LCM) of more than 2 integers. 
Test Data :
console.log(lcm_more_than_two_numbers([100,90,80,7]));
console.log(lcm_more_than_two_numbers([5,10,15,25]));
Output :
25200 
150
*/
function lcm_more_than_two_numbers(a) {
   // helper function to calculate gcd
   // needed for lcm calculations
  function gcd(a, b) {
    if(b == 0) {
      return a;
    }
    return gcd(b, a%b);
  }
  // helper function to calculate lcm
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }
  
  return a.reduce(function(a, b) {
    return lcm(a, b);
  });
}
