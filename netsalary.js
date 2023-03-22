// Basic salary,tax, NHIF and NSSF rates
const BASIC_SALARY = 180000;
const TAX_RATE = 0.3;
const NHIF_RATE = 500;
const NSSF_RATE = 200;

// Basic salary and benefits
const basicSalary = parseFloat(prompt("Enter basic salary: "));
const benefits = parseFloat(prompt("Enter the total amount of benefits received: "));

// Gross salary
const grossSalary = BASIC_SALARY + basicSalary + benefits;

//Deductions
const taxDeduction = grossSalary * TAX_RATE;
const nhifDeduction = grossSalary * NHIF_RATE;
const nssfDeduction = grossSalary * NSSF_RATE;

//Net salary
const netSalary = grossSalary - taxDeduction - nhifDeduction - nssfDeduction;

//Results from calculations
console.log(`Gross salary: ${grossSalary.toFixed(2)}`);
console.log(`Tax deduction: ${taxDeduction.toFixed(2)}`);
console.log(`NHIF deduction: ${nhifDeduction.toFixed(2)}`);
console.log(`NSSF deduction: ${nssfDeduction.toFixed(2)}`);
console.log(`Net salary: ${netSalary.toFixed(2)}`);

console.log(netSalary)
NetDisplay.innerText=`Your salary is ${netSalary}`;