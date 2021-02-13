var arr = [1, 2, 2, 3, 4, 6, 2, 3, 6, 4, 6];
var num = 2;
var lower = 0;
var upper = arr.length-1;
let count=0;
arr.sort((a, b) => a < b ? -1 : 1);
while (lower < upper) {
    //count++;
    if (arr[lower] == num) {
        let temp=arr[lower];
        arr[lower]=arr[upper];
        arr[upper]=temp;
        upper--;
    }
    else {
        lower++;
    }
}
//console.log(count);
console.log(arr);