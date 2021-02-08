var num=123;
var rem;
rev=0;
while(num>0)
{
    rem=num%10;
    rev=rev*10+rem;
    num=Math.floor(num/10);
}
console.log("Reverse is "+rev);
