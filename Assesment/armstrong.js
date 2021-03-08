var sum = 0;
for (var i = 101; i <= 999; i++) {
    armstrong(i);

}
function armstrong(num) {
    var temp = num;
    while (num > 0) {
        rem = num % 10;
        num = Math.floor(num / 10);
        sum += rem ** 3;
    }
    if (sum == temp) {
        console.log(temp);
        sum = 0;
    }
    else {
        sum = 0;
    }
}