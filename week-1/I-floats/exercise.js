var numberOfStudents = 15;
var numberOfMentors = 8;

var total = numberOfMentors + numberOfStudents;
var centst = numberOfStudents / total * 100;
var rs = Math.round(centst);
var centmen = numberOfMentors / total * 100;
var rm = Math.round(centmen);

console.log("Percentage students: " + rs + "%");
console.log("Percentage mentors: " + rm + "%");
