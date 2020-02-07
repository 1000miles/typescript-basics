var button = document.querySelector('button');
var input1 = document.getElementById('num2')! as HTMLInputElement;
var input2 = document.getElementById('num2')! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener('click', function() {
  // Prepend '+' to convert to a number and to fix error: "Argument of type 'string' is not assignable to parameter of type 'number'.""
  console.log(add(+input1.value, +input2.value));
})
