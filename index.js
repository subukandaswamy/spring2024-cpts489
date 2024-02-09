let a = 10;
let b = 10.6;
let bi = 10987890910n;
let c = "cpts489";
let d = false;
let e = null;
//let f;
let g = Symbol("eecs");

//console.log(g);

let o = {
  name: "Tim",
  dept: "eecs",
  awards: null,
};

console.log(o.honors);

let arr = [1, 2, 3];

// console.log(o);
// console.log(arr);

// function add(x, y) {
//   return x + y;
// }

let add = function (x, y) {
  return x + y;
};

let num = {
  x: 2,
  y: 3,
  print: function () {
    console.log(this.x, this.y);
  },
};

function add_object(o) {
  o.x = 20;
  return o.x + o.y;
}

//console.log(add_object(num));

console.log(num);

let n1 = 1;
let n2 = 2;

function add_primitive(x, y) {
  return x + y;
}
console.log(add_primitive(n1, n2));

("Subu");
let s = new String("Subu");
console.log(s.toUpperCase());

const numObj = 12345.6789;

numObj.toFixed(); // '12346'; rounding, no fractional part
numObj.toFixed(1);

add(1,2)

console.log(numObj.toFixed(1));

console.log((x = 10 + 15));

let n = 10

if (n < 5) {
  n = 0
} else {
  n = 100
}


