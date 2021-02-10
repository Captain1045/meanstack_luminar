var arr=[2,4,6,8,1,3,5,7,9];
var num=10;
// for(let first of arr)
// {
//     for(let second of arr)
//     {
//         if((first+second)==num)
//         {
//             console.log("( "+first+" , "+second+" )" );
//         }
//     }
// }
for(let first=0;first<arr.length;first++)
{
    for(let second=first+1;second<arr.length;second++)
    {
        if((arr[first]+arr[second])==num)
        {
            console.log("( "+arr[first]+" , "+arr[second]+" )" );
        }
    }

}