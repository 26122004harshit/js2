const students = [
  {
    name: "Mithun",
    marks: 95,
  },
  {
    name: "Prabir",
    marks: 75,
  },
  {
    name: "Alka",
    marks: 92,
  },
  {
    name: "Shivam",
    marks: 70,
  },
  {
    name: "Farman",
    marks: 99,
  },
];
function checkResults(students) {
  for (let student of students) {
    if (student.marks > 90) {
      console.log(
        "Congratulations " + student.name + "! You have cleared the exam."
      );
    } else {
      console.log("sorry " + student.name + "! You have not cleared the exam.");
    }
  }
}

checkResults(students);
