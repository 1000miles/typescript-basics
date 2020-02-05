/**
 * TYPE ANNOTATIONS
 */
// Example 2: Declare a string as param to pass in but
// pass in an array of numbers => Error!
function greeter2(person) {
    return "Hi " + person;
}
var user2 = [0, 1, 2];
document.body.innerHTML = greeter2(user2);
