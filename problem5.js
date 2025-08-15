function resultReport(marks) {
  // You have to write your code here
  // validation: not array return invalid 
  if (!Array.isArray(marks)) {
    return "Invalid";
  }
  let sumTotal = 0;
  let passCount = 0;
  let failCount = 0;
  // student mark check
  for (let mark of marks) {
    sumTotal = sumTotal + mark; //total add
    if (mark >= 40) {
      passCount++;
    }
    else {
      failCount++
    }
  }
  // avg calculation 
  let avg;
  if (marks.length > 0) {
    avg = Math.round(sumTotal / marks.length);
  }
  else {
    avg = 0;
  }
  // return result 
  return { finalScore: avg, pass: passCount, fail: failCount };
}
console.log(resultReport(100))
console.log(resultReport([]))
console.log(resultReport([99]))

