var num=3;
var lower=8,upper=50;
for(let i=1;i<upper;i++)
{
    let res=i**num;
    if(res>=lower && res<=upper)
    {
        console.log(res);
    }
}