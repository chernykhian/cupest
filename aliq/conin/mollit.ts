// Assuming 'student' is an interface with certain properties
interface Student {
  id: number;
  name: string;
  age: number;
  isEnrolled: boolean;
  courses: string[];
}

// Expanded 'jkInfo' object with assumed properties
const jkInfo: Student = {
  id: 1,
  name: 'Jane Doe',
  age: 20,
  isEnrolled: true,
  courses: ['Mathematics', 'Physics', 'Literature'],
};

// Function to display student information
function displayStudentInfo(student: Student): void {
  console.log(`Student ID: ${student.id}`);
  console.log(`Name: ${student.name}`);
  console.log(`Age: ${student.age}`);
  console.log(`Enrollment Status: ${student.isEnrolled ? 'Enrolled' : 'Not Enrolled'}`);
  console.log(`Courses: ${student.courses.join(', ')}`);
}

// Call the function to display 'jkInfo'
displayStudentInfo(jkInfo);
