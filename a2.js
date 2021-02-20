//task1
// sum = 0
// total = 0
// TF = true

// var courses = [
// {code: "APC100", name: "Applied profesional communication", hours: 3, url: "http:/www.senecacollege.ca"}, 
// {code: "IPC144", name: "Introduction to C programming", hours: 0, url: "http:/www.senecacollege.ca/ipc"},
// {code: "ULI101", name: "Linux and the Internet", hours: 4, url: "http:/www.senecacollege.ca/lin"},
// {code: "IOS110", name: "Windows Operating System", hours: 4, url: "http:/www.senecacollege.ca/ios"},
// {code: "EAC150", name: "College English", hours: 3, url: "null" }
// ]


// var x = courses.pop();

// console.log(x);

// var BTP200 = {code: "BTP200", name: "Programming using c++", hours: 2, url: "http:/www.senecacollege.ca/BTP"}
// var BTD210 = {code: "BTD210", name: "Database design", hours: 3, url: "http:/www.senecacollege.ca/BTD"}
// var BTI225 = {code: "BTI225", name: "Web programming princibles", hours: 3, url: "http:/www.senecacollege.ca/BTI"}
// var BTC240 = {code: "BTC240", name: "Interpersonal communications", hours: 3, url: "http:/www.senecacollege.ca/BTC"}

// courses.push(BTP200, BTD210, BTI225, BTC240);


// console.log(courses)


// for(i = 0; i <= courses.length; i++) {
// sum += courses[i].hours

// }

// console.log(y)
// console.log(sum)

//task2

var Student = {
name: "",
dob: new Date(), 
sid: "", 
program: "", 
gpa: Number ,
toString(){ 
console.log("Student info for" +this.name + "born on" + date + "id is" + this.id + "in program" + this.program + "with a current GPA" +this.gpa)
}
};  

var student1  = Object.create(Student);
student1.name = "Robert"
student1.dob = "February 7, 1995" 
student1.sid = 345235, 
student1.program = "Woodshop", 
student1.gpa = 3 


