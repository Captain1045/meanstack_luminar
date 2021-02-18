class parent{
    phone()
    {
        console.log("Nokia Phone!");
    }
}
class child extends parent{
    phone()
    {
        super.phone();
        console.log("IPhone!");
    }
}
var obj=new child();
obj.phone();