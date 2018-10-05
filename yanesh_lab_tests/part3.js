// Part 3
// yanesh

/*
1. Write a JavaScript function to check whether an `input` is a string or not. 
Test Data :
console.log(is_string('w3resource')); 
true
console.log(is_string([1, 2, 4, 0]));
false
*/
function is_string(input) {
  return typeof(input) === "string"; 
}

/*
2. Write a JavaScript function to check whether a string is blank or not. 
Test Data :
console.log(is_Blank('')); 
console.log(is_Blank('abc'));
true 
false
*/
function is_Blank(input) {
  // check if string
  if (typeof(input) === "string") {
    return input.length == 0 ? true : false;
  } else {
    return false;
  }
}

/*
3. Write a JavaScript function to split a string and convert it into an array of words. 
Test Data :
console.log(string_to_array("Robin Singh"));
["Robin", "Singh"]
*/
function string_to_array(input) {
  // check if string
  if (typeof(input) === "string") {
    return input.split(" ");
  } else {
    return false;
  }
}

/*
4. Write a JavaScript function to extract a specified number of characters from a string. 
Test Data :
console.log(truncate_string("Robin Singh",4));
"Robi"
*/
function truncate_string(input, charNum) {
  // check if string
  if (typeof(input) === "string") {
    return input.slice(0, charNum);
  } else {
    return false;
  }
}

/*
5. Write a JavaScript function to convert a string in abbreviated form. 
Test Data :
console.log(abbrev_name("Robin Singh"));
"Robin S."
*/
function abbrev_name(input) {
  // check if string
  if (typeof(input) === "string") {
    let nameArr = input.split(" ");
    
    // take the last name's first character and add a period
    nameArr[nameArr.length - 1] = nameArr[nameArr.length - 1].slice(0, 1) + ".";
    
    return nameArr.join(" ");
    
  } else {
    return false;
  }
}

/*
6. Write a JavaScript function to hide email addresses to protect from unauthorized user. 
Test Data :
console.log(protect_email("robin_singh@example.com"));
"robin...@example.com"
*/
function protect_email(input) {
  // check if string and is valid email
  if (typeof(input) === "string" && /(.+)@(.+){2,}\.(.+){2,}/.test(input)) {
    
    // split the email to get the username
    let email = input.split("@");
    
    // replace all chars after index 5 in the username
    // if username is shorter than 5, only show first char
    if (email[0].length <= 5) {
      email[0] = email[0].slice(0, 1) + "...";
    }else {
      email[0] = email[0].slice(0, 5) + "...";
    }
    
    return email.join("@");
    
  } else {
    return false;
  }
}

/*
7. Write a JavaScript function to capitalize the first letter of each word in a string. 
Test Data :
console.log(capitalize_Words('js string exercises'));
"Js String Exercises"
*/
function capitalize_Words(input) {
  // check if string
  if (typeof(input) === "string") {
    let strArray = input.split(" ");
    for(var i = 0; i < strArray.length; i++) {
      strArray[i] = strArray[i].substr(0, 1).toUpperCase() + strArray[i].substr(1);
    }
    return strArray.join(" ");
  } else {
    return false;
  }
}

