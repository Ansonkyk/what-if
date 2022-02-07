var prompt = require('prompt-sync')();
var s=Number(prompt(`How many student are ther?`));
let cl3ass=(s-s%3)/3;
let cl2ass=s%3;
if (s%3==1) {
    cl3ass=cl3ass-1
    cl2ass=cl2ass+1
}
console.log("if we have a class size of "+s+", we would create "+cl3ass+" groups of 3 and "+cl2ass+" group of 2");