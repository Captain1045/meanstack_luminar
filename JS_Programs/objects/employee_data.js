var employee=[
    {id:100,name:"ram",desig:"developer",join:1989,resign:2005},
    {id:101,name:"raju",desig:"developer",join:1990,resign:2005},
    {id:101,name:"ravi",desig:"hr",join:1991,resign:1999},
    {id:102,name:"amit",desig:"manager",join:1995,resign:2005}
];
//console.log(employee);
console.log("\nDeveloper \n");
for(let ob of employee)
{

    if(ob["desig"]==="developer")
        {
            console.log(ob);
        }
    // for(let key in ob)
    // {
    //     //console.log(key);
    //     if(ob[key]==="developer")
    //     {
    //         console.log(ob);
    //     }
    // }
}
console.log("\nEmployees worked in 1990\n");
for(let ob of employee)
{
    if(ob["join"]<=1990 && ob["resign"]>1990)
    {
        console.log(ob);
    }
}

console.log("\nEmployees with experience of 10 years\n");
for(let ob of employee)
{
    if((ob["resign"]-ob["join"])>=10)
    {
        console.log(ob);
    }
}