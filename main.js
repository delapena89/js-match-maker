console.log("sanity check!");

// Step 1: Ask (prompt) the user for the total number of students learning JavaScript
	var begin = prompt("How many students are learning JavaScript?");
	var beginNum = parseInt(begin);
	var mentors = prompt("How many mentors will be helping the students?");
	var mentorsNum = parseInt(mentors);
	var studentArray = [];
	var mentorArray = [];

function studentInfo() {
	var studentName = prompt("What is the students name?");
	var studentPhone = prompt("What is the students phone number?");
	var studentCity = prompt("Where is the student from?");
	console.log(studentInfo);
	studentArray.push({"name": studentName, "Phone Number": studentPhone, "City": studentCity});
	console.log(studentArray);
}

function moreStudents() {
	for (var i = 1; i < beginNum; i++) {
		studentInfo();
	}	
}

function addStudent() {
	var next = prompt("Would you like to add another student?");
		if (next === "yes") {
			studentInfo();	
		}
}
function addMentors() {
	var mentorName = prompt("What is the mentors name?");
	var mentorPhone = prompt("What is the mentors phone number?");
	var mentorCity = prompt("where does the mentor live?");
	mentorArray.push({"name": mentorName, "Phone Number": mentorPhone, "City": mentorCity});
	console.log(mentorArray);
}
function moreMentors() {
	for (var i = 0; i < mentors; i++) {
		addMentors();
		}
}



studentInfo();
moreStudents();
addStudent();
addMentors();
moreMentors();
// var numStudents = prompt("How many students will be learning JavaScript?");
// Step 2: For each student, ask the user for their name, phone number, and city. Create an object for each person. Add each object to an array. BONUS: add validation.
// var totalStudents = [];
// var studentName = prompt("What is the student name?");
// var studentNumber = prompt("What is the student's phone number?");
// var studentCity = prompt("Where are you from?");
// This variable answers will be inputed to student1 object populating it.  
// var student1 = {name: studentName, phone: studentNumber, city: studentCity};

// function studentsInfo (studentName,studentNumber,studentCity) {
// 	var studentName = prompt("What is the student name?");
// 	var studentNumber = prompt("What is the student's phone number?");
// 	var studentCity = prompt("Where are you from?");
// }
// 	studentInfo.push(totalStudents);


// studentsInfo(studentName,studentNumber,studentCity);



// var studentName = prompt("What is the student name?");
// var studentNumber = prompt("What is the student's phone number?");
// var studentCity = prompt("Where are you from?");


// var studentName = prompt("What is the student name?");
// var studentNumber = prompt("What is the student's phone number?");
// var studentCity = prompt("Where are you from?");

// var student2 = {name: studentName, phone : studentNumber, city: studentCity};
// totalStudents.push(student1, student2);
// // From line 4-19.Creates objects with student info and line 19 pushes info into a blank array

// // The following lines will create info for the mentors
// var numMentors = prompt("How many mentors will be helping?");

// var totalMentors = [];

// var mentorName = prompt("What is the mentors name?");
// var mentorNumber = prompt("what is the mentor number?");
// var mentorCity = prompt("Where is the mentor from?");

// var mentor1 = {name: mentorName, phone: mentorNumber, city: mentorCity};

// var mentorName = prompt("What is the mentors name?");
// var mentorNumber = prompt("what is the mentor number?");
// var mentorCity = prompt("Where is the mentor from?");

// var mentor2 = {name: mentorName, phone: mentorNumber, city: mentorCity};

// var mentorName = prompt("What is the mentors name?");
// var mentorNumber = prompt("what is the mentor number?");
// var mentorCity = prompt("Where is the mentor from?");

// var mentor3 = {name: mentorName, phone: mentorNumber, city: mentorCity};
// totalMentors.push(mentor1, mentor2, mentor3);
// //Line 23 - 44 create object and array for the mentors. Just like the code above does for students. 

// alert("Name: " + totalStudents[0].name + "\n Phone: " + totalStudents[0].phone + "\n City: " + totalStudents[0].city);
// alert("Name: " + totalStudents[1].name + "\n Phone: " + totalStudents[0].phone + "\n City: " + totalStudents[0].city);
// alert("Name: " + totalMentors[0].name + "\n Phone: " + totalMentors[0].phone + "\n City: " + totalMentors[0].city);
// alert("Name: " + totalMentors[1].name + "\n Phone: " + totalMentors[1].phone + "\n City: " + totalMentors[1].city);
// alert("Name: " + totalMentors[2].name + "\n Phone: " + totalMentors[2].phone + "\n City: " + totalMentors[2].city);



















