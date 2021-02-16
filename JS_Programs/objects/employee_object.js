var employee={
    emp_id:101,
    emp_name:"Amal",
    salary:25000,
    exp:1
};
console.log(employee);
if("gender" in employee){
    console.log("Exist");
}
else
{
    employee["gender"]="male";
    employee.age=24;
    //console.log("Not exist");
}
console.log(employee);