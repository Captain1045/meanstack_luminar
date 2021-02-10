var arr=[3,4,5];
var res=[];
var sum=0;
for(let num of arr)
{
    sum+=num;
}
for(let num of arr)
{
    res.push(sum-num);
}
console.log(arr);
console.log(res);