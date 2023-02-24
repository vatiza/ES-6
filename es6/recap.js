function calculateSalary(salary,tax=6.25,bonus=0) {
    const remaining = salary - salary * tax;
    const total = remaining + bonus;
    return total;
}
const elementHTML = `
<div>
<h1>Name: </h1>
<p>Address:</p>
<p>Salary:${calculateSalary(1000,0,0)}</p>
<p>Bonus:${numbers}</p>
</div>
`
// arrow function

const doubleIt = x => x8 * 2;
const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;
const age = [12, 234, 342, 23, 34, 45, 67];
const newAge = [...age, 56, 32, 54, 65];