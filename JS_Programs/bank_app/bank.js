class bank {
    static getAccountDetails() {
        var accountDetails = {
            1000: { accno: 1000, name: "Amal", bal: 25000, pass: "user1" },
            1001: { accno: 1001, name: "Arun", bal: 25000, pass: "user2" },
            1002: { accno: 1002, name: "Ajay", bal: 25000, pass: "user3" },
            1003: { accno: 1003, name: "Hari", bal: 25000, pass: "user4" },
        }
        return accountDetails;
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
            }
            else {
                alert("Password Mismatch");
            }

        }
        else {
            alert("Invalid Account Number!");
        }
    }
};