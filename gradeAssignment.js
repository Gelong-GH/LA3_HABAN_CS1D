let score = Number(prompt("Enter your score:"));



// Determining the equivalent grade using the ternary operator
let grade = score >= 99 ? "1.00 - Excellent" :
            score >= 95 ? "1.25 - Excellent" :
            score >= 93 ? "1.50 - Above Average" :
            score >= 89 ? "1.75 - Above Average" :
            score >= 86 ? "2.00 - Average" :
            score >= 83 ? "2.25 - Average" :
            score >= 79 ? "2.50 - Below Average" :
            score >= 75 ? "2.75 - Below Average" :
            score === 73 ? "3.00 - Below Average" :
            score >= 72 ? "4.00 - Poor" : "5.00 - Poor";

// using if-else to determin the final remarks
let remarks;
if (score >= 90) {
    remarks = "HIGH PASS, Candidate for Cum Laude";
} else if (score >= 80) {
    remarks = "AVERAGE PASS";
} else if (score >= 75) {
    remarks = "LOW PASS";
} else {
    remarks = "FAILED, Needs Improvement";
}

// Log the results to the console
console.log(`Your equivalent Grade is: ${grade}`); //the equivalent grade from using ternary oprator
console.log(`Final Remarks: ${remarks}`); // the final remarks from using if-ekse