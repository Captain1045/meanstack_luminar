var arr1=[10,11,13,14,15];
var arr2=[8,9,10,11,16];
var counter=0;
// for(let num1 of arr1)
// {
//     for(let num2 of arr2)
//     {
//         if(num1==num2)
//         {
//             console.log(num1+"\t");
//         }
//     }
// }
var p1=0;
var p2=0;
while((p1<arr1.length) && (p2<arr2.length))
{
    counter++;
    if(arr1[p1]==arr2[p2])
    {
        console.log(arr1[p1]);
        p1+=1;
    }
    else if(arr1[p1]>arr2[p2])
    {
        p2+=1;
    }
    else{
        p1+=1;
    }
}
//console.log(counter);