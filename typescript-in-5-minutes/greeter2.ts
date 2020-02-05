/**
 * TYPE ANNOTATIONS
 */

// Example 2: Declare a string as param to pass in but
// pass in an array of numbers => Error!
function greeter2(person: string) {
  return "Hi " + person;
}

var user2 = [0, 1, 2];

document.body.innerHTML = greeter2(user2);

// greeter2.ts:13:36 - error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.

// 13 document.body.innerHTML = greeter2(user2);
//                                       ~~~~~


// Found 1 error.
