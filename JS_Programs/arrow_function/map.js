var arr=[2,4,5,6,7,8];

arr.forEach(ob=>console.log(ob));

var data=arr.map(num=>num**2);
console.log(data);

var even=arr.filter(num=>num%2==0);
console.log(even);

var sum=arr.reduce((num1,num2)=>num1+num2);
console.log(sum);

var max=arr.reduce((num1,num2)=>num1>num2?num1:num2);
console.log(max);