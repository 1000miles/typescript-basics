/**
 * CLASSES
 */
var Student = /** @class */ (function () {
    // Shorthand assignment = Using `public` in constructor creates automatically properties with that name.ts
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter4(person) {
    return "Hello, " + person.firstName + " " + person.middleInitial + " " + person.lastName;
}
var user4 = new Student("Stella", "M.", "Getz");
document.body.innerHTML = greeter4(user4);
