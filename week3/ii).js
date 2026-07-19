"use strict";
class Employee {
    empId;
    empName;
    constructor(id, name) {
        this.empId = id;
        this.empName = name;
    }
    showDetails() {
        console.log("Employee ID:", this.empId);
        console.log("Employee Name:", this.empName);
    }
}
let emp = new Employee(101, "Anitha");
emp.showDetails();
