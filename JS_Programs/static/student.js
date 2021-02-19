class student{
    static college="Luminar";
    constructor(roll_no,name,course)
    {
        this.roll_no=roll_no;
        this.name=name;
        this.course=course;
    }
    printStudent()
    {
        console.log(this.roll_no+","+this.name+","+this.course+","+student.college);
    }
};
var st1=new student(100,"Amal","BCA");
st1.printStudent();