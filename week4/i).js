"use strict";
var MathOperations;
(function (MathOperations) {
    function add(a, b) {
        return a + b;
    }
    MathOperations.add = add;
    function sub(a, b) {
        return a - b;
    }
    MathOperations.sub = sub;
})(MathOperations || (MathOperations = {}));
console.log("Addition =", MathOperations.add(20, 10));
console.log("Subtraction =", MathOperations.sub(20, 10));
