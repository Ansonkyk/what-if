var prompt = require('prompt-sync')();
var w=Number(prompt(`Your Earth weight? My good sir.`));
var po=Number(prompt(`Your Planet? My good sir.`));
const p = ["Venus", "Mars", "Jupiter","Saturn","Uranus","Neptune"];
const g=[.79, .39 , 2.65 , 1.17 , 1.05 ,1.23]
if (po>=1 && po<=6){console.log("if Julio weighs "+w+" lbs. on earth, then he would weigh "+(w*g[po-1])+"on "+p[po-1]+", since Mars' gravity is"+g[po-1]+" times earth gravity.") }else{console.log("You are on outerspace my good sir!")}

