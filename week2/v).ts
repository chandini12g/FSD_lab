// Normal Function

function multiply(a: number, b: number): number {
    return a * b;
}

// Arrow Function

const multiplyArrow = (a: number, b: number): number => {
    return a * b;
};

console.log("Normal Function =", multiply(5, 4));
console.log("Arrow Function =", multiplyArrow(5, 4));