emp1={
    id: 101,
    name: 'Amal',
    salary: 15000
};
emp2={
    id: 105,
    name: 'Arun',
    salary: 35000
};
emp3={
    id: 103,
    name: 'Ajay',
    salary: 45000
};
var employee_array=[];
employee_array.push(emp1);
employee_array.push(emp2);
employee_array.push(emp3);

employee_array.sort((a,b)=>a.id-b.id);
console.log(employee_array);

employee_array.sort((a,b)=>a.salary-b.salary);
console.log(employee_array);

employee_array.sort((a,b)=>a.name<b.name?-1:1);
console.log(employee_array);
