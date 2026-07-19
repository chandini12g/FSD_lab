let a: any = 20;
console.log(a);

a = "Twenty";
console.log(a);

let value: unknown = "TypeScript";

if (typeof value === "string") {
    console.log(value.toUpperCase());
}

function message(): void {
    console.log("Learning TypeScript");
}

message();