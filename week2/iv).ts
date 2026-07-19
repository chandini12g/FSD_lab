// REST Parameters

function total(...numbers: number[]): number {
    let sum = 0;

    for (let n of numbers) {
        sum += n;
    }

    return sum;
}

console.log("Sum =", total(10, 20, 30));
console.log("Sum =", total(5, 10, 15, 20));