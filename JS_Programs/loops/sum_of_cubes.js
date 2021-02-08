var num=153;
var sum=0,rem;
while(num>0)
{
    rem=num%10;
    sum=sum+Math.pow(rem,3);
    num=Math.floor(num/10);
}
console.log("Sum = "+sum);