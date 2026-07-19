class Employee {
    empId: number;
    empName: string;

    constructor(id: number, name: string) {
        this.empId = id;
        this.empName = name;
    }

    showDetails(): void {
        console.log("Employee ID:", this.empId);
        console.log("Employee Name:", this.empName);
    }
}

let emp = new Employee(101, "Anitha");
emp.showDetails();