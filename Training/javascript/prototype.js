let EmployeeDetails = function(name,jobdesc) {
    this.name = name;
    this.jobdesc = jobdesc;
};

EmployeeDetails.prototype.getName = function() {
    return this.name;
};
EmployeeDetails.prototype.getJobdesc = function() {
    return this.jobdesc;
};


let emp1 = new EmployeeDetails('AB','Trainer');
console.log(emp1.getName());
console.log(emp1.getJobdesc())
//console.log(emp1.jobdesc());

