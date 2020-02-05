import { sayHello } from './greet';
console.log(sayHello('Johnny!'));

function helloAgain(compiler: string) {
  console.log(`Hello from ${compiler}`);
}

helloAgain('TypeScript');
