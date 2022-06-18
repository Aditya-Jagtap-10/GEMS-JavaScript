var fs = require('fs');
var input=fs.readFileSync('input.txt').toString().trim().split('\n');


var inp=Number(input);

performOperation(inp);
function performOperation(a){
  if (a < 18) {
    console.log("Not Allowed");
  } 
  else {
    console.log("Allowed");
  }
}