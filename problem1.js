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


//Train TT's Fine Calculator check
console.log(totalFine(200));
console.log(totalFine(0));
console.log(totalFine(50));
console.log(totalFine(552));
console.log(totalFine(-35));
console.log(totalFine("65"));
console.log(totalFine("Gorib tai ticket katinai"));
