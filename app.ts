// Employee Interface
interface Employee {
  id: number;
  name: string;
  salary: number;
  department: string;
}

// Employees Array
const employees: Employee[] = [
  {
    id: 1,
    name: "Ali",
    salary: 45000,
    department: "IT",
  },
  {
    id: 2,
    name: "Ahmed",
    salary: 60000,
    department: "HR",
  },
  {
    id: 3,
    name: "Usman",
    salary: 75000,
    department: "IT",
  },
  {
    id: 4,
    name: "Hassan",
    salary: 40000,
    department: "Sales",
  },
  {
    id: 5,
    name: "Bilal",
    salary: 55000,
    department: "Finance",
  },
  {
    id: 6,
    name: "Hamza",
    salary: 90000,
    department: "IT",
  },
  {
    id: 7,
    name: "Zain",
    salary: 48000,
    department: "Marketing",
  },
  {
    id: 8,
    name: "Saad",
    salary: 65000,
    department: "Sales",
  },
];

// Function
function getHighSalaryEmployees(
  employees: Employee[]
): Employee[] {
  return employees.filter((employee) => employee.salary > 50000);
}

// Function Call
const highSalaryEmployees = getHighSalaryEmployees(employees);

// Console Output
console.log("Salary 50,000 سے زیادہ والے Employees:");

console.log(highSalaryEmployees);