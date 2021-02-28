class bank {
    static getAccountDetails() {
        var accountDetails = {
            1000: { accno: 1000, name: "Amal", bal: 3000, pass: "user1" },
            1001: { accno: 1001, name: "Arun", bal: 5000, pass: "user2" },
            1002: { accno: 1002, name: "Ajay", bal: 7000, pass: "user3" },
            1003: { accno: 1003, name: "Hari", bal: 6000, pass: "user4" },
        }
        return accountDetails;
    }
    static authenticateUser(user_acc, user_pwd) {
        let data = bank.getAccountDetails();
        if (user_acc in data) {
            if (user_pwd == data[user_acc]["pass"]) {
                return 0;
            }
            else {
                return 1;
            }
        }
        else {
            return -1;
        }

    }
    static login() {
        let user_acc = document.querySelector("#user_accno").value;
        let user_pwd = document.querySelector("#user_pass").value;
        var data = bank.getAccountDetails();
        if (user_acc in data) {
            //console.log(data[user_acc]["pass"]);
            //alert(user_acc);
            if (user_pwd == data[user_acc]["pass"]) {
                alert("Authentication Successful");
                window.location.href = "userhome.html";
            }
            else {
                alert("Password Mismatch");
            }

        }
        else {
            alert("Invalid Account Number!");
        }
    }
    static deposit() {
        let user_acc = document.querySelector("#input_accno").value;
        let user_pwd = document.querySelector("#input_pass").value;
        let user_amount = document.querySelector("#input_amount").value;
        //alert(user_acc+"\t"+user_pwd+"\t"+user_amount);
        var data = bank.getAccountDetails();
        let user = bank.authenticateUser(user_acc, user_pwd);
        if (user == 0) {
            data[user_acc]["bal"] += Number(user_amount);
            alert("Available Balance = " + data[user_acc]["bal"]);
            //alert(data[user_acc]["bal"]);
        }
        else if (user == 1) {
            alert("Invalid Password!");
        }
        else {
            alert("Invalid Account Number!");
        }
    }
    static withdrawal() {
        let user_acc = document.querySelector("#input_accno").value;
        let user_pwd = document.querySelector("#input_pass").value;
        let user_amount = document.querySelector("#input_amount").value;
        var data = bank.getAccountDetails();
        let user = bank.authenticateUser(user_acc, user_pwd);
        if (user == 0) {
            if (user_amount > data[user_acc]["bal"]) {
                alert("Insufficient Balance!")
            }
            else {
                data[user_acc]["bal"] -= Number(user_amount);
                alert("Available Balance = " + data[user_acc]["bal"]);
            }
        }
        else if (user == 1) {
            alert("Invalid Password!");
        }
        else {
            alert("Invalid Account Number!");
        }


    }

};