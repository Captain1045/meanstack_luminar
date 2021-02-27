function check() {
    num = document.querySelector("#tbox").value;
    //alert(num);
    flag = 0;
    if (num==="") {
        alert("Enter a valid number");
    }
    else if(num <= 1)
    {
        alert("Not a prime number!");
    }
    else{
        for (let i = 2; i < num / 2; i++) {
            if (num % i == 0) {
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            alert("Prime Number");
        }
        else {
            alert("Not a prime number!");
        }
    }
    
}