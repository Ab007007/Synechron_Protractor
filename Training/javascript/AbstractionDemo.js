class Student {

    setStudentDetails(name, id , phonenum)
    {
        this.name = name;
        this.id = id;
        this.phonenum = phonenum;
    }

    getStudentName() {
        return this.name;
    }

    getStudentID() {
        return this.id
    }
    getPhoneNum() {
        return this.phonenum
    }
}

function printemp(Employee)
{
    console.log(Employee.getStudentID());
    console.log(Employee.getStudentName());
    console.log(Employee.getPhoneNum());
}
let emp = new Student();
let emp1 = new Student();

emp.setStudentDetails('Aravinda', 'ID001', 998898898);
emp1.setStudentDetails('Aa', 'ID002', 9898989);

printemp(emp);
console.log("---------------------------------------");
printemp(emp1);



