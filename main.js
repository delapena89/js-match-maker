// console.log("sanity check!");

// Step 1: Ask (prompt) the user for the total number of students learning JavaScript
var numStudents = prompt("How many students will be learning JavaScript?");
// Step 2: For each student, ask the user for their name, phone number, and city. Create an object for each person. Add each object to an array. BONUS: add validation.
var totalStudents = [];

var studentName = prompt("What is the student name?");
var studentNumber = prompt("What is the student's phone number?");
var studentCity = prompt("Where are you from?");
// This variable answers will be inputed to student1 object populating it.  
var student1 = {name: studentName, phone: studentNumber, city: studentCity};

var studentName = prompt("What is the student name?");
var studentNumber = prompt("What is the student's phone number?");
var studentCity = prompt("Where are you from?");

var student2 = {name: studentName, phone : studentNumber, city: studentCity};
totalStudents.push(student1, student2);
// From line 4-19.Creates objects with student info and line 19 pushes info into a blank array

// The following lines will create info for the mentors
var numMentors = prompt("How many mentors will be helping?");

var totalMentors = [];

var mentorName = prompt("What is the mentors name?");
var mentorNumber = prompt("what is the mentor number?");
var mentorCity = prompt("Where is the mentor from?");

var mentor1 = {name: mentorName, phone: mentorNumber, city: mentorCity};

var mentorName = prompt("What is the mentors name?");
var mentorNumber = prompt("what is the mentor number?");
var mentorCity = prompt("Where is the mentor from?");

var mentor2 = {name: mentorName, phone: mentorNumber, city: mentorCity};

var mentorName = prompt("What is the mentors name?");
var mentorNumber = prompt("what is the mentor number?");
var mentorCity = prompt("Where is the mentor from?");

var mentor3 = {name: mentorName, phone: mentorNumber, city: mentorCity};
totalMentors.push(mentor1, mentor2, mentor3);
//Line 23 - 44 create object and array for the mentors. Just like the code above does for students. 

alert("Name: " + totalStudents[0].name + "\n Phone: " + totalStudents[0].phone + "\n City: " + totalStudents[0].city);
alert("Name: " + totalStudents[1].name + "\n Phone: " + totalStudents[0].phone + "\n City: " + totalStudents[0].city);
alert("Name: " + totalMentors[0].name + "\n Phone: " + totalMentors[0].phone + "\n City: " + totalMentors[0].city);
alert("Name: " + totalMentors[1].name + "\n Phone: " + totalMentors[1].phone + "\n City: " + totalMentors[1].city);
alert("Name: " + totalMentors[2].name + "\n Phone: " + totalMentors[2].phone + "\n City: " + totalMentors[2].city);



















