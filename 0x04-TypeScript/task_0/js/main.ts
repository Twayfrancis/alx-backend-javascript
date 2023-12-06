// Define the Student interface
interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

// Create two students
let student1: Student = {
	firstName: "Francis",
	lastName: "Tawai",
 	age: 28,
 location: "Kisumu"
};

let student2: Student = {
 	firstName: "Noella",
 	lastName: "Francis",
 	age: 22,
 	location: "Kakamega"
};

// Create an array of students
let studentsList: Student[] = [student1, student2];

// Render a table using Vanilla JavaScript
let table = document.createElement('table');
let tbody = document.createElement('tbody');
studentsList.forEach((student) => {
	let row = document.createElement('tr');
 	let firstNameCell = document.createElement('td');
 	let locationCell = document.createElement('td');
 	
	firstNameCell.textContent = student.firstName;
 	locationCell.textContent = student.location;
 	
	row.appendChild(firstNameCell);
 	row.appendChild(locationCell);
 	
	tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);