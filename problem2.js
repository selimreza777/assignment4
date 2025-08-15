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

console.log(onlyCharacter("  h e llo wor   ld"));
console.log(onlyCharacter("Cy   bar- At  tac k  "));
console.log(onlyCharacter(" ha ck m e 1 @ru.c  n  "));
console.log(onlyCharacter("Serv er : : Do wn"));
console.log(onlyCharacter(["hack", "me"]));
console.log(onlyCharacter(true));