// function require_util() {
//   console.log("loaded util");

export default class ValClass {
  constructor(val) {
    this.val = val;
  }
}

export function getVal(vc) {
  return vc.val;
}
export function setVal(vc, val_n) {
  vc.val = val_n;
}

// module.exports = {
//   getVal: getVal,
// };

// module.exports = {
//   setval: setVal,
//   getval: getVal,
// };

//console.log(module);
