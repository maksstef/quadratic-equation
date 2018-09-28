module.exports = function solveEquation(equation) {
  var s = equation.split(' ');



let x1=0 ;

let x2=0 ;

let a=s[0]; 

let b=s[3]+s[4];

let c=s[7]+s[8];



 

x1=Math.round((-b+Math.sqrt(b*b-4*a*c))/(2*a));

x2=Math.round((-b-Math.sqrt(b*b-4*a*c))/(2*a));

if (x1 < x2) return [x1, x2]; else return [x2, x1];



}
