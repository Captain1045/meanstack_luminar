class bank{
    // createAccount(accno,name,min_bal)
    // {
    //     this.accno=accno;
    //     this.name=name;
    //     this.bal=min_bal;
    // }
    constructor(accno,name,min_bal)
    {
        this.accno=accno;
        this.name=name;
        this.bal=min_bal;
    }
    withdraw(amount)
    {
        if(this.bal<amount)
        {
            console.log("\nInsufficient Balance");
        }
        else
        {
            this.bal-=amount;
            console.log("\nAccount debited with Rs."+amount+"\t Available Balance = "+this.bal);
        }
    }
    deposit(amount)
    {
        this.bal+=amount;
        console.log("\nAccount credited with Rs."+amount+"\t Available Balance = "+this.bal);
    }
    balanceEnq()
    {
        console.log("\nAvailable Balance = "+this.bal);
    }
}
var ob=new bank(101,"Amal",1000);
//ob.createAccount(101,"Amal",1000);
ob.balanceEnq();
ob.withdraw(3000);
ob.deposit(5000);
ob.withdraw(2000);
ob.balanceEnq();