function calculateGrade() {
  let grade = document.getElementById('grade1').value;

  if (grade < 60 && grade >= 0) {
    console.log('F');
  } else if (grade >= 60 && grade < 70) {
    console.log('D');
  } else if (grade >= 70 && grade < 80) {
    console.log('C');
  } else if (grade >= 80 && grade < 90) {
    console.log('B');
  } else if (grade >= 90 && grade <= 100) {
    console.log('A');
  } else {
    console.log('Invalid Entry');
  }

  // Write grade to page
  // limit input values to 0-100 reject all other values
}
