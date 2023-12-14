// Write your function here:
const finalGrade = (first, second, third) => {
  // calculate the average
  const average = (first + second + third) / 3;
  // cases for invalid grades
  if (
    first < 0 ||
    first > 100 ||
    second < 0 ||
    second > 100 ||
    third < 0 ||
    third > 100
  ) {
    return 'You have entered an invalid grade.';
  }

  // returns the correspending letter Grades from the calculated average
  if (average >= 0 && average <= 59) {
    return 'F';
  } else if (average >= 60 && average <= 69) {
    return 'D';
  } else if (average >= 70 && average <= 79) {
    return 'C';
  } else if (average >= 80 && average <= 89) {
    return 'B';
  } else if (average >= 90 && average <= 100) {
    return 'A';
  }

  // tried switch statement  but it doesn't work...why?
  // switch (average) {
  //   case (average >= 0 && average <= 59):
  //     return 'F';
  //     break;
  // case (average >= 60 && average <= 69):
  //   return 'D';
  //   break;
  // case (average >= 70 && average <= 79):
  //   return 'C';
  //   break;
  // case (average >= 80 && average <= 89):
  //   return 'B';
  //   break;
  // case (average >= 90 && average <= 100):
  //   return 'A';
  //   break;
  // case (average < 0):
  //   return 'You have entered an invalid grade.';
  //   break;
  // case (average > 100):
  //   return 'You have entered an invalid grade.';
  //   break;
  // }
};

// Uncomment the line below when you're ready to try out your function
console.log(finalGrade(99, 92, 95)); // Should print 'A'

// We encourage you to add more function calls of your own to test your code!
