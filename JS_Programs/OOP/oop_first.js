class Person{
    // setPerson(name,age,gender)
    // {
    //     this.name=name;
    //     this.age=age;
    //     this.gender=gender;
    // }
    constructor(name,age,gender)
    {
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    printPerson()
    {
        console.log(this.name);
        console.log(this.age);
        console.log(this.gender);
    }
}
var ob=new Person("amal",24,"male");
//ob.setPerson("amal",24,"male");
ob.printPerson();