var fs = require('fs');
var input=fs.readFileSync('input.txt').toString().trim().split('\n');


input[1]=Number(input[1]);
input[2]=Number(input[2]);
performOperation(input[0],input[1],input[2]);
function performOperation(a,b,c){
if(a==='1'){
    console.log(b+c);
}
else if(a==='2'){
  console.log(b-c);
}
else if(a==='3'){
  console.log(b*c);
}
else if(a==='4'){
   console.log(b/c);
}
}
