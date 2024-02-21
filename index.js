let user = {
  name: "subu",
  address: {
    street: "2020 drive",
    city: "pullman",
  },
};

let x = [1, 2, 3];
x.name = "subu";

for (y in x) {
  console.log(y, "==>", x[y]);
}

// let o1 = Object.create(Object.prototype);
// Object.defineProperty(o1, "val", {
//     value: 20,

// });
//console.log(o.toString());

// let o2 = Object.create(o);
// o2.val1 = 30;
// o2.val = 25;
//console.log(o2.val);

//console.log(user.office.zip);
