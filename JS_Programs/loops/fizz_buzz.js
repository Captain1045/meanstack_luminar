var i=1;
flag=0;
while(i<=50)
{
    if(i%3==0)
    {
        console.log("fizz\n");
        flag=1;
    }
    if(i%5==0)
    {
        console.log("buzz\n");
        flag=1;
    }
    if(i%15==0)
    {
        console.log("fizzbuzz\n");
        flag=1;
    }
    if(flag==0)
    {
        console.log(i+"\n");
    }
    else
    {
        flag=0;
    }
    i++;
}