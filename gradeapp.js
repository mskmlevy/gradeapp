
function calculateGrade() {
  let grade = document.getElementById('grade1').value;

  if (grade < 60 && grade >= 0) {
        document.getElementById('showGrade').innerHTML = 'F';
  } else if (grade >= 60 && grade < 70) {
        document.getElementById('showGrade').innerHTML = 'D';
  } else if (grade >= 70 && grade < 80) {
    document.getElementById('showGrade').innerHTML = 'C';
  } else if (grade >= 80 && grade < 90) {
    document.getElementById('showGrade').innerHTML = 'B';
  } else if (grade >= 90 && grade <= 100) {
    document.getElementById('showGrade').innerHTML = 'A';
  } else {
    document.getElementById('showGrade').innerHTML = 'Invalid Entry';
  }

  // Write grade to page
  // limit input values to 0-100 reject all other values
}
