var num=6;
var arr=[1,2,3,4,5];
var lower=0;
var upper=arr.length-1;
while(lower<upper)
{
    let total=arr[lower]+arr[upper];
    if(total==num)
    {
        console.log(arr[lower],arr[upper]);
        lower++;
        //upper--;
        //break;
    }
    else if(total<num)
    {
        lower+=1;
    }
    else
    {
        upper-=1;
    }
}