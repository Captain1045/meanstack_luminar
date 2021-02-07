var num1=15,num2=5,num3=20,largest;
largest=num1;
var second_largest;
var smallest;
if(num2>largest)
{
    largest=num2;
    if(num1>num3)
    {
        second_largest=num1;
        smallest=num3;
    }
    else
    {
        second_largest=num3;
        smallest=num1;
    }
}
if(num3>largest)
{
    largest=num3;
    if(num2>num1)
    {
        second_largest=num2;
        smallest=num1;
    }
    else
    {
        second_largest=num1;
        smallest=num2;
    }
}
if(num1==largest)
{
    if(num2>num3)
    {
        second_largest=num2;
        smallest=num3;
    }
    else
    {
        second_largest=num3;
        smallest=num2;
    }
}
console.log("\nLargest is "+largest);
console.log("\nSecond largest is "+second_largest);
console.log("\nSorted Order = "+smallest+","+second_largest+","+largest);
