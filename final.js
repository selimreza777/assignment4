function totalFine(fare) {
  // You have to write your code
  // input validation: not number or not positive
  if (typeof fare !== "number" || fare <= 0) {
    return "Invalid";
  }
  // 20% surcharge 
  let surcharge = fare * (20 / 100);
  // 30 tk fine calculation
  let total = fare + surcharge + 30;
  return total;
}




function onlyCharacter(str) {
  // You have to write your code here
  // if the input is not a string then return Invalid
  if (typeof str !== "string") {
    return "Invalid";
  }
  //all remove space and join 
  let removeSpace = str.split(' ').join('');
  //all character capital letter
  let finalResult = removeSpace.toUpperCase();
  return finalResult;
}







