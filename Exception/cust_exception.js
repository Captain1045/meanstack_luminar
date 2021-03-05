var age=17;
try{
    if(age<18)
    {
        throw new Error("Invalid Age!");
    }
}
catch(ex)
{
    console.log(ex.message);
}