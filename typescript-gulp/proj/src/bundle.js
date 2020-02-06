(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sayHello(name) {
    return `Hi from ${name}`;
}
exports.sayHello = sayHello;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greet_1 = require("./greet");
// console.log(sayHello('Johnny!'));
// function helloAgain(compiler: string) {
//   console.log(`Hello from ${compiler}`);
// }
// helloAgain('TypeScript');
function showHello(divName, name) {
    const elt = document.getElementById(divName);
    elt.innerText = greet_1.sayHello(name);
}
showHello('greeting', 'TypeScript');
// => Hello from Typescript

},{"./greet":1}]},{},[2]);
