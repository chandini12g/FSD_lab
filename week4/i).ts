namespace MathOperations {

    export function add(a: number, b: number): number {
        return a + b;
    }

    export function sub(a: number, b: number): number {
        return a - b;
    }
}

console.log("Addition =", MathOperations.add(20, 10));
console.log("Subtraction =", MathOperations.sub(20, 10));