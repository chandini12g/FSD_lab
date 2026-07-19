// Optional and Default Parameters

function student(name: string, age?: number): void {
    if (age !== undefined)
        console.log(`Name: ${name}, Age: ${age}`);
    else
        console.log(`Name: ${name}`);
}

function greet(name: string = "Guest"): void {
    console.log(`Welcome ${name}`);
}

student("Chandini", 20);
student("Anitha");

greet("Priya");
greet();