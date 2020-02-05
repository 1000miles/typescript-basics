/**
 * COMPILING
 */

// Example: Declare a string as param and pass in the string
// Compile file with `tsc greeter.ts` => greeter.js
function greeter(person: string) {
  return "Hello " + person;
}

var user = "Jane User";
document.body.innerHTML = greeter(user);
