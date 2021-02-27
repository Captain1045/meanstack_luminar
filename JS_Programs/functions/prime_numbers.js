function prime_limit(lower, upper) {
    var flag = 0, i;
    while (lower <= upper) {
        if (lower <= 1 && upper >= 2) {
            lower = 2;
        }
        else {
            console.log("\nNo prime numbers\n");
            break;
        }
        for (i = 2; i < lower; i++) {
            if (lower % i == 0) {
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            console.log(lower + "\n");
        }
        else {
            flag = 0;
        }
        lower++;
    }
}
prime_limit(1, 1);