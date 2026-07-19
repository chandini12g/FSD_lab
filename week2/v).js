"use strict";
// Normal Function
function multiply(a, b) {
    return a * b;
}
// Arrow Function
const multiplyArrow = (a, b) => {
    return a * b;
};
console.log("Normal Function =", multiply(5, 4));
console.log("Arrow Function =", multiplyArrow(5, 4));
