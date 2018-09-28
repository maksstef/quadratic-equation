module.exports = function solveEquation(equation) {
  // your implementation
  
  var a, b, c;

  var x1, x2;

  var result = [];



  equation = equation.split('x');



  a = parseInt(equation[0], 10);



  b = equation[1].replace(/\s/g, "");

  b = b.slice(2);

  b = parseInt(b, 10);



  c = equation[2].replace(/\s/g, "");

  c = parseInt(c, 10);



  x1 = Math.round((-b + Math.sqrt((Math.pow(b, 2)) - 4 * a * c)) / (2 * a));

  x2 = Math.round((-b - Math.sqrt((Math.pow(b, 2)) - 4 * a * c)) / (2 * a));

  if (x1 < x2) {

    result[result.length] = x1;

    result[result.length] = x2;

  } else {

    result[result.length] = x2;

    result[result.length] = x1;

  }

  

  return result;
}
