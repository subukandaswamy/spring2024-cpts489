function add(x, y) {
  console.log(this);
  return x + y;
}

// console.log(add(1, 2));

// console.log(add.call(global, 1, 2));

function Student(name, major) {
  this.name = name;
  this.major = major;
}
Student.prototype.printDetails = function () {
  console.log(this.name, ":", this.major);
};

const stud1 = new Student("vishal", "cs");
const stud2 = new Student("diana", "cs");
const stud3 = new Student("emma", "cs");
// const stud1 = {
//   name: "vishal",
//   major: "CS",
//   printDetails: function () {
//     console.log(this.name, ":", this.major);
//   },
// };

// const stud2 = {
//   name: "Diana",
//   major: "CS",
//   printDetails: function () {
//     console.log(this.name, ":", this.major);
//   },
// };

// const stud3 = {
//   name: "Emma",
//   major: "CS",
//   printDetails: function () {
//     console.log(this.name, ":", this.major);
//   },
// };

const students = [stud1, stud2, stud3];
for (s of students) {
  s.printDetails();
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
