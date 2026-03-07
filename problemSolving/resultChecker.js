function getTestStatus(marks) {
  if (marks >= 80) {
    return "PASS";
  } else if (marks >= 50 && marks <= 79) {
    return "RETEST";
  } else {
    return "FAIL";
  }
  
}

console.log(getTestStatus(79)); // PASS
console.log(getTestStatus(65)); // RETEST
console.log(getTestStatus(40)); // FAIL


