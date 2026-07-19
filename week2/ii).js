"use strict";
// Optional and Default Parameters
function student(name, age) {
    if (age !== undefined)
        console.log(`Name: ${name}, Age: ${age}`);
    else
        console.log(`Name: ${name}`);
}
function greet(name = "Guest") {
    console.log(`Welcome ${name}`);
}
student("Chandini", 20);
student("Anitha");
greet("Priya");
greet();
