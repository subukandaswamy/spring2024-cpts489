// // function Student(name) {
// //   this.name = name;
// // }

// // Student.prototype.printDetails = function () {
// //   console.log(this.name);
// //   return 1;
// // };

// // function GradStudent(name, thesis) {
// //   Student.call(this, name);
// //   this.thesis = thesis;
// // }

// // let g = new GradStudent("subu", "abc");

// // GradStudent.prototype = Student.prototype;

// // let g1 = new GradStudent("john", "abc");

// function ho_function() {
//   return function (x, y) {
//     return x + y;
//   };
// }

// let c = 20

// function inc(x) {
//   const incVal = 1;
//   return x + incVal + c;
// }

// function incByVal() {
//   const val = 1;
//   return function (x) {
//     return x + val;
//   };
// }

// const fun = incByVal();

// console.log(fun(10));

// console.log("loaded index");

//const util = require_util();

//const { getval, setval } = require("./util");

//util1.setVal(67);

// import ValClass, { setVal, getVal } from "./util.js";

// let vc = new ValClass(35);

// console.log(vc);

// setVal(vc, 25);

// console.log(getVal(vc));

// console.log(vc);

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// objective
// 1. filter all od numbers out
// 2. square the remaining numbers
// 3. sum them up

function isEven(x) {
  return x % 2 == 0;
}

let arr1 = arr.filter(isEven);

console.log(arr1);

function sqr(x) {
  return Math.pow(x, 2);
}

let arr2 = arr1.map(sqr);

console.log(arr2);

function add(x, y) {
  console.log("x: ", x, " y: ", y);
  return x + y;
}

let sum_result = arr2.reduce(add, []);

console.log(sum_result);
