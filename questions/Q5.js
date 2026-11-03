// Q5: Write a program using if-else to assign grades based on marks.

const assignGrade = (marks) => {
  if (marks >= 90) return "A";
  else if (marks >= 75) return "B";
  else if (marks >= 50) return "C";
  else if (marks >= 35) return "D";
  else return "F";
};

console.log(`Marks 95 -> Grade: ${assignGrade(95)}`);
console.log(`Marks 80 -> Grade: ${assignGrade(80)}`);
console.log(`Marks 60 -> Grade: ${assignGrade(60)}`);
console.log(`Marks 25 -> Grade: ${assignGrade(25)}`);
