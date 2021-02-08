var num=2,i=1;
sum=0;
while(num<=9)
{
    i=1;
    while(i<=num)
    {
       sum=sum*10+i*num;
       i++;
    }
    console.log("\n"+sum);
    sum=0;
    num++;
}

