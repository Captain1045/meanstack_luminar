var num=20;
flag=0;
for(let i=2;i<=num;i++)
{
    if(num%i==0)
    {
        flag=1;
        break;
    }

}
if(flag==0)
{
    console.log("\nPrime Number\n");
}
else
{
    console.log("\nNot a Prime\n");
}