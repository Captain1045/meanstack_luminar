class parent{
    m1()
    {
        console.log("\nParent method");
    }
}
class child extends parent{
    m2()
    {
        console.log("\nChild Method");
    }
}
class subChild extends child{
    m3()
    {
        console.log("\nSub-child Method");
    }
}
var ob=new subChild();
ob.m1();
ob.m2();
ob.m3();