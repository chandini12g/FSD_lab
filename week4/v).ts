interface Length {
    length: number;
}

function showLength<T extends Length>(item: T): void {
    console.log("Length =", item.length);
}

showLength("TypeScript");
showLength([10, 20, 30, 40]);