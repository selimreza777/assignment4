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


console.log(bestTeam({ name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
  { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }));
console.log(bestTeam({ name: "Germany", foul: 12, cardY: 0, cardR: 0 },
  { name: "Sweden", foul: 7, cardY: 4, cardR: 1 }));
console.log(bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },
  { name: "France", foul: 10, cardY: 2, cardR: 1 }));
console.log(bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 }, "France"));