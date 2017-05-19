let grade= document.getElementById('digit').value;


function calculateGrade(grade){
  if (grade<60&&grade>=0){
    console.log('F');
  }
    if (grade>=60&&grade<70){
      console.log('D');
    }
      if (grade>=70&&grade<80){
        console.log('C');
      }
      if (grade>=80&&grade<90){
        console.log('B');
      }
      if (grade>=90&&grade<=100){
        console.log('A');
      }
      else {
        console.log('Invalid Entry');
      }
}
