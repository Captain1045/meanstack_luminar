class employee{
    constructor(id,name,desig,sal)
    {
        this.id=id;
        this.name=name;
        this.desig=desig;
        this.sal=sal;
    }
};
var ob1=new employee(101,"ajay","developer",25000);
var ob2=new employee(102,"raju","developer",30000);
var ob3=new employee(103,"amal","QA",24000);
var ob4=new employee(104,"arun","QA",28000);
var emp_array=[];
emp_array.push(ob1);
emp_array.push(ob2);
emp_array.push(ob3);
emp_array.push(ob4);

for(emp of emp_array)
{
    if(emp.desig=="developer")
    {
        console.log(emp);
    }
}
var names=emp_array.map(ob=>ob.name.toUpperCase());  // map
console.log(names);
console.log(emp_array);
// emp_array.sort((ob1,ob2)=>ob2["sal"]-ob1["sal"]);
// console.log("\nDetails of employee with highest salary \n");
// console.log(emp_array[0]);

emp_array.filter(ob=>ob.desig=="developer").forEach(obj=>console.log(obj.name)); // filter 

var high_sal=emp_array.map(ob=>ob.sal).reduce((ob1,ob2)=>ob1>ob2?ob1:ob2);
console.log(high_sal);


