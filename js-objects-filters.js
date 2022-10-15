/* 1. Write a JavaScript program to:
a) filter employees according to department = IT
b) filter employees who earn a salary < 65000 */

//Input
let employees = [
    {
    "id": 1,
    "name":"Abhinav",
    "department":"IT",
    "Salary":75000
    },
    {
    "id": 2,
    "name":"Gaurav",
    "department":"Sales",
    "Salary":52000
    },
    {
    "id": 3,
    "name":"Raj",
    "department":"IT",
    "Salary":64000
    }
]

//1a

const employeesITDept=employees.filter(emp=>emp.department==="IT");

console.log("1a Filter employees according to department = IT: "+(JSON.stringify(employeesITDept,null,2)));

//1b

const empSalaryLessThan65K=employees.filter(emp=>emp.Salary<65000);

console.log("1b filter employees who earn a salary < 65000: "+(JSON.stringify(empSalaryLessThan65K,null,2)));


/* 2. Write a JavaScript program to filter the hospitals according to:
a) Number of Beds > 200
b) Availability of Beds = Yes
c) Location = Pune */

//Input
let hospitals = [
    {
    "id": 1,
    "name":"Hospital A",
    "location":"Delhi",
    "noOfBeds":450,
    "availability":"Yes"
    },
    {
    "id": 2,
    "name":"Hospital B",
    "location":"Pune",
    "noOfBeds":150,
    "availability":"No"
    },
    {
    "id": 3,
    "name":"Hospital",
    "location":"Pune",
    "noOfBeds":350,
    "availability":"Yes"
    }
]

//2a

const hospitalWithBedsGrtrThan200=hospitals.filter(h=>h.noOfBeds>200);

console.log("2a Number of Beds > 200: "+(JSON.stringify(hospitalWithBedsGrtrThan200,null,2)));

//2b

const hospitalWithBedsAvailability=hospitals.filter(h=>h.availability==="Yes");

console.log("2b Availability of Beds = Yes: "+(JSON.stringify(hospitalWithBedsAvailability,null,2)));

//2c

const hospitalsInPune=hospitals.filter(h=>h.location==="Pune");

console.log("2c Location = Pune: "+(JSON.stringify(hospitalsInPune,null,2)));

