import { sayHello } from './greet';
// console.log(sayHello('Johnny!'));

// function helloAgain(compiler: string) {
//   console.log(`Hello from ${compiler}`);
// }

// helloAgain('TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = sayHello(name);
}

showHello('greeting', 'TypeScript');

// => Hello from Typescript
