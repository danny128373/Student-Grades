const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
const grades = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  f: 0
}
let aCount = 0;
let bCount = 0;
let cCount = 0;
let dCount = 0;
let fCount = 0;
for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= 90) {
    grades.a++;
    aCount++;
  } else if (scores[i] >= 80) {
    grades.b++;
    bCount++;
  } else if (scores[i] >= 70) {
    grades.c++;
    cCount++;
  } else if (scores[i] >= 60) {
    grades.d++;
    dCount++;
  } else {
    grades.f++;
    fCount++;
  }

}
// # of of each grade
console.info(grades);

//lowest score
console.log(`Worst grade ${Math.min.apply(Math, scores)}`);

// What is the highest score?
console.log(`Highest grade ${Math.max.apply(Math, scores)}`);

// Which grade had the most students achieve it?
const max = Math.max(aCount, bCount, cCount, dCount, fCount);
const min = Math.min(aCount, bCount, cCount, dCount, fCount)
var mode = "";
var lowestFrequency = ""
if (max === aCount) {
  mode = 'A'
} else if (max === bCount) {
  mode = 'B'
} else if (max === cCount) {
  mode = 'C';
} else if (max === dCount) {
  mode = 'D';
} else {
  mode = 'F';
}
if (min === aCount) {
  lowestFrequency = 'A'
} else if (min === bCount) {
  lowestFrequency = 'B'
} else if (min === cCount) {
  lowestFrequency = 'C';
} else if (min === dCount) {
  lowestFrequency = 'D';
} else {
  lowestFrequency = 'F';
}
console.log(`The most frequent grade is ${mode}`);
console.log(`The least frequent grade is ${lowestFrequency}`);

// Hint: Use an if statment, and a currentGradeCount variable, in your for..in loop to see if the current grade's value is higher than the last one. The currentGradeCount variable should be defined before the for loop.

// Which grade had the fewest students achieve it