console.log("Student Result");
//..................................... object
const subjects = {
    "english": 74,
    "science": 68,
    "maths": 59
};

//.....................................calculations
let totalMarks = (subjects["english"] + subjects["maths"] + subjects["science"]);
let percent = (totalMarks / 300 * 100);

// ..................................grade
var grade;

if (percent >= 80) {
    grade = "A+"
}
else if (percent >= 70) {
    grade = "A"
}
else if (percent >= 60) {
    grade = "B"
}
else if (percent >= 50) {
    grade = "C"
}
else {
    grade = "Fail"
}

// ...................result
console.log("English:", subjects["english"]);
console.log("Science:", subjects["science"]);
console.log("Maths:", subjects["maths"]);

console.log("Total Marks:", totalMarks);
console.log("Percentage:", percent.toFixed(2));
console.log("Grade:", grade);

// final result

console.log( (percent<50) ? "You need to work hard":"You have secured" + " " + totalMarks + " " + "Your percentage is" + " " + percent + " " + "and grade is"+" "+ grade);



