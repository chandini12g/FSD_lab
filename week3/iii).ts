class Person {
    public name: string;
    private age: number;
    protected city: string;

    constructor(name: string, age: number, city: string) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    display(): void {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("City:", this.city);
    }
}

class Student extends Person {
    showCity(): void {
        console.log("City:", this.city);
    }
}

let s = new Student("Chandini", 20, "Bhimavaram");

console.log(s.name);
// console.log(s.age);      // Error (Private)
// console.log(s.city);     // Error (Protected)

s.display();
s.showCity();