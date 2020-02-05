/**
 * CLASSES
 */

class Student {
 fullName: string;
 // Shorthand assignment = Using `public` in constructor creates automatically properties with that name.ts
 constructor(public firstName, public middleInitial, public lastName) {
   this.fullName = firstName + " " + middleInitial + " " + lastName;
 }
}

interface Person2 {
 firstName: string;
 middleInitial: string;
 lastName: string;
}

function greeter4(person: Person2) {
 return "Hello, " + person.firstName + " " + person.middleInitial + " " +  person.lastName;
}

var user4 = new Student("Stella", "M.", "Getz");
document.body.innerHTML = greeter4(user4);
