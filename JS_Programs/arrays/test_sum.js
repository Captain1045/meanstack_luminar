var arr = [4,2,5,7];
var res = [];
var sum;
//console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
    sum = 0;
    for (let j = 0; j < arr.length; j++) {
        if (i == j) {
            continue;
        }
        else {
            sum = sum + arr[j];
        }
    }
    res.push(sum);

}
console.log(arr);
console.log(res);