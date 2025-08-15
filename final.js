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




function bestTeam(player1, player2) {
  // You have to write your code here
  // validation: player1 or player2 not Object return Invalid 
  if (typeof player1 !== 'object' || typeof player2 !== 'object' || player1 === null || player2 === null) {
    return "Invalid";
  }
  // team1 total-> foul,cardY,cardR numberIs 
  let team1TotalReport = player1.foul + player1.cardY + player1.cardR;

  // team2 total-> foul,cardY,cardR numberIs 
  let team2TotalReport = player2.foul + player2.cardY + player2.cardR;
  // condition 
  if (team1TotalReport < team2TotalReport) {
    return player1.name;
  }
  else if (team2TotalReport < team1TotalReport) {
    return player2.name;
  }
  else {
    return "Tie";
  }

}












